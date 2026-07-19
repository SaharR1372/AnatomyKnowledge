import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";
import { verifyPassword } from "./password";
import { loginSchema } from "./validation";

// Auth.js (NextAuth v5) configuration.
//
// We use the Credentials provider with a JWT session strategy so the MVP needs
// no external auth service and no email provider. Passwords are stored as bcrypt
// hashes; only a signed JWT (no password) ever leaves the server.
export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(raw) {
        const parsed = loginSchema.safeParse(raw);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        const ok = await verifyPassword(password, user.passwordHash);
        if (!ok) return null;

        // The object returned here becomes the JWT payload seed.
        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],
  callbacks: {
    // Persist the user id and role into the token so we don't hit the DB on
    // every request just to read them.
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // `role` is added to the User type in src/types/next-auth.d.ts
        token.role = (user as { role?: string }).role ?? "learner";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role as string) ?? "learner";
      }
      return session;
    },
  },
});

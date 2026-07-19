import type { DefaultSession } from "next-auth";

// Augment the Auth.js types so `session.user.id` and `session.user.role`
// are strongly typed throughout the app.
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}

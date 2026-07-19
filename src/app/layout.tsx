import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { themeInitScript } from "@/components/theme";
import { getCurrentUser } from "@/lib/session";

export const metadata: Metadata = {
  title: {
    default: "AnatomyPath — Learn anatomy & personal training",
    template: "%s · AnatomyPath",
  },
  description:
    "An evidence-based, mobile-friendly platform for learning human anatomy, movement, and personal-training fundamentals — with citations, quizzes, and personalized progress.",
  manifest: "/manifest.webmanifest",
  applicationName: "AnatomyPath",
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

const footerLinks = [
  { href: "/sources", label: "Sources & References" },
  { href: "/credits", label: "Image Credits" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/vocabulary", label: "Vocabulary" },
  { href: "/about", label: "About & Safety" },
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before paint to avoid a flash of the wrong color scheme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg">
          Skip to content
        </a>
        <SiteNav user={user ? { name: user.name, email: user.email, role: user.role } : null} />
        <main id="main" className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="mt-12 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-text">
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="mt-4 max-w-prose">
              Educational content only — this app does not provide medical diagnosis or treatment.
              For pain, injury, or health concerns, consult a qualified healthcare professional.
            </p>
            <p className="mt-2">© {new Date().getFullYear()} AnatomyPath. Built for learning.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

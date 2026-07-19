"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme";
import { logoutAction } from "@/lib/actions/auth";

interface NavUser {
  name?: string | null;
  email: string;
  role: string;
}

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/anatomy", label: "Anatomy" },
  { href: "/exercises", label: "Exercises" },
  { href: "/quiz", label: "Quizzes" },
  { href: "/certification", label: "Cert Prep" },
];

export function SiteNav({ user }: { user: NavUser | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span aria-hidden className="text-xl">🦴</span>
          <span className="hidden sm:inline">AnatomyPath</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-2 ${
                  isActive(l.href) ? "text-primary" : "text-text"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-2">
                Dashboard
              </Link>
              <form action={logoutAction}>
                <button className="rounded-md border border-border px-3 py-2 text-sm hover:bg-surface-2">
                  Sign out
                </button>
              </form>
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/login" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-2">
                Log in
              </Link>
              <Link href="/register" className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-fg hover:opacity-90">
                Sign up
              </Link>
            </div>
          )}

          <button
            className="rounded-md border border-border p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface-2 ${
                    isActive(l.href) ? "text-primary" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="my-1 border-t border-border" />
            {user ? (
              <>
                <li>
                  <Link href="/dashboard" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface-2">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/profile" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface-2">
                    Profile &amp; Settings
                  </Link>
                </li>
                <li>
                  <form action={logoutAction}>
                    <button className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium hover:bg-surface-2">
                      Sign out
                    </button>
                  </form>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface-2">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link href="/register" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium text-primary hover:bg-surface-2">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

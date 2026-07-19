import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="text-5xl font-extrabold text-primary">404</p>
      <h1 className="mt-3 text-xl font-bold">Page not found</h1>
      <p className="mt-2 text-sm text-muted">The page you’re looking for doesn’t exist or may have moved.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90">Home</Link>
        <Link href="/learn" className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-2">Learning path</Link>
      </div>
    </div>
  );
}

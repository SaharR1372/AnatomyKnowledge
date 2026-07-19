"use client";

// Root error boundary. Keeps a friendly message and never leaks internals to users.
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <h1 className="text-xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted">An unexpected error occurred. You can try again.</p>
      <button onClick={reset} className="mt-6 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90">
        Try again
      </button>
    </div>
  );
}

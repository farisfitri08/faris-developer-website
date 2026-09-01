import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Faris Fitri — Independent App Developer",
    template: "%s | Muhammad Faris Fitri",
  },
  description:
    "Official developer website of Muhammad Faris Fitri, an independent app developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <Link
              href="/"
              className="font-bold tracking-tight"
            >
              Muhammad Faris Fitri
            </Link>

            <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/apps"
                className="transition hover:text-blue-600"
              >
                Apps
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-blue-600"
              >
                Privacy
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-blue-600"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Muhammad Faris Fitri. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy Policy
              </Link>

              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
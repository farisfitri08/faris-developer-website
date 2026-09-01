import Link from "next/link";

export default function Apps() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Applications
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight">
          Apps
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-600">
          Mobile applications developed independently by Muhammad Faris Fitri.
        </p>

        {/* App Card */}
        <div className="mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Entertainment
          </span>

          <h2 className="mt-6 text-2xl font-bold">
            Neymar Fake Video Call & Chat
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            An unofficial fan-made entertainment app that simulates
            fictional video calls and chats with Neymar.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
            <strong className="text-slate-900">
              Disclaimer:
            </strong>{" "}
            This app is not affiliated with, endorsed by, or sponsored
            by Neymar or any official organization associated with him.
          </div>

          <button
            disabled
            className="mt-7 cursor-not-allowed rounded-full bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
          >
            Google Play — Coming soon
          </button>

          <p className="mt-4 text-xs text-slate-400">
            The Google Play link will be added after the app is published.
          </p>
        </div>

        <Link
          href="/privacy"
          className="mt-10 inline-block font-semibold text-blue-600 hover:text-blue-700"
        >
          Read Privacy Policy →
        </Link>
      </section>
    </main>
  );
}
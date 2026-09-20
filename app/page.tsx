import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Independent App Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Muhammad Faris{" "}
            <span className="text-blue-600">Fitri</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Building simple, entertaining and useful mobile experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/apps"
              className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              View Apps
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-blue-600">ABOUT</p>

          <h2 className="mt-3 text-3xl font-bold">
            Independent development
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Muhammad Faris Fitri is an independent app developer creating
            mobile applications and digital products with a focus on
            straightforward and enjoyable user experiences.
          </p>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            FEATURED APPS
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Fake Video Call & Chat Apps
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Entertainment
          </span>

          <p className="mt-6 text-lg font-semibold">
            Unofficial fan-made entertainment apps
          </p>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            A collection of fictional fake video call and chat experiences
            inspired by popular public figures, created for entertainment
            purposes.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
            <strong className="text-slate-900">Disclaimer:</strong>{" "}
            These apps are unofficial fan-made entertainment applications.
            They are not affiliated with, endorsed by, or sponsored by the
            individuals or organizations represented in the apps.
          </div>

          <Link
            href="/apps"
            className="mt-7 inline-block font-semibold text-blue-600 hover:text-blue-700"
          >
            View all apps →
          </Link>
        </div>
      </section>
    </main>
  );
}
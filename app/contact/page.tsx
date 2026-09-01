export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Get in touch
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight">
          Contact
        </h1>

        <div className="mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Muhammad Faris Fitri
          </h2>

          <p className="mt-2 text-slate-500">
            Independent App Developer
          </p>

          <p className="mt-7 leading-7 text-slate-600">
            For app support, privacy questions, or general inquiries,
            please contact:
          </p>

          <a
            href="mailto:CONTACT_EMAIL@example.com"
            className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-700"
          >
            farisfitri08@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
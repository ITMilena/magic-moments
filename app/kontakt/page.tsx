export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-16 text-[#3d2c2a]">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-semibold">Kontakt</h1>
        <p className="mb-10 text-lg text-[#6f5a57]">
          Javite nam se za organizaciju, dekoraciju i sve detalje vezane za vaš događaj.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#e8ddd2] bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-medium">Kontakt informacije</h2>
            <p className="mb-3">Milena Živković</p>
            <p className="mb-3">
              <a href="tel:+381601938373" className="hover:underline">
                060 / 193 - 83 - 73
              </a>
            </p>
            <p className="mb-3">
              <a href="mailto:tvojmail@gmail.com" className="hover:underline">
                tvojmail@gmail.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-[#e8ddd2] bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-medium">Pošaljite upit</h2>
            <a
              href="mailto:tvojmail@gmail.com?subject=Upit%20sa%20sajta%20Magic%20Moments"
              className="inline-block rounded-full bg-[#9c7c5b] px-6 py-3 text-white transition hover:opacity-90"
            >
              Pošalji upit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
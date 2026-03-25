export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-24 text-[#2d2d2d]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Magic Moments
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Kontakt</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b6b6b]">
            Pišite nam i zajedno ćemo kreirati događaj koji ostavlja utisak.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h2 className="mb-6 text-xl font-semibold uppercase tracking-[0.04em] text-[#2d2d2d]">
              Kontakt informacije
            </h2>

            <div className="space-y-6 text-[#555]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b88a2c]">
                  Telefon
                </p>
                <a
                  href="tel:+381601938373"
                  className="text-lg transition hover:text-[#b88a2c]"
                >
                  060 / 193 - 83 - 73
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b88a2c]">
                  Email
                </p>
                <a
                  href="mailto:OVDE_STAVI_EMAIL"
                  className="text-lg transition hover:text-[#b88a2c]"
                >
                  OVDE_STAVI_EMAIL
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b88a2c]">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg transition hover:text-[#b88a2c]"
                >
                  @magicmoments
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#2d2d2d] p-10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8c0c6]">
                Upit
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Pošaljite upit
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#e7e7e7]">
                Pišite nam za rođendane, dekoracije i sve vrste događaja.
                Odgovaramo brzo i detaljno.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:OVDE_STAVI_EMAIL?subject=Upit%20sa%20sajta%20Magic%20Moments"
                className="inline-block rounded-full bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:opacity-90"
              >
                Pošaljite upit
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
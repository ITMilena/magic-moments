export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] py-24 px-6 text-[#2d2d2d]">
      <div className="mx-auto max-w-6xl">

        {/* NASLOV */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Magic Moments
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Kontakt
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6b6b6b]">
            Pišite nam i zajedno ćemo kreirati događaj koji ostavlja utisak.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* LEVO */}
          <div className="rounded-3xl bg-white p-10 shadow">
            <h2 className="mb-6 text-xl font-semibold uppercase">
              Kontakt informacije
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-xs uppercase text-[#b88a2c]">Telefon</p>
                <a href="tel:+381601938373" className="text-lg">
                  060 / 193 - 83 - 73
                </a>
              </div>

              <div>
                <p className="text-xs uppercase text-[#b88a2c]">Email</p>
                <a href="mailto:OVDE_STAVI_EMAIL" className="text-lg">
                  OVDE_STAVI_EMAIL
                </a>
              </div>

              <div>
                <p className="text-xs uppercase text-[#b88a2c]">Instagram</p>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className="text-lg"
                >
                  @magicmoments
                </a>
              </div>

            </div>
          </div>

          {/* DESNO */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#2d2d2d] p-10 text-white">

            <div>
              <p className="text-xs uppercase text-[#d8c0c6]">Upit</p>
              <h2 className="mt-4 text-3xl font-semibold">
                Pošaljite upit
              </h2>
              <p className="mt-5 text-sm text-[#e7e7e7]">
                Pišite nam za rođendane, dekoracije i događaje.
              </p>
            </div>

            <a
              href="mailto:OVDE_STAVI_EMAIL?subject=Upit%20sa%20sajta"
              className="mt-10 inline-block rounded-full bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase text-white"
            >
              Pošaljite upit
            </a>

          </div>

        </div>
      </div>
    </main>
  );
}
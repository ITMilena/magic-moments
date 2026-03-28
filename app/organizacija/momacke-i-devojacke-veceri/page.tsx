import Link from "next/link";

export default function MomackeIDevojackeVeceriPage() {
  const services = [
    "Planiranje i koordinacija događaja",
    "Pronalaženje i rezervacija sale / lokala",
    "Organizacija muzičkog programa i DJ-a",
    "Tematski dizajn i dekoracija prostora",
    "Piće, ketering i specijalni meni po izboru",
    "Fotografisanje i video snimanje događaja",
    "Specijalni efekti i dodatni zabavni sadržaj",
  ];

  const highlights = [
    {
      title: "Atmosfera koja se pamti",
      text: "Kreiramo momačke i devojačke večeri koje izgledaju efektno, moderno i potpuno u skladu sa energijom ekipe i stilom proslave.",
    },
    {
      title: "Zabava bez kompromisa",
      text: "Od muzike, prostora i rasvete do posebnih detalja i programa, svaki segment pažljivo organizujemo kako bi veče bilo dinamično i nezaboravno.",
    },
    {
      title: "Vi slavite, mi vodimo računa o svemu",
      text: "Naš tim koordinira tok događaja, saradnike i sve detalje iza scene kako biste vi mogli da uživate bez stresa i improvizacije.",
    },
  ];

  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/momacko1.jpg"
            alt="Momačke i devojačke večeri"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(28,31,36,0.50)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,31,36,0.70)] via-[rgba(28,31,36,0.35)] to-[rgba(28,31,36,0.15)]" />
        </div>

        <div className="relative mx-auto grid min-h-[78vh] max-w-[1400px] items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#f0d79c]">
              Magic Moments
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Organizacija momačkih i devojačkih večeri sa stilom, energijom i
              pažljivo osmišljenim detaljima
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Momačko i devojačko veče su posebni trenuci koji zaslužuju vrhunsku
              atmosferu, dobar provod i organizaciju bez stresa. Zato kreiramo
              proslave koje spajaju moderan izgled, jaku energiju i pažljivo
              isplanirane detalje — od prostora i muzike do dekoracije,
              fotografije i kompletnog doživljaja.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
              >
                Pošaljite upit
              </Link>

              <Link
                href="/galerija"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
              >
                Pogledajte galeriju
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="max-w-[430px] rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d79c]">
                Šta dobijate
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "Kompletnu organizaciju večeri",
                  "Moderan i efektan vizuelni identitet događaja",
                  "Pouzdanu koordinaciju saradnika i programa",
                  "Veče bez stresa, improvizacije i propuštenih detalja",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/90 px-4 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c9a75d]" />
                    <span className="text-sm leading-6 text-[#34404c]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
                O proslavi
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#26313f] md:text-5xl">
                Veče organizovano moderno, efektno i potpuno u skladu sa vašom
                energijom
              </h2>

              <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
                Naš cilj nije samo da organizujemo događaj, već da kreiramo
                veče koje izgleda upečatljivo, deluje spontano i ostavlja snažan
                utisak na sve goste. Svaku momačku i devojačku veče planiramo
                u skladu sa vašim željama, stilom ekipe i atmosferom koju želite
                da postignete.
              </p>

              <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
                Vodimo računa o prostoru, muzici, dekoraciji, rasporedu večeri,
                fotografiji, posebnom programu i svim detaljima koji čine da
                provod bude elegantan, energičan i nezaboravan.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-sm">
                <img
                  src="/momacko2.jpeg"
                  alt="Dekoracija za momačko i devojačko veče"
                  className="h-[260px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-sm sm:translate-y-10">
                <img
                  src="/momacko3.jpeg"
                  alt="Detalji sa momačke i devojačke večeri"
                  className="h-[260px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
              Usluge
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#26313f] md:text-5xl">
              Šta obuhvata organizacija momačkih i devojačkih večeri
            </h2>
            <p className="mt-6 text-base leading-8 text-[#635c51] md:text-lg">
              Sve što je potrebno za upečatljivu, modernu i besprekorno
              organizovanu proslavu na jednom mestu.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[26px] border border-[#e7dac2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f6ecdb] text-xl">
                  ✨
                </div>

                <p className="text-lg font-semibold leading-7 text-[#26313f]">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#eadfca] bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b88a2c]">
                  Magic Moments
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#26313f]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#5d564c]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#26313f] px-6 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0d79c]">
              Zašto mi
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Vi uživate u provodu, a mi vodimo računa o svakom detalju večeri
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Znamo koliko je važno da momačko ili devojačko veče bude efektno,
              moderno i savršeno organizovano. Zato preuzimamo planiranje,
              koordinaciju i kompletnu realizaciju, kako biste vi mogli da se
              posvetite provodu, ekipi i nezaboravnim trenucima.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
            <img
              src="/momacko4.jpeg"
              alt="Momačko i devojačko veče"
              className="h-[360px] w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-[#eadfca] bg-[#fcfaf6] px-8 py-14 text-center shadow-sm md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
            Kontakt
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#26313f] md:text-5xl">
            Hajde da zajedno osmislimo veče koje se dugo pamti
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Javite nam željeni stil, broj gostiju i ideju večeri, a mi ćemo
            pripremiti koncept koji spaja energiju, moderan izgled i
            besprekornu organizaciju.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
            >
              Kontaktirajte nas
            </Link>

            <Link
              href="/galerija"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c8a9] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#26313f] transition hover:bg-white"
            >
              Pogledajte galeriju
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default function PrviRodjendanPage() {
  const services = [
    "Planiranje i koordinacija događaja",
    "Pronalaženje i rezervacija sale / lokala",
    "Organizacija posluženja i keteringa",
    "Dizajn i dekoracija prostora",
    "Fotografisanje i video snimanje događaja",
    "Personalizovani detalji i dekor",
    "Koordinacija svih važnih trenutaka proslave",
  ];

  const highlights = [
    {
      title: "Nežna i svečana atmosfera",
      text: "Kreiramo proslavu prvog rođendana sa merom, elegancijom i toplinom, uz pažljivo usklađene detalje koji odgovaraju važnosti ovog posebnog porodičnog trenutka.",
    },
    {
      title: "Sve na jednom mestu",
      text: "Od prostora, dekoracije i posluženja do organizacije fotografije i svih bitnih segmenata, preuzimamo kompletnu realizaciju događaja.",
    },
    {
      title: "Bez stresa za porodicu",
      text: "Dok se vi posvećujete gostima i najlepšim trenucima, naš tim vodi računa o organizaciji, toku događaja i svakom detalju iza scene.",
    },
  ];

  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/dekoracija10.jpeg"
            alt="Organizacija prvog rođendana"
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
              Organizacija prvog rođendana sa elegancijom, toplinom i pažljivo
              osmišljenim detaljima
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Prvi rođendan je jedan od najvažnijih porodičnih trenutaka. Zato
              osmišljavamo proslavu koja spaja nežnu atmosferu, svečan ambijent
              i besprekornu organizaciju — od prostora i dekoracije do posluženja,
              fotografije i svakog važnog detalja.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
              >
                Pošaljite upit
              </a>

              <a
                href="/galerija"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
              >
                Pogledajte galeriju
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="max-w-[430px] rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d79c]">
                Šta dobijate
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "Kompletnu organizaciju proslave prvog rođendana",
                  "Nežno i elegantno uređenu atmosferu",
                  "Pouzdanu koordinaciju svih segmenata",
                  "Mirnu i bezbrižnu proslavu za porodicu",
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
                Prvi rođendan organizovan sa merom, stilom i posebnom pažnjom
              </h2>

              <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
                Naš pristup organizaciji prvog rođendana zasniva se na tome da
                svaki detalj bude pažljivo usklađen sa značajem ovog dana.
                Kreiramo proslavu koja je istovremeno svečana, prijatna i
                estetski prelepa, prilagođena vašim željama i potrebama porodice.
              </p>

              <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
                Vodimo računa o prostoru, dekoraciji, posluženju, rasporedu
                događaja i svim važnim elementima kako bi vi mogli da uživate
                u trenutku i podelite ga sa svojim najbližima.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-sm">
                <img
                  src="/dekoracija1.jpg"
                  alt="Dekoracija za prvi rođendan"
                  className="h-[260px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-sm sm:translate-y-10">
                <img
                  src="/event2.jpeg"
                  alt="Detalji sa proslave prvog rođendana"
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
              Šta obuhvata organizacija prvog rođendana
            </h2>
            <p className="mt-6 text-base leading-8 text-[#635c51] md:text-lg">
              Sve što je potrebno za skladnu, elegantnu i bezbrižno organizovanu
              proslavu na jednom mestu.
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
              Vi uživate u važnom danu, a mi vodimo računa o svakom detalju
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Organizacija prvog rođendana traži pažnju, osećaj za meru i dobru
              koordinaciju. Naš tim se brine da sve izgleda skladno, teče bez
              stresa i ostavi predivan utisak na vas i vaše goste.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
            <img
              src="/iznenadjenje2.jpg"
              alt="Svečana dekoracija za prvi rođendan"
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
            Hajde da zajedno osmislimo svečan i nezaboravan prvi rođendan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Javite nam svoje želje, broj gostiju i stil proslave, a mi ćemo
            pripremiti koncept koji spaja eleganciju, toplinu i besprekornu
            organizaciju.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
            >
              Kontaktirajte nas
            </a>

            <a
              href="/galerija"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c8a9] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#26313f] transition hover:bg-white"
            >
              Pogledajte galeriju
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
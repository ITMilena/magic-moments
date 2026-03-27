import Link from "next/link";

export default function ZurkaIznenadjenjaPage() {
  const services = [
    "Planiranje i koordinacija iznenađenja",
    "Pronalaženje i rezervacija prostora",
    "Organizacija muzike i programa",
    "Tematski dizajn i dekoracija",
    "Ketering i piće po izboru",
    "Fotografisanje i snimanje reakcija",
    "Diskretna koordinacija gostiju",
  ];

  const highlights = [
    {
      title: "Emocija koja se pamti zauvek",
      text: "Organizujemo trenutke iznenađenja koji izazivaju iskrene reakcije i ostavljaju snažan utisak na slavljenika i sve prisutne.",
    },
    {
      title: "Savršeno tempiran trenutak",
      text: "Planiramo svaki detalj i pravi momenat iznenađenja kako bi reakcija bila spontana, snažna i potpuno nezaboravna.",
    },
    {
      title: "Bez stresa i improvizacije",
      text: "Vi uživate u trenutku i emociji, dok naš tim vodi računa o organizaciji, gostima i celokupnom toku događaja.",
    },
  ];

  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/iznenadjenje1.jpg"
            alt="Žurka iznenađenja"
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
              Organizacija žurki iznenađenja sa pažljivo osmišljenim trenutkom i
              emocijom koja se pamti
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Žurka iznenađenja je poseban trenutak pun emocija, smeha i
              nezaboravnih reakcija. Zato kreiramo događaje koji spajaju
              savršeno tempiranje, atmosferu i detalje koji ostavljaju snažan
              utisak.
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
                  "Kompletnu organizaciju iznenađenja",
                  "Savršeno tempiran trenutak reakcije",
                  "Diskretnu koordinaciju gostiju",
                  "Nezaboravno emotivno iskustvo",
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

      {/* OPIS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
                O događaju
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#26313f] md:text-5xl">
                Iznenađenje koje ostavlja snažan utisak i pamti se zauvek
              </h2>

              <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
                Naš cilj nije samo da organizujemo događaj, već da kreiramo
                trenutak koji izaziva iskrenu emociju. Svaku žurku planiramo
                do detalja — od dolaska gostiju do savršenog momenta
                iznenađenja.
              </p>

              <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
                Vodimo računa o prostoru, muzici, dekoraciji, rasporedu,
                gostima i svakom detalju koji doprinosi savršenom trenutku.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-sm">
                <img
                  src="/iznenadjenje2.jpg"
                  alt="Dekoracija za iznenađenje"
                  className="h-[260px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-sm sm:translate-y-10">
                <img
                  src="/iznenadjenje3.jpg"
                  alt="Trenutak iznenađenja"
                  className="h-[260px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section className="bg-[#fbf8f2] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
              Usluge
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#26313f] md:text-5xl">
              Šta obuhvata organizacija žurke iznenađenja
            </h2>
            <p className="mt-6 text-base leading-8 text-[#635c51] md:text-lg">
              Sve što je potrebno za savršeno tempirano i emotivno snažno
              iznenađenje na jednom mestu.
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

                <p className="text-lg font-semibold text-[#26313f]">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#eadfca] bg-white p-8 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#b88a2c]">
                Magic Moments
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[#26313f]">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-[#5d564c]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#26313f] px-6 py-20 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Spremni za savršeno iznenađenje?
        </h2>

        <Link
          href="/kontakt"
          className="mt-6 inline-block bg-[#c9a75d] px-8 py-4 rounded-full text-white font-semibold"
        >
          Kontaktirajte nas
        </Link>
      </section>
    </main>
  );
}
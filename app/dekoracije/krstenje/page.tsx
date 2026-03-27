export default function DekoracijaKrstenjePage() {
  const elementi = [
    "Dekoracija stolova",
    "Dekoracija stolica",
    "Paravan za slikanje",
    "Tabla dobrodošlice",
    "Pozivnice i personalizovani detalji",
    "Pokloni za goste",
  ];

  const koraci = [
    {
      step: "01",
      title: "Uvodne konsultacije",
      text: "Na prvom razgovoru prolazimo kroz vaše želje, stil proslave, broj gostiju i obim dekoracije koju želite.",
    },
    {
      step: "02",
      title: "Ideje i inspiracija",
      text: "Prikupljamo smernice, fotografije i primere koji vam se dopadaju, kako bismo definisali jasan pravac dekoracije.",
    },
    {
      step: "03",
      title: "Predlog po vašim željama",
      text: "Pripremamo konkretan predlog izgleda dekoracije, uz usklađivanje boja, detalja i svih elemenata prostora.",
    },
    {
      step: "04",
      title: "Korekcije i dorada",
      text: "Po potrebi korigujemo detalje, dorađujemo koncept i zajedno dolazimo do finalnog izgleda koji vam potpuno odgovara.",
    },
    {
      step: "05",
      title: "Postavljanje i uklanjanje",
      text: "Na dan proslave naš tim postavlja dekoraciju prema dogovoru, a nakon događaja preuzima dekorativni materijal.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#2f2a28]">
      <section className="border-b border-[#ece3d8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#b88a2c]">
            Magic Moments
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-5xl">
            Dekoracija za krštenje
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5a57]">
            Nežna, elegantna i pažljivo osmišljena dekoracija za krštenje koja
            stvara toplu atmosferu i ostavlja poseban utisak na porodicu i goste.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-20">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Dekoracija krštenja i prvog rođendana
          </p>
          <h2 className="mb-6 text-3xl font-semibold text-[#26313f] md:text-4xl">
            Sve treba da izgleda nežno, skladno i posebno
          </h2>
          <p className="mb-5 leading-8 text-[#5a5552]">
            Kada se krštenje spaja sa prvim rođendanom, dekoracija dobija još
            važniju ulogu. Usklađujemo boje, stil i detalje tako da prostor deluje
            svečano, elegantno i toplo.
          </p>
          <p className="leading-8 text-[#5a5552]">
            Najčešće se biraju pastelni tonovi, nežni ukrasi, personalizovani
            detalji sa imenom deteta i raskošni baloni koji daju proslavi poseban
            vizuelni pečat. Referentna stranica slično naglašava pastelne tonove,
            slatki sto, ime deteta i balone kao ključne elemente dekoracije. :contentReference[oaicite:2]{index = 2}
          </p>
        </div>

        <div>
          <img
            src="/dekor-krstenje-hero.jpg"
            alt="Dekoracija za krštenje"
            className="h-full min-h-[360px] w-full rounded-[28px] object-cover"
          />
        </div>
      </section>

      <section className="border-y border-[#ece3d8] bg-[#fcfaf6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
              Šta može da bude uključeno
            </p>
            <h2 className="text-3xl font-semibold text-[#26313f] md:text-4xl">
              Elementi dekoracije
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {elementi.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-[#eadfd2] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <h3 className="text-xl font-semibold uppercase tracking-[0.03em] text-[#26313f]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#eadfd2] bg-white p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
              Za dečake
            </p>
            <h2 className="mb-5 text-3xl font-semibold text-[#26313f]">
              Dekoracija za krštenje dečaka
            </h2>
            <p className="leading-8 text-[#5a5552]">
              Najčešće se koriste plave nijanse u kombinaciji sa belom, bež ili
              prirodnim tonovima. Mogu se uključiti životinjske teme, crtani junaci
              ili potpuno nežan minimalistički koncept.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#eadfd2] bg-white p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
              Za devojčice
            </p>
            <h2 className="mb-5 text-3xl font-semibold text-[#26313f]">
              Dekoracija za krštenje devojčica
            </h2>
            <p className="leading-8 text-[#5a5552]">
              Najtraženije su nežne roze, bež, bele i zlatne kombinacije. Često se
              biraju leptirići, mašne, cveće, princeza motivi i elegantni detalji
              koji prostoru daju mekoću i toplinu. Slično i referentna stranica
              izdvaja plavu za dečake i roze/pastelne kombinacije za devojčice. :contentReference[oaicite:3]{index = 3}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ece3d8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
              Proces saradnje
            </p>
            <h2 className="text-3xl font-semibold text-[#26313f] md:text-4xl">
              Korak po korak
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {koraci.map((item) => (
              <div
                key={item.step}
                className="rounded-[30px] border border-[#eadfd2] bg-[#fcfaf6] p-8"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d8c0c6] text-sm font-semibold text-white">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-[#26313f]">
                    {item.title}
                  </h3>
                </div>
                <p className="leading-8 text-[#5a5552]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
              Završni utisak
            </p>
            <h2 className="mb-5 text-3xl font-semibold text-[#26313f]">
              Dekoracija koja ostaje u sećanju
            </h2>
            <p className="leading-8 text-[#5a5552]">
              Naš cilj nije samo da prostor izgleda lepo, već da celina deluje
              nežno, elegantno i smisleno. Svaki detalj usklađujemo sa vašim
              željama, prostorom i energijom proslave.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#2d2d2d] p-8 text-white md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d8c0c6]">
              Sledeći korak
            </p>
            <h2 className="mb-5 text-3xl font-semibold">
              Hajde da osmislimo dekoraciju
            </h2>
            <p className="mb-8 leading-8 text-[#e7e7e7]">
              Javite nam se i pripremićemo predlog dekoracije za krštenje u skladu
              sa vašim željama, bojama i stilom proslave.
            </p>

            <a
              href="/kontakt"
              className="inline-block rounded-full bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:opacity-90"
            >
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
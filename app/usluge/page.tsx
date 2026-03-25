export default function UslugePage() {
  const usluge = [
    {
      id: "organizacija-rodjendana",
      title: "Organizacija proslave rođendana",
      text: "Pomažemo vam da od prve ideje do završne realizacije sve bude jasno, pregledno i bez stresa. Zajedno planiramo koncept, dinamiku, detalje i atmosferu događaja.",
      image: "/rodjendan1.jpg",
    },
    {
      id: "dekoracija-dogadjaja",
      title: "Dekoracija događaja",
      text: "Kreiramo nežnu, elegantnu i skladnu dekoraciju koja prati ton proslave. Boje, detalji, cveće, rasveta i raspored zajedno grade jedinstvenu atmosferu.",
      image: "/dekoracija1.jpg",
    },
    {
      id: "organizacija-dogadjaja",
      title: "Organizacija događaja",
      text: "Organizujemo privatne i poslovne događaje sa profesionalnim pristupom, jasnim planom i estetski usklađenom realizacijom, kako bi sve teklo mirno i bez opterećenja za vas.",
      image: "/event1.jpg",
    },
  ];

  const koraci = [
    {
      step: "01",
      title: "Prvi razgovor",
      text: "Upoznajemo se, slušamo vaše želje, stil i ideju događaja. Razgovaramo o datumu, broju gostiju, prostoru i svemu što vam je važno.",
    },
    {
      step: "02",
      title: "Predlog koncepta",
      text: "Na osnovu dogovora pripremamo pravac uređenja i organizacije — boje, atmosfera, detalji i predlog usluga koje ulaze u realizaciju.",
    },
    {
      step: "03",
      title: "Plan i priprema",
      text: "Precizno definišemo korake, rezervacije, saradnike i dinamiku. Sve dobija svoju strukturu kako biste u svakom trenutku znali šta sledi.",
    },
    {
      step: "04",
      title: "Realizacija događaja",
      text: "Na dan proslave usklađujemo sve elemente na terenu i vodimo računa da svaki detalj izgleda baš onako kako je zamišljeno.",
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
            Usluge organizacije i dekoracije proslava
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5a57]">
            Pažljivo planiranje, nežna estetika i potpuna podrška u svakom koraku
            — kako bi vaš događaj bio skladan, elegantan i bez nepotrebnog stresa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8">
          {usluge.map((item) => (
            <div
              id={item.id}
              key={item.id}
              className="grid items-center gap-8 rounded-[28px] border border-[#eadfd2] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:grid-cols-[1.05fr_0.95fr]"
            >
              <div>
                <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[0.03em] text-[#26313f]">
                  {item.title}
                </h2>
                <p className="leading-8 text-[#5a5552]">{item.text}</p>
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="h-[320px] w-full rounded-[24px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#ece3d8] bg-[#fcfaf6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
              Kako izgleda saradnja
            </p>
            <h2 className="text-3xl font-semibold text-[#26313f] md:text-4xl">
              Korak po korak, jasno i pregledno
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {koraci.map((item) => (
              <div
                key={item.step}
                className="rounded-[30px] border border-[#eadfd2] bg-white p-8"
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
              Napomena
            </p>
            <h2 className="mb-5 text-3xl font-semibold text-[#26313f]">
              Svaka proslava se planira individualno
            </h2>
            <p className="leading-8 text-[#5a5552]">
              Svaki događaj prilagođavamo vašim željama, budžetu, prostoru i energiji
              koju želite da prenesete gostima. Upravo zato je svaki detalj
              promišljen, a celina skladna i nežna.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#2d2d2d] p-8 text-white md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d8c0c6]">
              Sledeći korak
            </p>
            <h2 className="mb-5 text-3xl font-semibold">
              Hajde da osmislimo vašu proslavu
            </h2>
            <p className="mb-8 leading-8 text-[#e7e7e7]">
              Ako želite da zajedno prođemo kroz ideju, stil i organizaciju,
              javite nam se i pripremićemo predlog saradnje.
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
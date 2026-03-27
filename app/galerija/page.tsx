import Link from "next/link";

const dekoracijeSlike = [
  { src: "/dekoracija1.jpg", alt: "Dekoracija 1" },
  { src: "/dekoracija2.jpg", alt: "Dekoracija 2" },
  { src: "/dekoracija3.jpg", alt: "Dekoracija 3" },

  { src: "/event1.jpg", alt: "Event 1" },
  { src: "/event2.jpg", alt: "Event 2" },
  { src: "/event3.jpg", alt: "Event 3" },

  { src: "/iznenadjenje2.jpg", alt: "Iznenađenje 2" },
  { src: "/iznenadjenje3.jpg", alt: "Iznenađenje 3" },

  { src: "/krstenje1.jpeg", alt: "Krštenje 1" },
  { src: "/krstenje2.jpeg", alt: "Krštenje 2" },
  { src: "/krstenje3.jpeg", alt: "Krštenje 3" },
];

const albumi = [
  {
    title: "Album dekoracija",
    subtitle: "Dostupno",
    image: "/dekoracija1.jpg",
    href: "#album-dekoracija",
    available: true,
  },
  {
    title: "Album krštenja",
    subtitle: "Uskoro",
    image: "/krstenje1.jpeg",
    href: "#",
    available: false,
  },
  {
    title: "Album rođendana",
    subtitle: "Uskoro",
    image: "/rodjendan3.jpg",
    href: "#",
    available: false,
  },
];

export default function GalerijaPage() {
  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      <section className="bg-[#cfd5e3] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Magic Moments
          </p>

          <h1 className="mt-6 text-4xl font-semibold uppercase tracking-[0.10em] text-[#f7f2e8] md:text-7xl">
            Galerija
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-6xl space-y-5 text-[17px] leading-8 text-[#5f5a52]">
            <p>
              U našoj galeriji možete pronaći inspiraciju za različite vrste
              proslava, dekoracija i pažljivo osmišljenih detalja koji stvaraju
              posebnu atmosferu.
            </p>

            <p>
              Za sada smo izdvojili album dekoracija, dok albumi krštenja i
              rođendana uskoro stižu sa još više primera, ideja i fotografija.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {albumi.map((album) => (
              <div
                key={album.title}
                className="group overflow-hidden rounded-[10px] bg-white transition"
              >
                <div className="relative h-[260px] overflow-hidden md:h-[320px]">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-white/35 transition group-hover:bg-black/25" />

                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    {album.available ? (
                      <a
                        href={album.href}
                        className="inline-flex items-center justify-center bg-[#ead6dd]/95 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.10em] text-white shadow-sm transition hover:bg-[#d8bcc6]"
                      >
                        {album.title}
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center bg-[#ead6dd]/90 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.10em] text-white shadow-sm">
                        {album.title}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#7b6f5c]">
                    {album.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="album-dekoracija"
        className="border-t border-[#efe5d5] bg-[#fbf8f2] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
                Album dekoracija
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#26313f] md:text-5xl">
                Izdvojene dekoracije
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Trenutno su dostupne fotografije dekoracija i ambijenata koje mogu
              poslužiti kao inspiracija za vašu narednu proslavu.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dekoracijeSlike.map((slika, index) => (
              <div
                key={`${slika.src}-${index}`}
                className="group overflow-hidden rounded-[18px] border border-[#eadfca] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={slika.src}
                    alt={slika.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 px-4 pb-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl bg-white/92 px-4 py-3 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-[#26313f]">
                        {slika.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#eadfca] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b88a2c]">
              Album krštenja
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#26313f]">
              Uskoro dostupno
            </h3>

            <p className="mt-4 text-base leading-8 text-[#5f5a52]">
              Uskoro dodajemo izdvojene fotografije sa krštenja, dekoracije,
              sale i detalje koji mogu poslužiti kao inspiracija.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#eadfca] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b88a2c]">
              Album rođendana
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#26313f]">
              Uskoro dostupno
            </h3>

            <p className="mt-4 text-base leading-8 text-[#5f5a52]">
              Dodavaćemo i album rođendana sa različitim stilovima proslava,
              dekoracija i ideja za odrasle i dečije događaje.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-[#eadfca] bg-[#fcfaf6] px-8 py-14 text-center shadow-sm md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
            Kontakt
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#26313f] md:text-5xl">
            Hajde da zajedno osmislimo vašu dekoraciju
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Ako vam se dopada stil iz galerije, javite nam se i zajedno ćemo
            pronaći dekoraciju i koncept koji odgovara vašoj proslavi.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
            >
              Kontaktirajte nas
            </Link>

            <a
              href="#album-dekoracija"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c8a9] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#26313f] transition hover:bg-white"
            >
              Pogledajte dekoracije
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

const saveti = [
  {
    slug: "top-7-ideja-za-dekoraciju-rodjendana",
    title: "Top 7 ideja za dekoraciju rođendana",
    excerpt:
      "Inspiracija za dekoraciju koja prostoru daje karakter, toplinu i utisak proslave koja se pamti.",
    image: "/dekoracija1.jpg",
    date: "01/04/2026",
    category: "Dekoracija",
  },
  {
    slug: "kako-organizovati-savrseno-punoletstvo",
    title: "Kako organizovati savršeno punoletstvo",
    excerpt:
      "Od prostora i muzike do rasporeda večeri — kako da punoletstvo izgleda moderno, elegantno i bez stresa.",
    image: "/event1.jpg",
    date: "02/04/2026",
    category: "Punoletstvo",
  },
  {
    slug: "ideje-za-deciji-rodjendan",
    title: "Ideje za dečiji rođendan",
    excerpt:
      "Praktični saveti za proslavu koja je zabavna deci, pregledna roditeljima i lepo organizovana od početka do kraja.",
    image: "/event2.jpg",
    date: "03/04/2026",
    category: "Rođendani",
  },
  {
    slug: "kako-izabrati-idealnu-dekoraciju",
    title: "Kako izabrati idealnu dekoraciju",
    excerpt:
      "Kako uskladiti boje, stil, prostor i detalje da dekoracija izgleda skladno, luksuzno i prirodno.",
    image: "/dekoracija2.jpg",
    date: "04/04/2026",
    category: "Dekoracija",
  },
  {
    slug: "trendovi-dekoracije-u-2026",
    title: "Trendovi dekoracije u 2026",
    excerpt:
      "Najlepši pravci u dekoraciji proslava — od elegantnih tonova do upečatljivih detalja koji dominiraju prostorom.",
    image: "/dekoracija3.jpg",
    date: "05/04/2026",
    category: "Trendovi",
  },
  {
    slug: "organizacija-krstenja-korak-po-korak",
    title: "Organizacija krštenja korak po korak",
    excerpt:
      "Mirna i pažljivo organizovana priprema krštenja uz fokus na toplinu, eleganciju i važne porodične trenutke.",
    image: "/krstenje1.jpeg",
    date: "06/04/2026",
    category: "Krštenje",
  },
];

export default function SavetiPage() {
  const featured = saveti[0];
  const others = saveti.slice(1);

  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      <section className="relative overflow-hidden bg-[#cfd5e3] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Magic Moments
          </p>

          <h1 className="mt-6 text-4xl font-semibold uppercase tracking-[0.10em] text-[#f7f2e8] md:text-7xl">
            Saveti
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
            Ideje, smernice i inspiracija za organizaciju proslava, dekoraciju
            prostora i detalje koji prave razliku između običnog događaja i
            trenutka koji se pamti.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/saveti/${featured.slug}`}
            className="group grid overflow-hidden rounded-[30px] border border-[#eadfca] bg-white shadow-sm transition hover:shadow-md lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.20em] text-[#b88a2c]">
                Izdvojen savet
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#26313f] md:text-5xl">
                {featured.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-4 text-sm text-[#8b8478]">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.date}</span>
              </div>

              <div className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.08em] text-[#b88a2c]">
                Pročitaj više →
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b88a2c]">
                Članci
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#26313f] md:text-5xl">
                Inspiracija za organizaciju
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {others.map((post) => (
              <Link
                key={post.slug}
                href={`/saveti/${post.slug}`}
                className="group overflow-hidden rounded-[24px] border border-[#eadfca] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.08em] text-[#9b9488]">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="mt-4 text-[22px] font-semibold leading-8 text-[#26313f]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#5f5a52]">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#b88a2c]">
                    Pročitaj članak →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-[#eadfca] bg-[#fcfaf6] px-8 py-14 text-center shadow-sm md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
            Kontakt
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#26313f] md:text-5xl">
            Potrebna vam je pomoć oko organizacije?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Ako želite da ideju pretvorimo u elegantnu, usklađenu i pažljivo
            organizovanu proslavu, javite nam se i zajedno ćemo osmisliti svaki
            detalj.
          </p>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
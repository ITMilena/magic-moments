import Link from "next/link";

const saveti = [
  {
    slug: "top-7-ideja-za-dekoraciju-rodjendana",
    title: "Top 7 ideja za dekoraciju rođendana",
    excerpt:
      "Inspiracija za dekoraciju koja će vašu proslavu učiniti nezaboravnom.",
    image: "/dekoracija1.jpg",
    date: "01/04/2026",
    category: "Dekoracija",
  },
  {
    slug: "kako-organizovati-savrseno-punoletstvo",
    title: "Kako organizovati savršeno punoletstvo",
    excerpt:
      "Koraci i ideje za organizaciju proslave 18. rođendana bez stresa.",
    image: "/event1.jpg",
    date: "02/04/2026",
    category: "Punoletstvo",
  },
  {
    slug: "ideje-za-deciji-rodjendan",
    title: "Ideje za dečiji rođendan",
    excerpt:
      "Zabavne teme, dekoracije i aktivnosti za najmlađe.",
    image: "/event2.jpg",
    date: "03/04/2026",
    category: "Rođendani",
  },
  {
    slug: "kako-izabrati-idealnu-dekoraciju",
    title: "Kako izabrati idealnu dekoraciju",
    excerpt:
      "Saveti za izbor boja, prostora i stila dekoracije.",
    image: "/dekoracija2.jpg",
    date: "04/04/2026",
    category: "Dekoracija",
  },
  {
    slug: "trendovi-dekoracije-u-2026",
    title: "Trendovi dekoracije u 2026",
    excerpt:
      "Najnoviji stilovi i ideje koje dominiraju proslavama.",
    image: "/dekoracija3.jpg",
    date: "05/04/2026",
    category: "Trendovi",
  },
  {
    slug: "organizacija-krstenja-korak-po-korak",
    title: "Organizacija krštenja korak po korak",
    excerpt:
      "Sve što treba da znate za organizaciju krštenja bez stresa.",
    image: "/krstenje1.jpeg",
    date: "06/04/2026",
    category: "Krštenje",
  },
];

export default function SavetiPage() {
  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      <section className="bg-[#cfd5e3] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Magic Moments
          </p>

          <h1 className="mt-6 text-4xl font-semibold uppercase tracking-[0.10em] text-[#f7f2e8] md:text-7xl">
            Saveti
          </h1>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl text-[#5f5a52] leading-8">
          <p>
            Pripremili smo korisne savete i ideje za organizaciju različitih vrsta
            proslava – od rođendana i krštenja do posebnih događaja.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {saveti.map((post) => (
              <Link
                key={post.slug}
                href={`/saveti/${post.slug}`}
                className="group overflow-hidden rounded-[12px] border border-[#eadfca] bg-white transition hover:shadow-md"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-[18px] font-semibold text-[#26313f]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex justify-between text-xs text-[#9b9488]">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-[#26313f] md:text-5xl">
            Potrebna vam je pomoć oko organizacije?
          </h2>

          <p className="mt-4 text-[#5f5a52]">
            Kontaktirajte nas i zajedno ćemo osmisliti savršenu proslavu.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-[#c9a75d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a2c]"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </main>
  );
}
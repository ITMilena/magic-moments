import Link from "next/link";

const saveti = [
  {
    title: "Top 7 ideja za dekoraciju rođendana",
    excerpt:
      "Pronađite inspiraciju za dekoraciju rođendana koja će oduševiti goste i stvoriti posebnu atmosferu.",
    image: "/dekoracija1.jpg",
    date: "01/04/2026",
    category: "Dekoracija",
  },
  {
    title: "Kako organizovati savršen 18. rođendan",
    excerpt:
      "Planiranje punoletstva može biti jednostavno uz prave korake i ideje.",
    image: "/dekoracija2.jpg",
    date: "02/04/2026",
    category: "Punoletstvo",
  },
  {
    title: "Ideje za dečiji rođendan kod kuće",
    excerpt:
      "Kreativne i zabavne ideje za organizaciju rođendana za najmlađe.",
    image: "/event1.jpg",
    date: "03/04/2026",
    category: "Rođendani",
  },
  {
    title: "Kako izabrati savršenu dekoraciju",
    excerpt:
      "Saveti kako uskladiti boje, stil i prostor za vašu proslavu.",
    image: "/event2.jpg",
    date: "04/04/2026",
    category: "Dekoracija",
  },
  {
    title: "Top trendovi za dekoracije u 2026.",
    excerpt:
      "Najnoviji trendovi u svetu dekoracija za sve vrste proslava.",
    image: "/dekoracija3.jpg",
    date: "05/04/2026",
    category: "Trendovi",
  },
  {
    title: "Kako organizovati krštenje bez stresa",
    excerpt:
      "Planirajte krštenje korak po korak uz naše savete.",
    image: "/krstenje1.jpeg",
    date: "06/04/2026",
    category: "Krštenje",
  },
];

export default function SavetiPage() {
  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      {/* HERO */}
      <section className="relative px-6 py-28 md:py-36 bg-[#d8dce8]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Magic Moments
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold uppercase tracking-[0.08em] text-white">
            Saveti & Inspiracija
          </h1>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {saveti.map((post, index) => (
              <div
                key={index}
                className="group border border-[#eadfca] bg-white rounded-[12px] overflow-hidden transition hover:shadow-lg"
              >
                {/* IMAGE */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-[18px] font-semibold leading-6 text-[#26313f]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5f5a52] leading-6">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-xs text-[#9b9488]">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#26313f]">
            Treba vam pomoć oko organizacije?
          </h2>

          <p className="mt-4 text-[#5f5a52] leading-7">
            Kontaktirajte nas i zajedno ćemo osmisliti vašu idealnu proslavu.
          </p>

          <Link
            href="/kontakt"
            className="inline-block mt-8 rounded-full bg-[#c9a75d] px-8 py-4 text-white text-sm uppercase tracking-[0.08em] font-semibold hover:bg-[#b88a2c] transition"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </main>
  );
}
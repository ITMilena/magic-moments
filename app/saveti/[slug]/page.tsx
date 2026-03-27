import Link from "next/link";
import { notFound } from "next/navigation";

const saveti = [
  {
    slug: "top-7-ideja-za-dekoraciju-rodjendana",
    title: "Top 7 ideja za dekoraciju rođendana",
    image: "/dekoracija1.jpg",
    date: "01/04/2026",
    category: "Dekoracija",
    content: [
      "Dekoracija je jedan od najvažnijih elemenata svake proslave jer upravo ona stvara prvi utisak i atmosferu koju gosti pamte.",
      "Prilikom planiranja rođendanske dekoracije važno je da odaberete stil, boje i detalje koji se uklapaju sa prostorom i tipom događaja.",
      "Popularan izbor su balonske instalacije, personalizovani natpisi, cvetni detalji, elegantno dekorisani stolovi i photo corner za fotografisanje.",
      "Posebnu pažnju treba posvetiti centralnom delu prostora, odnosno mestu koje će biti najviše fotografisano i na kojem će se odvijati glavni trenuci proslave.",
      "Ukoliko želite skladan i elegantan izgled, preporuka je da ne koristite previše različitih boja, već da se držite jedne glavne i jedne ili dve prateće nijanse.",
      "Dekoracija treba da bude usklađena sa uzrastom slavljenika, stilom proslave i energijom događaja, kako bi sve delovalo prirodno i lepo povezano.",
      "Uz pažljivo osmišljene detalje, svaka rođendanska proslava može izgledati posebno, moderno i upečatljivo."
    ],
  },
  {
    slug: "kako-organizovati-savrseno-punoletstvo",
    title: "Kako organizovati savršeno punoletstvo",
    image: "/event1.jpg",
    date: "02/04/2026",
    category: "Punoletstvo",
    content: [
      "Organizacija punoletstva zahteva dobru pripremu i jasan plan kako bi veče proteklo bez stresa i nepredviđenih situacija.",
      "Prvi korak je izbor prostora koji odgovara broju gostiju i stilu proslave, a odmah zatim treba razmišljati o muzici, dekoraciji i rasporedu večeri.",
      "Vrlo je važno da se unapred definiše atmosfera koju želite – elegantna, moderna, glamurozna ili opuštena proslava.",
      "Dekoracija i osvetljenje igraju veliku ulogu jer upravo oni doprinose utisku luksuza i svečanosti.",
      "Pored izgleda prostora, ne treba zanemariti ni organizaciju dolaska gostiju, fotografisanje, tortu i trenutke koji će obeležiti celo veče.",
      "Kada su svi detalji dobro usklađeni, punoletstvo ostaje upamćeno kao jedno od najlepših i najvažnijih slavlja u životu."
    ],
  },
  {
    slug: "ideje-za-deciji-rodjendan",
    title: "Ideje za dečiji rođendan",
    image: "/event2.jpg",
    date: "03/04/2026",
    category: "Rođendani",
    content: [
      "Dečiji rođendan treba da bude veseo, razigran i prilagođen interesovanjima deteta.",
      "Jedna od najboljih ideja je da proslava ima jasnu temu, poput omiljenog crtanog junaka, boje ili zanimacije koju dete voli.",
      "Animatori, kreativne radionice, mini igraonice i photo corner mogu dodatno obogatiti događaj i učiniti ga zanimljivim i deci i roditeljima.",
      "Dekoracija za dečije rođendane treba da bude vedra, šarena i prilagođena uzrastu, ali bez pretrpavanja prostora.",
      "Takođe je korisno unapred osmisliti tok proslave, kako bi se smenjivale igra, posluženje, fotografisanje i torta.",
      "Dobra organizacija znači da roditelji mogu opuštenije da uživaju, a deca da imaju zabavan i lep dan za pamćenje."
    ],
  },
  {
    slug: "kako-izabrati-idealnu-dekoraciju",
    title: "Kako izabrati idealnu dekoraciju",
    image: "/dekoracija2.jpg",
    date: "04/04/2026",
    category: "Dekoracija",
    content: [
      "Idealna dekoracija nije samo lepa na fotografijama, već i prilagođena prostoru, povodu i celokupnoj atmosferi događaja.",
      "Prvi korak je da odredite osnovni stil – elegantan, moderan, romantičan, glamurozan ili minimalistički.",
      "Nakon toga biraju se boje, materijali i glavni dekorativni elementi koji će biti dominantni u prostoru.",
      "Dobro je unapred znati koji delovi prostora treba da budu u prvom planu, poput ulaza, glavnog stola, mesta za tortu ili zone za fotografisanje.",
      "Previše različitih detalja može ostaviti utisak prenatrpanosti, zato je bolje fokusirati se na nekoliko pažljivo odabranih elemenata.",
      "Kada su stil, boje i prostor usklađeni, dekoracija deluje luksuzno, skladno i veoma efektno."
    ],
  },
  {
    slug: "trendovi-dekoracije-u-2026",
    title: "Trendovi dekoracije u 2026",
    image: "/dekoracija3.jpg",
    date: "05/04/2026",
    category: "Trendovi",
    content: [
      "U 2026. godini u fokusu su dekoracije koje spajaju eleganciju, jednostavnost i upečatljive detalje.",
      "Veliku popularnost imaju neutralne boje sa zlatnim ili srebrnim akcentima, kao i pažljivo osmišljeni balonski aranžmani.",
      "Cvetni detalji, personalizovani natpisi i osvetljenje koje stvara toplu atmosferu i dalje su među najtraženijim elementima.",
      "Posebno se izdvaja trend stvaranja iskustva za goste, pa dekoracija više nije samo vizuelni dodatak već važan deo celokupnog doživljaja.",
      "Photo corner, stolovi sa detaljima i efektni ulazi u prostor postaju nezaobilazni deo savremenih proslava.",
      "Trendovi se menjaju, ali ono što ostaje važno jeste da dekoracija bude prilagođena osobi i povodu koji se slavi."
    ],
  },
  {
    slug: "organizacija-krstenja-korak-po-korak",
    title: "Organizacija krštenja korak po korak",
    image: "/krstenje1.jpeg",
    date: "06/04/2026",
    category: "Krštenje",
    content: [
      "Krštenje je jedan od najvažnijih porodičnih događaja i zato organizacija zahteva pažnju, ali i dobar plan.",
      "Najpre je potrebno definisati datum, broj gostiju i prostor u kojem će se organizovati okupljanje nakon crkvenog obreda.",
      "Zatim se planiraju dekoracija, posluženje, muzika i detalji poput zahvalnica, poklona za goste i torte.",
      "Vrlo je važno da atmosfera ostane svečana, elegantna i topla, jer je krštenje pre svega emotivan i porodičan događaj.",
      "Fotografisanje i snimanje su posebno važni kako bi ostale lepe uspomene na ovaj dan.",
      "Kada se svi koraci isplaniraju na vreme, organizacija krštenja može proteći mirno, lepo i bez nepotrebnog stresa."
    ],
  },
];

export function generateStaticParams() {
  return saveti.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SavetDetaljPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = saveti.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(30,34,40,0.55)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            {post.category}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold uppercase leading-tight text-white md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.10em] text-white/80">
            {post.date}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/saveti"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.08em] text-[#b88a2c] transition hover:text-[#9d7420]"
          >
            ← Nazad na savete
          </Link>

          <div className="mt-10 space-y-7 text-[17px] leading-8 text-[#5f5a52]">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
            Želite pomoć oko organizacije proslave?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Javite nam se i zajedno ćemo osmisliti proslavu, dekoraciju i sve
            detalje koji odgovaraju vašim željama.
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
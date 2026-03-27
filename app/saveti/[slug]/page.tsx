import Link from "next/link";
import { notFound } from "next/navigation";

const saveti = [
  {
    slug: "top-7-ideja-za-dekoraciju-rodjendana",
    title: "Top 7 ideja za dekoraciju rođendana",
    image: "/dekoracija1.jpg",
    date: "01/04/2026",
    category: "Dekoracija",
    intro:
      "Dekoracija nije samo vizuelni dodatak proslavi — ona određuje ton događaja, stvara atmosferu i ostavlja prvi utisak koji gosti pamte dugo nakon završetka večeri.",
    content: [
      "Kada govorimo o rođendanskoj dekoraciji, važno je da prostor ne izgleda samo lepo, već i promišljeno. Najlepši utisak ostavljaju proslave u kojima su boje, detalji i raspored elemenata usklađeni sa prostorom i stilom događaja.",
      "Prvi korak je izbor glavnog vizuelnog pravca. To može biti elegantna i svedena dekoracija, moderna i glamurozna postavka ili razigraniji koncept sa više boja i naglašenih detalja. Kada se taj pravac odredi, mnogo je lakše doneti sve ostale odluke.",
      "Centralni deo prostora treba da bude najjači vizuelni trenutak. To je najčešće zona iza glavnog stola, mesto za tortu ili photo corner. Upravo taj deo najčešće završava na fotografijama i zato zaslužuje posebnu pažnju.",
      "Balonske instalacije, cvetni aranžmani, personalizovani natpisi i osvetljenje mogu potpuno promeniti utisak prostora. Ono što pravi razliku nije nužno količina dekoracije, već način na koji su elementi raspoređeni i međusobno usklađeni.",
      "Vrlo često se greši tako što se koristi previše boja, previše različitih stilova ili previše dekorativnih elemenata odjednom. Umesto toga, daleko efektnije deluje kada postoji jedna glavna ideja koja se provlači kroz celu proslavu.",
      "Poseban utisak ostavljaju detalji koji imaju lični pečat — inicijali, broj godina, pažljivo birani tonovi, detalji na stolovima i sitni elementi koji doprinose osećaju da je sve rađeno sa idejom i merom.",
      "Najlepša dekoracija je ona koja ne deluje slučajno. Kada prostor izgleda skladno, elegantno i u skladu sa energijom proslave, gosti to prepoznaju odmah, a cela atmosfera dobija dodatnu dubinu i toplinu."
    ],
  },
  {
    slug: "kako-organizovati-savrseno-punoletstvo",
    title: "Kako organizovati savršeno punoletstvo",
    image: "/event1.jpg",
    date: "02/04/2026",
    category: "Punoletstvo",
    intro:
      "Punoletstvo je jedno od onih slavlja koje se dugo pamti, zato njegova organizacija treba da spoji energiju, stil i dobru koordinaciju bez nepotrebnog stresa.",
    content: [
      "Organizacija punoletstva počinje mnogo pre same proslave. Najvažnije je da odmah na početku definišete kakvu atmosferu želite — da li zamišljate elegantnu i glamuroznu večeru, moderan party sa jakom energijom ili opušteniju proslavu u krugu porodice i prijatelja.",
      "Nakon toga dolazi izbor prostora. Prostor ne treba da bude samo dovoljno veliki, već i vizuelno pogodan za dekoraciju, fotografisanje i tok večeri. Dobar prostor olakšava sve ostalo — od rasporeda gostiju do osmišljavanja centralne zone.",
      "Muzika igra ogromnu ulogu u doživljaju punoletstva. Pravi izbor benda ili DJ-a često pravi razliku između obične večeri i proslave koja ostavlja utisak od prvog do poslednjeg trenutka.",
      "Pored muzike, važno je unapred osmisliti ritam večeri. Dolazak gostiju, ulazak slavljenika, torta, fotografisanje i glavni momenti treba da budu povezani tako da sve deluje prirodno i lepo teče.",
      "Dekoracija za punoletstvo treba da izgleda upečatljivo, ali i zrelo. Dobro osmišljen vizuelni identitet prostora dodatno naglašava važnost ovog događaja i čini da cela proslava izgleda mnogo luksuznije.",
      "Često se zaboravlja koliko je važna dobra koordinacija iza scene. Kada neko vodi računa o rasporedu, saradnicima i sitnim detaljima, slavljenik i porodica mogu mnogo opuštenije da uživaju u večeri.",
      "Savršeno punoletstvo nije samo lepo uređena sala i dobra muzika. To je događaj u kojem su energija, emocija i organizacija povezani tako da sve izgleda lako, a zapravo je pažljivo osmišljeno."
    ],
  },
  {
    slug: "ideje-za-deciji-rodjendan",
    title: "Ideje za dečiji rođendan",
    image: "/event2.jpg",
    date: "03/04/2026",
    category: "Rođendani",
    intro:
      "Dečiji rođendan treba da bude vedar, zabavan i lepo organizovan, ali i dovoljno pregledan da roditelji mogu da uživaju bez osećaja haosa.",
    content: [
      "Najlepši dečiji rođendani su oni koji imaju jasnu ideju. To ne mora biti komplikovana tema, već jednostavan koncept koji se provlači kroz dekoraciju, tortu, sitne detalje i aktivnosti.",
      "Kada se planira rođendan za decu, važno je razmišljati iz njihove perspektive. Njima nije najvažnije da sve izgleda savršeno, već da im bude zabavno, dinamično i prilagođeno njihovom uzrastu.",
      "Animatori, mini radionice, kutak za crtanje, baloni i tematske igre često prave odličnu atmosferu i deci daju osećaj da je ceo dan osmišljen baš za njih.",
      "Dekoracija ne mora da bude prenaglašena da bi ostavila utisak. Dovoljno je da bude vesela, pregledna i prilagođena temi, kako bi prostor odmah delovao kao mesto za slavlje.",
      "Roditeljima mnogo znači kada je tok proslave dobro organizovan. Ako su unapred osmišljeni dolazak, igra, posluženje, torta i fotografisanje, ceo događaj deluje mnogo mirnije i prijatnije.",
      "Važno je misliti i na praktične stvari: dovoljno prostora za kretanje, kutak za roditelje, preglednu organizaciju hrane i pića i aktivnosti koje ne stvaraju preveliku gužvu.",
      "Dobro organizovan dečiji rođendan nije samo lep događaj za fotografije, već dan u kojem dete zaista uživa, a roditelji mogu da budu rasterećeniji i prisutniji u svakom trenutku."
    ],
  },
  {
    slug: "kako-izabrati-idealnu-dekoraciju",
    title: "Kako izabrati idealnu dekoraciju",
    image: "/dekoracija2.jpg",
    date: "04/04/2026",
    category: "Dekoracija",
    intro:
      "Idealna dekoracija ne zavisi samo od toga šta je trenutno popularno, već od toga koliko je usklađena sa prostorom, povodom i atmosferom koju želite da stvorite.",
    content: [
      "Prilikom izbora dekoracije, najvažnije je da najpre razumete karakter događaja. Jedna vrsta dekoracije odgovara toploj porodičnoj proslavi, druga modernom punoletstvu, a treća elegantnom krštenju.",
      "Boje su jedan od ključnih elemenata. Kada su pažljivo odabrane, one povezuju prostor i daju mu identitet. Kada ih je previše ili nisu usklađene, ceo utisak može delovati nepovezano.",
      "Pored boja, veliku ulogu imaju teksture i materijali. Cveće, baloni, tkanine, sveće, transparentni detalji ili metalni akcenti mogu potpuno promeniti osećaj prostora.",
      "Važno je unapred odlučiti koji deo prostora će biti vizuelni fokus. To može biti ulaz, glavni sto, zid za fotografisanje ili zona sa tortom. Kada postoji jedan jak fokus, sve ostalo lakše dolazi na svoje mesto.",
      "Jedna od najčešćih grešaka je pokušaj da se prostor 'popuni' dekoracijom bez jasne ideje. Mnogo bolje izgleda kada postoji merа, ritam i vizuelna povezanost među detaljima.",
      "Idealna dekoracija ne treba da nadjača događaj, već da ga podrži. Ona treba da stvara osećaj elegancije, topline ili energije, u zavisnosti od onoga što želite da vaša proslava prenese.",
      "Kada se dekoracija bira sa osećajem za meru, stil i prostor, rezultat deluje luksuzno i prirodno — i upravo tada ostavlja najjači utisak."
    ],
  },
  {
    slug: "trendovi-dekoracije-u-2026",
    title: "Trendovi dekoracije u 2026",
    image: "/dekoracija3.jpg",
    date: "05/04/2026",
    category: "Trendovi",
    intro:
      "Trendovi se menjaju, ali ono što ostaje isto jeste potreba da prostor izgleda moderno, skladno i dovoljno upečatljivo da ostane u sećanju gostiju.",
    content: [
      "U 2026. godini sve veći akcenat stavlja se na dekoracije koje spajaju jednostavnost i efektnost. Prostor više ne mora da bude pretrpan da bi izgledao luksuzno.",
      "Popularni su nežni tonovi, neutralne baze i jedan ili dva naglašena akcenta koji prostoru daju karakter. Takav pristup deluje elegantno, savremeno i vrlo fotogenično.",
      "Balonske instalacije i dalje ostaju popularne, ali sada u rafiniranijem obliku — sa boljim odabirom boja i pažljivijim uklapanjem u ostatak prostora.",
      "Cvetni detalji i osvetljenje dobijaju još važniju ulogu. Topla svetla, ambijentalne lampe i dekorativni akcenti mogu prostor učiniti mnogo prijatnijim i vizuelno bogatijim.",
      "Sve više se traže personalizovani elementi: natpisi, inicijali, detalji na stolovima i zone koje su osmišljene posebno za slavljenika ili povod događaja.",
      "Trendovi takođe sve više idu ka stvaranju iskustva. Nije dovoljno da prostor izgleda lepo samo na jednoj fotografiji — cilj je da svaki deo događaja deluje promišljeno i kompletno.",
      "Najveći trend zapravo nije jedna konkretna boja ili element, već ideja da dekoracija bude elegantna, usklađena i osmišljena tako da priča priču događaja."
    ],
  },
  {
    slug: "organizacija-krstenja-korak-po-korak",
    title: "Organizacija krštenja korak po korak",
    image: "/krstenje1.jpeg",
    date: "06/04/2026",
    category: "Krštenje",
    intro:
      "Krštenje je poseban porodični događaj koji traži mirnu, svečanu i pažljivo vođenu organizaciju, kako bi ceo dan protekao lepo i bez opterećenja.",
    content: [
      "Prvi korak u organizaciji krštenja jeste određivanje datuma i okvirnog broja gostiju. Kada se to definiše, mnogo je lakše birati prostor, planirati posluženje i organizovati ostatak događaja.",
      "Krštenje je po svojoj prirodi svečan i emotivan događaj, zato je važno da i prostor i dekoracija prate tu atmosferu. Najlepši utisak ostavljaju nežni tonovi, elegantni detalji i skladan ambijent.",
      "Pored dekoracije, važan deo organizacije čini i raspored celog dana. Crkveni obred, dolazak gostiju, porodično okupljanje, fotografisanje i ručak ili proslava posle toga treba da budu dobro usklađeni.",
      "Fotografije sa krštenja često postaju uspomene koje ostaju za ceo život, zato vredi unapred razmišljati o tome koji delovi prostora će biti najlepši za fotografisanje i gde će se odvijati glavni momenti.",
      "Posluženje i muzika treba da budu prilagođeni tonu događaja. Cilj nije da sve bude prenaglašeno, već prijatno, svečano i dovoljno pažljivo osmišljeno da svi gosti uživaju.",
      "Kada porodica nema potrebu da razmišlja o svakom detalju u hodu, ceo događaj postaje mnogo lepši i mirniji. Upravo zato dobra organizacija ima veliku vrednost.",
      "Najlepše organizovano krštenje je ono u kojem se oseća toplina, mir i pažnja — i u kojem sve izgleda prirodno, ali je zapravo osmišljeno do detalja."
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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(28,31,36,0.58)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,31,36,0.72)] via-[rgba(28,31,36,0.40)] to-[rgba(28,31,36,0.20)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f0d79c]">
            {post.category}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-semibold uppercase leading-tight text-white md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.10em] text-white/80">
            {post.date}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/saveti"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.08em] text-[#b88a2c] transition hover:text-[#9d7420]"
          >
            ← Nazad na savete
          </Link>

          <div className="mt-10 rounded-[30px] border border-[#eadfca] bg-white px-8 py-10 shadow-sm md:px-12 md:py-14">
            <p className="text-xl leading-9 text-[#3c4652] md:text-2xl md:leading-10">
              {post.intro}
            </p>

            <div className="my-10 h-px w-full bg-[#efe5d5]" />

            <div className="space-y-8 text-[17px] leading-8 text-[#5f5a52] md:text-[18px] md:leading-9">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-[#eadfca] bg-[#fcfaf6] px-8 py-14 text-center shadow-sm md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a2c]">
            Kontakt
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#26313f] md:text-5xl">
            Želite da ovu ideju pretvorimo u stvarnu proslavu?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Javite nam se i zajedno ćemo osmisliti dekoraciju, atmosferu i tok
            događaja tako da sve izgleda skladno, elegantno i potpuno u skladu
            sa vašim željama.
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
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const headingSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodySans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dekoracijeStavke = [
  "Dekoracija stolova",
  "Dekoracija stolica",
  "Dekoracija slatkog stola",
  "Foto kutak i paravan za slikanje",
  "Tabla dobrodošlice",
  "Baloni, cvetni aranžmani i detalji",
];

const processSteps = [
  {
    title: "Uvodne konsultacije",
    text: "Na prvom razgovoru prolazimo kroz vaše želje, tip rođendana, prostor, broj gostiju i stil koji želite da postignete.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 3h7l3 3v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v4h4" />
        <path d="M9 12h6M9 16h4M9 8h2" />
      </svg>
    ),
  },
  {
    title: "Ideje i inspiracija",
    text: "Zatim razmatramo primere, boje, motive i smer u kom želite da dekoracija ide — nežno, elegantno, luksuzno ili razigrano.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="7" r="2.5" />
        <circle cx="14" cy="15.5" r="3.5" />
        <circle cx="7" cy="16.5" r="1.5" />
        <circle cx="18.5" cy="15.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Predlog dekoracije",
    text: "Na osnovu vaših želja pripremamo predlog dekoracije i usklađujemo sve elemente u jednu skladnu i estetski zaokruženu celinu.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 5c2 0 4 1.7 4 4.2C12 12 10 13.5 8.5 15c-1.2 1.2-1.4 2.5-1.5 4" />
        <path d="M15 7c2.2 0 4 1.8 4 4.3 0 2.4-2 4-3.4 5.5-1.1 1.1-1.4 2.2-1.4 3.2" />
        <path d="M8 5c-2.2 0-4 1.8-4 4.3 0 2.4 2 4 3.4 5.5" />
        <path d="M15 7c-.8-1.8-2.2-2.7-4-2.7" />
      </svg>
    ),
  },
  {
    title: "Korekcije i dorada",
    text: "Po potrebi korigujemo detalje, biramo završne elemente i dorađujemo koncept dok ne dođemo do izgleda koji vam u potpunosti odgovara.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m4 20 5.5-1.5L19 9l-4-4-9.5 9.5L4 20Z" />
        <path d="m13.5 6.5 4 4" />
        <path d="M18.5 3.5l2 2" />
      </svg>
    ),
  },
  {
    title: "Postavljanje dekoracije",
    text: "Na dan proslave naš tim postavlja dekoraciju prema dogovoru i vodi računa da svaki detalj izgleda uredno, elegantno i potpuno spremno.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 20h10" />
        <path d="M8 20v-4h8v4" />
        <path d="M6 12h12l-2 4H8l-2-4Z" />
        <path d="M12 8v4" />
        <path d="M10.5 8c0-1 1.5-1.5 1.5-3 1 1.5 1.5 2 1.5 3" />
      </svg>
    ),
  },
];

function Divider() {
  return (
    <div className="mx-auto my-6 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-[#d8c5cb]" />
      <span className="h-2 w-2 rotate-45 bg-[#d5b5c0]" />
      <span className="h-px w-16 bg-[#d8c5cb]" />
    </div>
  );
}

function TitleBlock({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2
        className={`${bodySans.className} text-3xl font-semibold uppercase tracking-[0.06em] text-[#3a3d44] md:text-5xl`}
      >
        {title}
      </h2>
      <Divider />
      {subtitle ? (
        <p
          className={`${headingSerif.className} mx-auto mt-8 max-w-4xl text-[28px] italic leading-[1.75] text-[#77707a] md:text-[40px]`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function RodjendanPage() {
  return (
    <main className={`${bodySans.className} bg-[#fbfaf8] text-[#3d4047]`}>
      <section className="relative">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src="/punoletstvo-hero.jpg"
          alt="Dekoracija rođendana"
          className="h-[240px] w-full object-cover md:h-[360px]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-semibold uppercase tracking-[0.1em] text-white md:text-5xl">
            Dekoracija rođendana
          </h1>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`${headingSerif.className} mx-auto max-w-3xl text-[30px] leading-[1.75] text-[#4b4d54] md:text-[48px]`}
          >
            Bilo da slavite prvi rođendan, dečiji rođendan, 18. rođendan ili
            jubilej poput 30, 40 ili 50 godina, dekoracija je ono što događaju
            daje karakter, atmosferu i posebnu emociju.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-t-[34px] bg-[#fbfaf8] px-6 pt-6 md:px-10">
          <TitleBlock title="Dekoracije rođendana u Somboru i okolini" />

          <div className="mx-auto mt-10 max-w-4xl space-y-8 text-[25px] leading-[1.8] text-[#474a51] md:text-[30px]">
            <p>
              Svaki rođendan nosi drugačiju energiju i zato je važno da dekoracija
              bude prilagođena osobi, prostoru i samom povodu. Nekada je fokus na
              nežnom i toplom ambijentu, nekada na luksuznijem i efektnijem utisku,
              a nekada na veselom i razigranom konceptu.
            </p>

            <p>
              Naš cilj je da svaka proslava izgleda skladno, elegantno i posebno —
              bez obzira da li je u pitanju intimno porodično slavlje ili veća
              proslava sa više gostiju. Sve prilagođavamo vašim željama, temi i budžetu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf1f3] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock title="Kompletna dekoracija za rođendane" />

          <div className="mx-auto mt-10 max-w-4xl space-y-8 text-[24px] leading-[1.8] text-[#4a4d54] md:text-[29px]">
            <p>
              Rođendanska dekoracija može biti elegantna, nežna, glamurozna,
              moderna ili potpuno tematska. U zavisnosti od vrste proslave,
              prilagođavamo boje, raspored elemenata i stil tako da sve izgleda
              povezano i estetski lepo.
            </p>

            <p>
              Bilo da želite dekoraciju za dečiji rođendan, prvi rođendan, punoletstvo
              ili zrelije jubilarne godine, osmišljavamo koncept koji ostavlja utisak
              i čini da prostor izgleda promišljeno, svečano i profesionalno.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 xl:grid-cols-3">
          {dekoracijeStavke.map((item) => (
            <div key={item} className="text-center">
              <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center text-[#a6949b]">
                <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.35">
                  <path d="M8 5c2 0 4 1.7 4 4.2C12 12 10 13.5 8.5 15c-1.2 1.2-1.4 2.5-1.5 4" />
                  <path d="M15 7c2.2 0 4 1.8 4 4.3 0 2.4-2 4-3.4 5.5-1.1 1.1-1.4 2.2-1.4 3.2" />
                  <path d="M8 5c-2.2 0-4 1.8-4 4.3 0 2.4 2 4 3.4 5.5" />
                  <path d="M15 7c-.8-1.8-2.2-2.7-4-2.7" />
                </svg>
              </div>
              <h3 className="text-[30px] font-light uppercase leading-[1.45] text-[#3f424a] md:text-[34px]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#edf1f3] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.45] tracking-[0.05em] text-[#3b3f47] md:text-5xl">
            Dekoracija za prve, dečije i tematske rođendane
          </h2>

          <div className="mt-10 max-w-4xl space-y-8 text-[24px] leading-[1.8] text-[#4a4d54] md:text-[29px]">
            <p>
              Kod prvih i dečijih rođendana najvažniji su toplina, nežnost i detalji
              koji stvaraju posebnu atmosferu. Tu često dominiraju pastelne boje,
              personalizovani natpisi, baloni, slatki sto i foto-kutak.
            </p>

            <p>
              Tematski rođendani traže dodatnu pažnju kako bi svaki element bio
              uklopljen u jednu priču. Zato vodimo računa da dekoracija izgleda
              razigrano, ali i uredno, skladno i estetski dopadljivo.
            </p>
          </div>

          <div className="mt-14">
            <img
              src="/rodjendan-deciji.jpg"
              alt="Dekoracija dečijeg i prvog rođendana"
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
          </div>

          <h2 className="mt-20 max-w-3xl text-3xl font-semibold uppercase leading-[1.45] tracking-[0.05em] text-[#3b3f47] md:text-5xl">
            Dekoracija za odrasle i jubilarne rođendane
          </h2>

          <div className="mt-10 max-w-4xl space-y-8 text-[24px] leading-[1.8] text-[#4a4d54] md:text-[29px]">
            <p>
              Kod rođendana za odrasle i jubileja fokus je češće na eleganciji,
              luksuznijem utisku i zrelijoj estetici prostora. U takvim proslavama
              važan je balans između dekoracije i prijatne atmosfere.
            </p>

            <p>
              Bilo da se radi o 30, 40, 50 ili nekom drugom važnom rođendanu,
              dekoraciju prilagođavamo prostoru i vašem ukusu tako da izgleda
              ozbiljno, svečano i potpuno u skladu sa karakterom proslave.
            </p>
          </div>

          <div className="mt-14">
            <img
              src="/rodjendan-odrasli.jpg"
              alt="Dekoracija rođendana za odrasle"
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock
            title="Proces saradnje sa timom Magic Moments"
            subtitle="Iza svake uspešne dekoracije stoji dobra priprema, jasan dogovor i pažljivo vođenje svakog detalja — od prve ideje do dana proslave."
          />

          <div className="mt-16 grid gap-16 md:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center text-[#3b3f47]">
                  {step.icon}
                </div>
                <h3 className="text-[30px] font-light uppercase leading-[1.35] text-[#3b3f47] md:text-[34px]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-6 max-w-md text-[22px] leading-[1.9] text-[#5c6169] md:text-[24px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f4] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock title="Galerija rođendana sa našom dekoracijom" />

          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/rodjendan-galerija-1.jpg"
              alt="Galerija rođendanske dekoracije 1"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
            <img
              src="/rodjendan-galerija-2.jpg"
              alt="Galerija rođendanske dekoracije 2"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/galerija"
              className="inline-block bg-[#d8c0c6] px-10 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#cdaeb7]"
            >
              Album rođendana
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock title="Saveti za dekoraciju rođendana" />

          <img
            src="/punoletstvo-saveti.jpg"
            alt="Saveti za dekoraciju rođendana"
            className="mx-auto h-[300px] w-full max-w-4xl object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#eef2f4] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <TitleBlock title="Besplatne konsultacije" />

          <p className="text-[24px] leading-[1.9] text-[#444850] md:text-[29px]">
            Dekoracija rođendana sa sobom nosi mnogo pitanja — od izbora boja i
            rasporeda elemenata do toga šta je za vaš prostor i budžet najlepše
            rešenje. Tim Magic Moments vam stoji na raspolaganju za sva pitanja,
            savete i predloge.
          </p>

          <div className="mt-12">
            <Link
              href="/kontakt"
              className="inline-block bg-[#d8c0c6] px-10 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#cdaeb7]"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
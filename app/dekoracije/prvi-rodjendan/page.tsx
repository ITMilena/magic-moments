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
  "Dekoracija paravana za slikanje",
  "Tabla dobrodošlice",
  "Kutija za koverte",
  "Personalizovani detalji",
];

const processSteps = [
  {
    title: "Uvodne konsultacije",
    text: "Na prvom sastanku razgovaramo o vašim željama, da li radimo kompletnu dekoraciju ili samo određene elemente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M7 3h7l3 3v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v4h4" />
        <path d="M9 12h6M9 16h4M9 8h2" />
      </svg>
    ),
  },
  {
    title: "Ideje i inspiracija",
    text: "Zatim nam dostavljate sve vaše ideje, primere koje ste pronašli i smernice u kom pravcu želite da idete.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="7" r="2.5" />
        <circle cx="14" cy="15.5" r="3.5" />
        <circle cx="7" cy="16.5" r="1.5" />
        <circle cx="18.5" cy="15.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Primeri po vašim željama",
    text: "Na osnovu vaših želja i zahteva dostavljamo vam predloge, odlučujemo da li idemo u dobrom smeru ili su potrebne korekcije.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 5c2 0 4 1.7 4 4.2C12 12 10 13.5 8.5 15c-1.2 1.2-1.4 2.5-1.5 4" />
        <path d="M15 7c2.2 0 4 1.8 4 4.3 0 2.4-2 4-3.4 5.5-1.1 1.1-1.4 2.2-1.4 3.2" />
        <path d="M8 5c-2.2 0-4 1.8-4 4.3 0 2.4 2 4 3.4 5.5" />
        <path d="M15 7c-.8-1.8-2.2-2.7-4-2.7" />
      </svg>
    ),
  },
  {
    title: "Korekcije i dorada",
    text: "Ukoliko je potrebno, dodatno korigujemo sve ono što je neophodno kako bismo ostvarili izgled koji ste zamislili.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="m4 20 5.5-1.5L19 9l-4-4-9.5 9.5L4 20Z" />
        <path d="m13.5 6.5 4 4" />
        <path d="M18.5 3.5l2 2" />
      </svg>
    ),
  },
  {
    title: "Odobravanje svih elemenata",
    text: "Na vreme donosimo konačnu odluku za sve elemente kako bismo imali dovoljno vremena za pripremu i izradu svega što je potrebno.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 7h16" />
        <path d="M7 3v4M17 3v4" />
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Koordinacija na dan događaja",
    text: "Na dan proslave naš tim postavlja sve prema dogovoru i vodi računa da svaki detalj izgleda uredno, elegantno i potpuno spremno.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-14 w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
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

export default function DekoracijePage() {
  return (
    <main className={`${bodySans.className} bg-[#fbfaf8] text-[#3d4047]`}>
      <section className="relative">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src="/Dekoracija10.jpg"
          alt="Dekoracije za proslave"
          className="h-[240px] w-full object-cover md:h-[360px]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-semibold uppercase tracking-[0.1em] text-white md:text-5xl">
            Dekoracije za proslave
          </h1>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`${headingSerif.className} mx-auto max-w-3xl text-[30px] leading-[1.75] text-[#4b4d54] md:text-[48px]`}
          >
            Bez obzira da li organizujete rođendan, krštenje, iznenađenje ili
            neku drugu posebnu priliku, dekoracija je ono što daje poseban ton
            celoj proslavi i ostavlja utisak koji se pamti.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-t-[34px] bg-[#fbfaf8] px-6 pt-6 md:px-10">
          <TitleBlock title="Dekoracije za proslave u Somboru i okolini" />

          <div className="mx-auto mt-10 max-w-4xl space-y-8 text-[25px] leading-[1.8] text-[#474a51] md:text-[30px]">
            <p>
              Svaka proslava nosi svoju posebnu emociju, a sigurni smo da želite
              da se <strong>vaš događaj bar malo razlikuje od ostalih.</strong>
              Jedan od najboljih načina da se izdvojite i da vaša proslava ostane
              upamćena jeste pažljivo osmišljena i elegantna dekoracija.
            </p>

            <p>
              Imamo mnogo ideja i iskustva sa dekorisanjem različitih događaja,
              tako da u kombinaciji sa vašim željama možemo napraviti nešto
              posebno, upečatljivo i estetski usklađeno. U okviru vašeg budžeta
              trudićemo se da dobijete maksimalan efekat i mnogo više detalja nego
              što biste sami organizovali.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf1f3] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock title="Kompletna dekoracija za proslave" />

          <div className="mx-auto mt-10 max-w-4xl space-y-8 text-[24px] leading-[1.8] text-[#4a4d54] md:text-[29px]">
            <p>
              Svaka proslava je jedinstvena, zato uvek{" "}
              <strong>kreiramo personalizovane ponude</strong> po meri vašeg
              događaja. U obzir uzimamo prostor, stil koji volite, vaše omiljene
              boje i atmosferu koju želite da postignete.
            </p>

            <p>
              Većina dekorativnih elemenata može da se iznajmi, što je često
              isplativije, ali po želji možemo da izradimo i potpuno nove,
              personalizovane detalje koji će vašoj proslavi dati poseban pečat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 xl:grid-cols-3">
          {dekoracijeStavke.map((item) => (
            <div key={item} className="text-center">
              <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center text-[#a6949b]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-20 w-20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                >
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

      <section className="bg-[#edf1f3]">
        <div className="mx-auto max-w-6xl">
          <img
            src="/Dekoracija1.jpg"
            alt="Elegantna dekoracija za proslave"
            className="h-[320px] w-full object-cover md:h-[520px]"
          />
          <div className="px-6 py-16 md:px-12 md:py-20">
            <h2 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.45] tracking-[0.05em] text-[#3b3f47] md:text-5xl">
              Elegantna dekoracija za posebne trenutke
            </h2>

            <div className="mt-10 max-w-4xl space-y-8 text-[24px] leading-[1.8] text-[#4a4d54] md:text-[29px]">
              <p>
                U današnje vreme{" "}
                <strong>inspiraciju za dekoraciju i dizajn nije teško pronaći</strong>,
                ali je važno znati kako sve te ideje pretvoriti u skladnu i
                elegantnu celinu. Potrebno je imati dobar pravac, temu i osećaj
                za meru.
              </p>

              <p>
                Velika prednost je što naš tim pored same izrade može pomoći
                savetima i konkretnim predlozima, kako bi dekoracija delovala
                ozbiljno, moderno i potpuno prilagođeno prostoru i događaju.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf1f3]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
          <h2 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.45] tracking-[0.05em] text-[#3b3f47] md:text-5xl">
            Detalji koji ostavljaju utisak
          </h2>

          <div className="mt-10 max-w-4xl space-y-8 text-[24px] leading-[1.8] text-[#4a4d54] md:text-[29px]">
            <p>
              Kada je u pitanju dekoracija prostora, najvažnije je da svi
              elementi budu vizuelno povezani.{" "}
              <strong>
                Cvetni aranžmani, baloni različitih oblika, svetleći elementi i
                personalizovani detalji
              </strong>{" "}
              zajedno stvaraju atmosferu koja izgleda svečano i luksuzno.
            </p>

            <p>
              Pored samih aranžmana i balona, najbolji način da se prostor izdvoji
              jeste ubacivanje dodatnih sadržaja — kutka za slikanje,
              personalizovanih detalja, dekorativnih natpisa i drugih finih
              akcenata koji doprinose celokupnom utisku.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <img
            src="/Event2.jpeg"
            alt="Dekoracija prostora za proslavu"
            className="h-[320px] w-full object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock
            title="Proces saradnje sa timom Magic Moments"
            subtitle="Iza svake uspešne i jedinstvene dekoracije postoji proces detaljne pripreme. Nakon velikog broja dekorisanih događaja iza nas, shvatili smo da je priprema više od pola obavljenog posla."
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
          <TitleBlock title="Galerija proslava sa našom dekoracijom" />

          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/Iznenadjenje2.jpg"
              alt="Galerija dekoracije 1"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
            <img
              src="/Dekoracija3.jpg"
              alt="Galerija dekoracije 2"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/galerija"
              className="inline-block bg-[#d8c0c6] px-10 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#cdaeb7]"
            >
              Album dekoracija
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <TitleBlock title="Saveti za dekoraciju proslava" />

          <img
            src="/Dekoracija3.jpg"
            alt="Saveti za dekoraciju proslava"
            className="mx-auto h-[300px] w-full max-w-4xl object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#eef2f4] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <TitleBlock title="Besplatne konsultacije" />

          <p className="text-[24px] leading-[1.9] text-[#444850] md:text-[29px]">
            Dekoracija i{" "}
            <span className="text-[#d1a9b7]">organizacija proslava</span>{" "}
            sa sobom nose mnogo pitanja, a najbolji način da dođete do pravog
            odgovora jeste razgovor sa ljudima koji imaju iskustva. Tim Magic
            Moments vam stoji na raspolaganju za sva pitanja u vezi organizacije,
            dekoracije, naših usluga i paketa.
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
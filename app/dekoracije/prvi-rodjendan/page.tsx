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
  "Pozivnice za prvi rođendan",
];

const processSteps = [
  {
    title: "Uvodne konsultacije",
    text: "Na prvom sastanku razgovaramo o vašim željama, da li radimo kompletnu dekoraciju ili samo određene elemente.",
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
    text: "Zatim nam dostavljate sve vaše ideje, primere koje ste pronašli i smernice u kom pravcu želite da idete.",
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
    title: "Primeri po vašim željama",
    text: "Na osnovu vaših želja i zahteva dostavljamo vam predloge, odlučujemo da li idemo u dobrom smeru ili su potrebne korekcije.",
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
    text: "Ukoliko je potrebno, dodatno korigujemo sve ono što je neophodno kako bismo ostvarili izgled koji ste zamislili.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16" />
        <path d="M7 3v4M17 3v4" />
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Koordinacija na dan rođendana",
    text: "Na dan proslave naš tim postavlja sve prema dogovoru i vodi računa da svaki detalj izgleda uredno, nežno i potpuno spremno.",
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

function TitleBlock({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className={`${bodySans.className} text-3xl font-semibold uppercase tracking-[0.06em] text-[#3a3d44] md:text-5xl`}>
        {title}
      </h2>
      <Divider />
      {subtitle ? (
        <p className={`${headingSerif.className} mx-auto mt-8 max-w-4xl text-[28px] italic leading-[1.75] text-[#77707a] md:text-[40px]`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function PrviRodjendanPage() {
  return (
    <main className={`${bodySans.className} bg-[#fbfaf8] text-[#3d4047]`}>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/30" />
        <img src="/event2.jpeg" alt="Dekoracije za prvi rođendan" className="h-[240px] w-full object-cover md:h-[360px]" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-semibold uppercase tracking-[0.1em] text-white md:text-5xl">
            Dekoracije za prvi rođendan
          </h1>
        </div>
      </section>

      {/* UVOD */}
      <section className="px-6 py-16 md:py-24 text-center">
        <p className={`${headingSerif.className} mx-auto max-w-3xl text-[30px] leading-[1.75] md:text-[48px]`}>
          Prvi rođendan je poseban trenutak za celu porodicu i uspomena koja se pamti zauvek. Dekoracija daje toplinu, nežnost i čini ovaj dan još lepšim.
        </p>
      </section>

      {/* TEKST */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl space-y-8 text-[24px] leading-[1.8] md:text-[30px]">
          <p>
            Prvi rođendan vašeg deteta je jedan od najvažnijih događaja u životu porodice. Zato je važno da svaki detalj bude pažljivo osmišljen.
          </p>
          <p>
            U kombinaciji sa vašim željama kreiramo nežnu, elegantnu i potpuno personalizovanu dekoraciju koja ostavlja prelep utisak.
          </p>
        </div>
      </section>

      {/* SLIKE SEKCIJE */}
      <img src="/event3.jpeg" className="w-full h-[400px] object-cover" />
      <img src="/rodjendan3.jpeg" className="w-full h-[400px] object-cover" />

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <Link href="/kontakt" className="bg-[#d8c0c6] px-10 py-5 text-white uppercase">
          Kontaktirajte nas
        </Link>
      </section>
    </main>
  );
}
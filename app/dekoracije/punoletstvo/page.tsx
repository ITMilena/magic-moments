import Link from "next/link";

const dekoracijeStavke = [
  "Dekoracija stolova",
  "Dekoracija stolica",
  "Dekoracija paravana za slikanje",
  "Tabla dobrodošlice",
  "Kutija za koverte",
  "Pozivnice za 18. rođendan",
];

const testimonials = [
  {
    text: "Sve je bilo elegantno, organizovano i potpuno drugačije od klasičnih proslava. Dekoracija je ostavila prelep utisak na goste.",
    name: "Katarina",
    role: "Slavljenica",
  },
  {
    text: "Najviše nam je značilo što je tim imao razumevanje za naše želje i budžet, a rezultat je izgledao mnogo luksuznije nego što smo očekivali.",
    name: "Milica",
    role: "Porodica slavljenice",
  },
  {
    text: "Od ideje do realizacije sve je bilo jasno, lako i bez stresa. Dobili smo dekoraciju koja je stvarno izgledala posebno.",
    name: "Luka",
    role: "Slavljenik",
  },
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
    text: "Na osnovu vaših želja i zahteva dostavljamo vam primere, odlučujemo da li idemo u dobrom smeru ili su potrebne korekcije.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 4c0 2-2 3-2 5a4 4 0 0 0 8 0c0-2-2-3-2-5" />
        <path d="M10 14v6" />
        <path d="M6 20h8" />
        <path d="M15 5c0 1.5-1.5 2.3-1.5 3.8a3.5 3.5 0 0 0 7 0C20.5 7.3 19 6.5 19 5" />
        <path d="M17 12.3V20" />
        <path d="M14 20h6" />
      </svg>
    ),
  },
  {
    title: "Korekcije i dorada",
    text: "Ukoliko je potrebno dodatno korigujemo sve ono što je neophodno kako bi ostvarili sve što ste zamislili.",
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
    text: "Na vreme donosimo konačnu odluku za sve elemente da li se slažete, kako bi imali vremena za izradu delova koje nemamo na stanju.",
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
    text: "Na dan rođendana naš tim postavlja sve kako smo se dogovorili i na kraju večeri preuzima iznajmljeni dekorativni materijal.",
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
      <span className="h-px w-16 bg-[#dac5cc]" />
      <span className="h-2 w-2 rotate-45 bg-[#d6b8c2]" />
      <span className="h-px w-16 bg-[#dac5cc]" />
    </div>
  );
}

function SectionHeading({
  title,
  align = "center",
}: {
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-semibold uppercase tracking-[0.04em] text-[#353942] md:text-5xl">
        {title}
      </h2>
      {align === "center" ? <Divider /> : <div className="my-6"><Divider /></div>}
    </div>
  );
}

export default function PunoletstvoPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#353942]">
      <section className="relative">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src="/punoletstvo-hero.jpg"
          alt="Dekoracije za 18. rođendan"
          className="h-[220px] w-full object-cover md:h-[320px]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-semibold uppercase tracking-[0.08em] text-white md:text-5xl">
            Dekoracije za 18. rođendan
          </h1>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto max-w-3xl text-[28px] leading-[1.7] text-[#40434a] md:text-[42px] md:leading-[1.65]">
            Bez obzira da li 18. rođendan proslavljate u klubu, restoranu za proslave
            ili vikendici dekoracija je nezaobilazna. Ispunićemo svaku vašu želju,
            koju god temu da izaberete. Ujedno, naš tim dekoratera vam može pomoći
            savetima i idejama koje nisu deo standardne dekoracije na većini rođendana.
          </p>
        </div>
      </section>

      <section className="rounded-t-[34px] bg-[#fbfaf7] px-6 py-6">
        <div className="mx-auto max-w-5xl rounded-t-[34px] bg-[#fbfaf7] px-6 pt-6 pb-16 md:px-10">
          <SectionHeading title="Dekoracije za 18. rođendan u Beogradu i okolini" />

          <div className="mx-auto max-w-4xl space-y-8 text-[27px] leading-[1.7] text-[#40434a] md:text-[30px] md:leading-[1.75]">
            <p>
              Ovo je godina kada svi vaši vršnjaci organizuju punoletstva, a sigurni smo
              da želite da se <strong>vaša proslava bar malo razlikuje od ostalih.</strong>
              {" "}Jedan od najboljih načina da se izdvojite od mase, i da vaš rođendan
              ostane upamćen je zanimljiva dekoracija.
            </p>

            <p>
              Imamo mnogo ideja i iskustva sa dekorisanjem rođendana, tako da u kombinaciji
              sa vašim interesovanjem možemo napraviti nešto posebno.
              {" "}U okviru vašeg budžeta dekorišaćemo više elemenata nego što bi uspeli
              u sopstvenoj organizaciji.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f4] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading title="Šta klijenti kažu o nama?" />

          <div className="mx-auto max-w-4xl">
            <p className="text-[24px] leading-[1.8] text-[#676b72] md:text-[30px]">
              “{testimonials[0].text}”
            </p>
            <p className="mt-8 text-3xl font-semibold text-[#353942]">
              {testimonials[0].name}
            </p>
            <p className="mt-2 text-xl text-[#7b7f86]">{testimonials[0].role}</p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-4 w-4 rounded-full bg-[#c5c8cc]" />
              <span className="h-4 w-4 rounded-full bg-[#82868d]" />
              <span className="h-4 w-4 rounded-full bg-[#d1d4d8]" />
              <span className="h-4 w-4 rounded-full bg-[#d1d4d8]" />
              <span className="h-4 w-4 rounded-full bg-[#d1d4d8]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Kompletna dekoracija za punoletstvo – Magic Moments" />

          <div className="mx-auto max-w-4xl space-y-8 text-[25px] leading-[1.75] text-[#40434a] md:text-[28px]">
            <p>
              Svako punoletstvo je jedinstveno, zato uvek <strong>kreiramo personalizovane
                ponude</strong> po meri slavljenika ili slavljenice. Prilikom kreiranja ideje
              u obzir uzimamo prostor gde se organizuje, vaše omiljene boje, vaše ideje
              i zajedno pokušavamo da sve uklopimo u budžet.
            </p>

            <p>
              <strong>Većina dekorativnih elemenata se iznajmljuje</strong>, pa je cena
              samim tim niža. Ali na zahtev možemo kreirati potpuno nove i personalizovane
              elemente koji će upotpuniti rođendan i učiniti ga jedinstvenim.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-6 py-10 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 xl:grid-cols-3">
          {dekoracijeStavke.map((item, i) => (
            <div key={item} className="text-center">
              <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center text-[#9b8a92]">
                <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M8 5c2 0 4 1.7 4 4.2C12 12 10 13.5 8.5 15c-1.2 1.2-1.4 2.5-1.5 4" />
                  <path d="M15 7c2.2 0 4 1.8 4 4.3 0 2.4-2 4-3.4 5.5-1.1 1.1-1.4 2.2-1.4 3.2" />
                  <path d="M8 5c-2.2 0-4 1.8-4 4.3 0 2.4 2 4 3.4 5.5" />
                  <path d="M15 7c-.8-1.8-2.2-2.7-4-2.7" />
                </svg>
              </div>
              <h3 className="text-3xl font-light uppercase leading-[1.45] text-[#353942] md:text-[32px]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eef2f4]">
        <div className="mx-auto max-w-6xl">
          <img
            src="/punoletstvo-decaci.jpg"
            alt="Dekoracija za 18. rođendan za dečake"
            className="h-[340px] w-full object-cover md:h-[520px]"
          />
          <div className="px-6 py-16 md:px-12 md:py-20">
            <h2 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.45] tracking-[0.04em] text-[#353942] md:text-5xl">
              Dekoracija za 18. rođendan za dečake
            </h2>

            <div className="mt-10 max-w-4xl space-y-8 text-[25px] leading-[1.75] text-[#40434a] md:text-[28px]">
              <p>
                U današnje vreme <strong>inspiraciju za dekoraciju i dizajn nije teško pronaći</strong>,
                na internetu postoji ogromna baza ideja. Samo je potrebno imati okvirne smernice
                i temu koju želite da dekoracija prati.
              </p>

              <p>
                Velika prednost je što pored same izrade <strong>naš tim može pomoći sa savetima i
                  predlozima</strong>. Pored dekoracije možemo uklopiti i dodatne detalje koji
                prostoru daju ozbiljniji i luksuzniji utisak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f4]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
          <h2 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.45] tracking-[0.04em] text-[#353942] md:text-5xl">
            Dekoracija za 18. rođendan za devojčice
          </h2>

          <div className="mt-10 max-w-4xl space-y-8 text-[25px] leading-[1.75] text-[#40434a] md:text-[28px]">
            <p>
              Kada je u pitanju dekoracija, devojčice su zahtevnije, što je i razumljivo.
              Kod devojaka uglavnom <strong>dominiraju cvetni aranžmani, baloni različitih oblika,
                nežne nijanse boja.</strong>
            </p>

            <p>
              Pored količine cvetnih aranžmana i balona, najbolji način da se izdvojite od drugih
              je <strong>ubacivanje nekih dodatnih sadržaja.</strong> To može biti zanimljiv kutak
              za slikanje, elementi dekoracije koji će služiti za slikanje i dodatni sadržaji koji
              čine proslavu upečatljivijom.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <img
            src="/punoletstvo-devojcice.jpg"
            alt="Dekoracija za 18. rođendan za devojčice"
            className="h-[340px] w-full object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading title="Proces saradnje sa timom Magic Moments" />

          <p className="mx-auto mb-16 max-w-4xl text-[25px] italic leading-[1.8] text-[#7b7f86] md:text-[30px]">
            Iza svake uspešne i jedinstvene dekoracije postoji proces detaljne pripreme.
            Nakon velikog broja dekorisanih rođendana iza nas shvatili smo da je priprema
            više od pola obavljenog posla. Ovako izgleda proces saradnje sa našim timom.
          </p>

          <div className="grid gap-16 md:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center text-[#353942]">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-light uppercase leading-[1.35] text-[#353942] md:text-[34px]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-6 max-w-md text-[22px] leading-[1.8] text-[#555a61] md:text-[24px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f4] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading title="Galerija rođendana sa našom dekoracijom" />

          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/punoletstvo-galerija-1.jpg"
              alt="Galerija dekoracije 1"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
            <img
              src="/punoletstvo-galerija-2.jpg"
              alt="Galerija dekoracije 2"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/galerija"
              className="inline-block bg-[#d8c0c6] px-10 py-5 text-xl font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#cdaeb7]"
            >
              Album rođendana
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading title="Saveti za dekoraciju rođendana" />

          <img
            src="/punoletstvo-saveti.jpg"
            alt="Saveti za dekoraciju rođendana"
            className="mx-auto h-[300px] w-full max-w-4xl object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#eef2f4] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading title="Besplatne konsultacije" />

          <p className="text-[25px] leading-[1.8] text-[#40434a] md:text-[30px]">
            Dekoracija i <span className="text-[#c8a2b1]">organizacija 18. rođendana</span>
            {" "}sa sobom nosi niz pitanja, a najbolji način da saznate pravi odgovor
            je da se konsultujete sa iskusnim ljudima. Tim Magic Moments vam stoji
            na raspolaganju za sva pitanja u vezi organizacije, naših usluga i paketa.
          </p>

          <div className="mt-12">
            <Link
              href="/kontakt"
              className="inline-block bg-[#d8c0c6] px-10 py-5 text-xl font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#cdaeb7]"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
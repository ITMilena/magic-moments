import Link from "next/link";

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M7 9h.01M17 15h.01" />
    </svg>
  );
}

function CapacityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 20v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
      <circle cx="12" cy="9" r="3" />
      <path d="M3 20v-1a2.5 2.5 0 0 1 2.5-2.5H7" />
      <path d="M21 20v-1a2.5 2.5 0 0 0-2.5-2.5H17" />
      <circle cx="6" cy="10" r="2" />
      <circle cx="18" cy="10" r="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const venues = [
  {
    id: "galea",
    button: "GALEA SALA",
    title: "GALEA SALA",
    description:
      "Galea sala je odličan izbor za različite vrste proslava u Somboru. Prostor je pogodan za veće događaje, a može biti praktično rešenje kada vam je važan veći kapacitet i organizacija u svečanoj sali.",
    price: "Na upit",
    capacity: "do 350 osoba",
    location: "Filipa Kljajića bb, Sombor",
    images: [
      "/galea1.jpg",
      "/galea2.jpg",
      "/galea3.jpg",
      "/galea4.jpg",
    ],
  },
  {
    id: "sala-025",
    button: "SALA 025",
    title: "SVEČANA SALA 025",
    description:
      "Svečana sala 025 je prostor sa dugom tradicijom i namenjena je za različite vrste proslava. Dobar je izbor kada vam treba fleksibilan prostor za manji ili srednji broj gostiju.",
    price: "Na upit",
    capacity: "30 - 220 osoba",
    location: "Centrala 31a, Sombor",
    images: [
      "/sala025-1.jpg",
      "/sala025-2.jpg",
      "/sala025-3.jpg",
      "/sala025-4.jpg",
    ],
  },
  {
    id: "vila-tamara",
    button: "VILA TAMARA",
    title: "VILA TAMARA",
    description:
      "Vila Tamara je praktična opcija za proslave različitog tipa i kapaciteta. Pogodna je kada želite prostor koji može da odgovori i manjim i većim okupljanjima.",
    price: "Na upit",
    capacity: "25 - 200 osoba",
    location: "Apatinski put bb, Sombor",
    images: [
      "/tamara1.jpg",
      "/tamara2.jpg",
      "/tamara3.jpg",
      "/tamara4.jpg",
    ],
  },
  {
    id: "fijaker",
    button: "FIJAKER",
    title: "ETNO RESTORAN FIJAKER",
    description:
      "Etno restoran Fijaker nalazi se u Somboru i poznat je po prepoznatljivom ambijentu i velikom kapacitetu. Može biti dobar izbor za porodične i svečane proslave kada želite topao i tradicionalniji utisak.",
    price: "Na upit",
    capacity: "do 220 osoba",
    location: "Sonje Marinković bb, Park Heroja, Sombor",
    images: [
      "/fijaker1.jpg",
      "/fijaker2.jpg",
      "/fijaker3.jpg",
      "/fijaker4.jpg",
    ],
  },
  {
    id: "slon",
    button: "RESTORAN SLON",
    title: "RESTORAN SLON",
    description:
      "Restoran Slon je dobar izbor za manje i srednje proslave. Prednost ovog prostora je što može da odgovori fleksibilnijem broju gostiju, u zavisnosti od formata događaja.",
    price: "Na upit",
    capacity: "50 - 140 osoba",
    location: "Venac Petrove Gore bb, Sombor",
    images: [
      "/slon1.jpg",
      "/slon2.jpg",
      "/slon3.jpg",
      "/slon4.jpg",
    ],
  },
  {
    id: "stari-slon",
    button: "STARI SLON",
    title: "RESTORAN STARI SLON",
    description:
      "Restoran Stari Slon nalazi se u centru Sombora i pogodan je za intimnije proslave i okupljanja manjeg obima. Praktičan je kada želite centralnu lokaciju i mirniji ambijent.",
    price: "Na upit",
    capacity: "10 - 60 osoba",
    location: "Venac Radomira Putnika 21, Sombor",
    images: [
      "/starislon1.jpg",
      "/starislon2.jpg",
      "/starislon3.jpg",
      "/starislon4.jpg",
    ],
  },
];

function VenueSection({
  title,
  description,
  price,
  capacity,
  location,
  images,
}: {
  title: string;
  description: string;
  price: string;
  capacity: string;
  location: string;
  images: string[];
}) {
  return (
    <section className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[10px] border border-[#efe7d8] bg-[#f8f3ea]"
            >
              <img
                src={src}
                alt={`${title} slika ${index + 1}`}
                className="h-[220px] w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl text-center">
          <h2 className="text-3xl font-light uppercase tracking-[0.06em] text-[#4c5264] md:text-5xl">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-px w-24 bg-[#d8d2c6]" />

          <div className="mx-auto mt-8 max-w-4xl space-y-6 text-[18px] leading-[1.9] text-[#6b6f78] md:text-[22px]">
            <p>{description}</p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="text-center text-[#525866]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <PriceIcon />
              </div>
              <h3 className="text-[20px] font-semibold uppercase tracking-[0.04em]">
                Cene po osobi
              </h3>
              <p className="mt-3 text-[22px] font-light text-[#727784]">
                {price}
              </p>
            </div>

            <div className="text-center text-[#525866]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <CapacityIcon />
              </div>
              <h3 className="text-[20px] font-semibold uppercase tracking-[0.04em]">
                Kapacitet
              </h3>
              <p className="mt-3 text-[22px] font-light text-[#727784]">
                {capacity}
              </p>
            </div>

            <div className="text-center text-[#525866]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <LocationIcon />
              </div>
              <h3 className="text-[20px] font-semibold uppercase tracking-[0.04em]">
                Lokacija
              </h3>
              <p className="mt-3 text-[22px] font-light text-[#727784]">
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RestoraniSomborPage() {
  return (
    <main className="bg-[#fbf8f1] text-[#31343b]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/35" />
        <img
          src="/restorani-sombor-hero.jpg"
          alt="Restorani i sale za proslave u Somboru"
          className="h-[320px] w-full object-cover md:h-[520px]"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="max-w-6xl text-4xl font-light uppercase leading-[1.1] tracking-[0.05em] text-[#f1e3a3] md:text-7xl">
            Restorani i sale za proslave u Somboru
          </h1>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-8 text-[19px] leading-[1.9] text-[#7a7d85] md:text-[28px]">
            <p>
              Restorani i sale za proslave u Somboru jedna su od najvažnijih
              stavki kada govorimo o organizaciji rođendana, krštenja,
              punoletstava i drugih posebnih događaja. Važno je pronaći prostor
              koji po lokaciji, kapacitetu i celokupnom ambijentu odgovara vašim
              željama i potrebama.
            </p>

            <p>
              Zato smo pripremili pregled prostora u Somboru koji mogu biti dobar
              izbor za različite tipove proslava. U nastavku možete pogledati
              osnovne informacije o lokaciji, kapacitetu i cenovnom rangu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8] px-6 pb-10 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-light uppercase tracking-[0.05em] text-[#4c5264] md:text-5xl">
            Restorani za izdavanje - pronaći ćemo prostor koji zadovoljava vaše potrebe
          </h2>

          <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-4">
            {venues.map((venue) => (
              <a
                key={venue.id}
                href={`#${venue.id}`}
                className="inline-flex min-h-[52px] items-center justify-center rounded-none border border-[#eee4d0] bg-[#efe6f6] px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#7d7591] transition hover:bg-[#e7d9f1]"
              >
                {venue.button}
              </a>
            ))}
          </div>
        </div>
      </section>

      {venues.map((venue) => (
        <div key={venue.id} id={venue.id}>
          <VenueSection
            title={venue.title}
            description={venue.description}
            price={venue.price}
            capacity={venue.capacity}
            location={venue.location}
            images={venue.images}
          />
        </div>
      ))}

      <section className="px-6 pb-20 pt-8 md:pb-28">
        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#ece3d0] bg-white px-8 py-12 text-center shadow-sm md:px-12">
          <h2 className="text-3xl font-light uppercase tracking-[0.05em] text-[#4c5264] md:text-5xl">
            Potrebna vam je pomoć oko izbora prostora?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-[1.9] text-[#6d7179] md:text-[22px]">
            Pošaljite nam upit i pomoći ćemo vam da pronađete salu ili restoran u
            Somboru koji odgovara broju gostiju, budžetu i tipu proslave koji
            organizujete.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-[#d8c0c6] px-10 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#cdaeb7]"
            >
              Kontaktirajte nas
            </Link>

            <Link
              href="/galerija"
              className="inline-flex items-center justify-center border border-[#d8cfc1] bg-white px-10 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-[#565c68] transition hover:bg-[#faf7f1]"
            >
              Pogledajte galeriju
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
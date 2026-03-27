import Link from "next/link";

export default function KrstenjePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] px-6 py-20 text-center">

      <h1 className="text-3xl font-semibold uppercase text-[#3a3d44] md:text-5xl">
        Dekoracija krštenja
      </h1>

      <div className="mx-auto mt-6 h-px w-24 bg-[#d8c5cb]" />

      <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-[#555] md:text-xl">
        Stranica za dekoraciju krštenja je trenutno u izradi.
        Uskoro će biti dostupni svi detalji o našim uslugama,
        idejama i primerima dekoracija za ovaj poseban događaj.
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#555] md:text-xl">
        Za sve informacije i upite slobodno nas kontaktirajte.
      </p>

      <div className="mt-10">
        <Link
          href="/kontakt"
          className="inline-block bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#cdaeb7]"
        >
          Kontaktirajte nas
        </Link>
      </div>

    </main>
  );
}
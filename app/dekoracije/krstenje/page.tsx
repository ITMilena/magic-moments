import Link from "next/link";

export default function KrstenjePage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="border-b border-[#ece7dc] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-stretch md:grid-cols-2">
            <div>
              <img
                src="/krstenje1.jpg"
                alt="Dekoracija za krštenje dečaka"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>

            <div className="bg-[#f3f5f6] px-10 py-12 md:px-14">
              <h1 className="mb-8 text-4xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#26313f] md:text-5xl">
                Dekoracija za krštenje dečaka
              </h1>

              <p className="mb-6 text-lg leading-9 text-[#4b4b4b]">
                Prilikom dekoracije za krštenje dečaka najčešće se koristi plava
                boja u različitim nijansama, najčešće u kombinaciji sa belim i
                zlatnim detaljima. U zavisnosti od željenog stila, dekoracija može
                biti klasična, nežna ili potpuno tematska.
              </p>

              <p className="text-lg leading-9 text-[#4b4b4b]">
                Posebnu atmosferu daju personalizovani detalji, baloni, cvetni
                aranžmani i pažljivo osmišljen prostor za fotografisanje, kako bi
                ceo događaj izgledao elegantno i skladno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-stretch md:grid-cols-2">
            <div className="bg-[#f3f5f6] px-10 py-12 md:px-14">
              <h2 className="mb-8 text-4xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#26313f] md:text-5xl">
                Dekoracija za krštenje devojčica
              </h2>

              <p className="mb-6 text-lg leading-9 text-[#4b4b4b]">
                Dekoracija za krštenje devojčica najčešće se zasniva na nežnim
                roze, krem, bež i belim tonovima, uz dodatak zlatnih ili pastelnih
                detalja. Cilj je da prostor odiše toplinom, nežnošću i elegancijom.
              </p>

              <p className="text-lg leading-9 text-[#4b4b4b]">
                Cvetni aranžmani, mašne, personalizovana tabla dobrodošlice,
                balonske instalacije i foto kutak doprinose tome da ceo događaj
                izgleda profinjeno i ostane upamćen po lepim detaljima.
              </p>
            </div>

            <div>
              <img
                src="/krstenje2.jpg"
                alt="Dekoracija za krštenje devojčica"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ece7dc] bg-[#faf8f4]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-stretch md:grid-cols-2">
            <div>
              <img
                src="/krstenje3.jpg"
                alt="Elementi dekoracije za krštenje"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>

            <div className="bg-white px-10 py-12 md:px-14">
              <h2 className="mb-8 text-4xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#26313f] md:text-5xl">
                Šta sve uključuje dekoracija
              </h2>

              <ul className="space-y-4 text-lg leading-8 text-[#4b4b4b]">
                <li>• Dekoracija stolova i prostora</li>
                <li>• Baloni i cvetni aranžmani</li>
                <li>• Personalizovani detalji</li>
                <li>• Foto kutak</li>
                <li>• Tabla dobrodošlice</li>
                <li>• Tematski koncept događaja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f]">
            Želite savršenu dekoraciju za krštenje?
          </h3>

          <p className="mb-10 text-lg leading-8 text-[#555]">
            Kontaktirajte nas i zajedno ćemo osmisliti svaki detalj vašeg
            posebnog dana.
          </p>

          <Link
            href="/kontakt"
            className="inline-block bg-[#d8c0c6] px-10 py-4 text-sm font-semibold uppercase tracking-[0.10em] text-white transition hover:bg-[#cdaeb7]"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

export default function KrstenjePage() {
  return (
    <main className="bg-[#fbfaf7] text-[#2f343b]">
      <section className="border-b border-[#e8e2d8] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          <div className="grid overflow-hidden border border-[#ebe4da] md:grid-cols-2">
            <div>
              <img
                src="/krstenje1.jpg"
                alt="Dekoracija za krštenje dečaka"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div className="bg-[#edf1f3] px-10 py-12 md:px-14 md:py-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
                Dekoracija
              </p>
              <h1 className="mb-8 text-4xl font-semibold uppercase leading-tight tracking-[0.05em] text-[#26313f] md:text-5xl">
                Dekoracija za krštenje dečaka
              </h1>

              <p className="mb-6 text-lg leading-9 text-[#4b4b4b]">
                Prilikom dekoracije za krštenje dečaka najčešće se koriste plave
                nijanse u kombinaciji sa belim, bež i zlatnim detaljima. U
                zavisnosti od željenog stila, prostor može izgledati nežno,
                elegantno i svečano.
              </p>

              <p className="text-lg leading-9 text-[#4b4b4b]">
                Personalizovani detalji, baloni, dekoracija stolova i pažljivo
                osmišljen kutak za fotografisanje doprinose tome da ceo događaj
                ostavi snažan i lep utisak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-0">
          <div className="grid overflow-hidden border-x border-b border-[#ebe4da] md:grid-cols-2">
            <div className="bg-[#f5f7f8] px-10 py-12 md:px-14 md:py-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
                Dekoracija
              </p>
              <h2 className="mb-8 text-4xl font-semibold uppercase leading-tight tracking-[0.05em] text-[#26313f] md:text-5xl">
                Dekoracija za krštenje devojčica
              </h2>

              <p className="mb-6 text-lg leading-9 text-[#4b4b4b]">
                Kod dekoracije za krštenje devojčica najčešće dominiraju nežne
                roze, krem, bele i pastelne nijanse, uz elegantne cvetne i
                dekorativne detalje.
              </p>

              <p className="text-lg leading-9 text-[#4b4b4b]">
                Naš cilj je da prostor izgleda skladno, otmeno i toplo, tako da
                svaka proslava dobije poseban vizuelni identitet i osećaj nežnosti.
              </p>
            </div>

            <div>
              <img
                src="/krstenje2.jpg"
                alt="Dekoracija za krštenje devojčica"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-0">
          <div className="grid overflow-hidden border-x border-b border-[#ebe4da] md:grid-cols-2">
            <div>
              <img
                src="/krstenje3.jpg"
                alt="Elementi dekoracije za krštenje"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div className="bg-[#f8f5ef] px-10 py-12 md:px-14 md:py-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
                Šta obuhvata
              </p>
              <h2 className="mb-8 text-4xl font-semibold uppercase leading-tight tracking-[0.05em] text-[#26313f] md:text-5xl">
                Šta sve uključuje dekoracija
              </h2>

              <ul className="space-y-4 text-lg leading-8 text-[#4b4b4b]">
                <li>• Dekoracija stolova i celog prostora</li>
                <li>• Baloni i cvetni aranžmani</li>
                <li>• Tabla dobrodošlice i personalizovani detalji</li>
                <li>• Foto kutak</li>
                <li>• Slatki sto i dekorativni akcenti</li>
                <li>• Usklađivanje teme, boja i rasporeda elemenata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef] py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Saradnja
          </p>
          <h3 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Želite dekoraciju za krštenje po vašoj meri?
          </h3>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-9 text-[#555]">
            Pišite nam i zajedno ćemo osmisliti nežan, elegantan i pažljivo
            isplaniran ambijent za vaš poseban dan.
          </p>

          <Link
            href="/kontakt"
            className="inline-block border border-[#d8c0c6] bg-[#d8c0c6] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#cdaeb7] hover:border-[#cdaeb7]"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </main>
  );
}
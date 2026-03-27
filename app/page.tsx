export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#2f343b]">
      <section
        className="relative flex min-h-[78vh] items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/pocetna.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80">
            Magic Moments
          </p>

          <h1 className="mb-6 text-4xl font-semibold uppercase tracking-[0.08em] md:text-6xl lg:text-7xl">
            Organizacija i dekoracija proslava
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-white/95 md:text-xl">
            Elegantni detalji, pažljivo planiranje i atmosfera koja ostavlja utisak.
          </p>

          <a
            href="/kontakt"
            className="inline-block border border-white/70 bg-white/10 px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#2f343b]"
          >
            Kontaktirajte nas
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Magic Moments
          </p>

          <h2 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Posebni trenuci zaslužuju pažljivo osmišljen ambijent
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#4b4b4b]">
            Kreiramo proslave koje izgledaju skladno, elegantno i profinjeno.
            Od prve ideje do finalne realizacije, vodimo računa o svakom detalju
            kako bi vaš događaj bio lep, organizovan i potpuno u skladu sa vašim željama.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f4ed] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white p-10 shadow-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
                Organizacija
              </p>
              <h3 className="mb-5 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f]">
                Jasna priprema i dobra koordinacija
              </h3>
              <p className="leading-8 text-[#555]">
                Pomažemo vam da svaki korak bude pregledan i rasterećen —
                od planiranja događaja i izbora koncepta do realizacije i završnih detalja.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
                Dekoracija
              </p>
              <h3 className="mb-5 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f]">
                Po vašem ukusu, nežni i elegantni vajb
              </h3>
              <p className="leading-8 text-[#555]">
                Dekoracijom stvaramo atmosferu događaja. Kroz pažljivo birane boje,
                teksture i detalje prostor dobija otmen, topao i luksuzan izgled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <img
                src="/dekoracija1.jpg"
                alt="Elegantna dekoracija događaja"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
                Naš pristup
              </p>
              <h3 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
                Sve treba da izgleda skladno i profinjeno
              </h3>
              <p className="mb-5 text-lg leading-9 text-[#4b4b4b]">
                Inspiraciju gradimo kroz miran luksuzan stil, čiste linije i pažljivo
                osmišljene detalje. Želimo da sajt, kao i događaji koje radite,
                deluje ozbiljno, elegantno i profesionalno.
              </p>
              <p className="text-lg leading-9 text-[#4b4b4b]">
                To znači manje viška, bolji raspored sadržaja, više prostora i lepši
                odnos između slika, teksta i navigacije.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf5] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Sledeći korak
          </p>

          <h2 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Hajde da osmislimo vašu proslavu
          </h2>

          <p className="mb-8 text-lg leading-8 text-[#4b4b4b]">
            Javite nam se i zajedno ćemo definisati stil, dekoraciju i organizaciju
            događaja koji želite.
          </p>

          <a
            href="/kontakt"
            className="inline-block bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase tracking-[0.10em] text-white transition hover:bg-[#cdaeb7]"
          >
            Pošaljite upit
          </a>
        </div>
      </section>
    </main>
  );
}
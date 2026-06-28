import { categories } from "@/lib/news-data";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-serif text-2xl font-black">The Meridian</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sidebar-foreground/70">
              Riippumatonta raportointia maailman muovaavista uutisista jo
              vuodesta 2026.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/60">
              Kategoriat
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-sidebar-foreground/80 transition-colors hover:text-primary"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/60">
              Yritys
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Meistä", "Uutishuone", "Ura", "Mainosta", "Yhteys"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sidebar-foreground/80 transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/60">
              Tilaa
            </h3>
            <p className="mt-4 text-sm text-sidebar-foreground/70">
              Saat aamukatsauksen sähköpostiisi.
            </p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="Sähköposti"
                aria-label="Sähköposti"
                className="min-w-0 flex-1 rounded-md border border-sidebar-border bg-transparent px-3 py-2 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Liity
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-sidebar-border pt-6 text-xs text-sidebar-foreground/60 sm:flex-row">
          <span>© 2026 NyfixiMedia. Kaikki oikeudet pidätetään.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">
              Yksityisyys
            </a>
            <a href="#" className="hover:text-primary">
              Käyttöehdot
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

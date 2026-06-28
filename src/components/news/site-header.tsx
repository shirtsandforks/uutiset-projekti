import { Link } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { categories } from "@/lib/news-data";

const today = new Date().toLocaleDateString("fi-FI", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      {/* Top utility bar */}
      <div className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-muted-foreground">
          <span className="hidden sm:inline">{capitalizedToday}</span>
          <span className="font-medium uppercase tracking-widest">
            Itsenäistä Journalismia
          </span>
          <Link
            to="/dashboard"
            className="font-medium text-primary hover:underline"
          >
            Uutishuone
          </Link>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6">
        <button
          type="button"
          aria-label="Open menu"
          className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted md:hidden"
        >
          <Menu className="size-5" />
        </button>

        <Link to="/" className="mx-auto md:mx-0">
          <h1 className="font-serif text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Kaupungin Uutiset
          </h1>
        </Link>

        <button
          type="button"
          aria-label="Search"
          className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
        >
          <Search className="size-5" />
        </button>
      </div>

      {/* Category navigation */}
      <nav className="border-t border-border" aria-label="Sections">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-4 py-3 text-sm font-medium">
          <Link
            to="/"
            className="whitespace-nowrap text-foreground transition-colors hover:text-primary"
          >
            Etusivu
          </Link>
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
            >
              {category}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Newspaper,
  PenSquare,
  Users,
  Tags,
  BarChart3,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { label: "Yleiskatsaus", icon: LayoutDashboard, active: true },
  { label: "Artikkelit", icon: Newspaper },
  { label: "Editori", icon: PenSquare },
  { label: "Kirjoittajat", icon: Users },
  { label: "Kategoriat", icon: Tags },
  { label: "Analytiikka", icon: BarChart3 },
  { label: "Asetukset", icon: Settings },
];

export function DashboardSidebar() {
  return (
    <aside className="flex h-full w-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-2 px-6 py-6">
        <span className="font-serif text-xl font-black text-sidebar-foreground">
          The Meridian
        </span>
      </div>

      <nav className="flex-1 px-3" aria-label="Dashboard">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <Link
          to="/"
          className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
        >
          Takasin etusivulle
          <ArrowUpRight className="size-4" />
        </Link>
        <div className="mt-2 flex items-center gap-3 rounded-md px-3 py-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-sidebar-primary text-xs font-bold text-sidebar-primary-foreground">
            EH
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              Elli Heinä
            </p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              Päätoimittaja
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

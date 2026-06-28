import { createFileRoute } from "@tanstack/react-router";
import { Bell, Plus } from "lucide-react";
import { DashboardSidebar } from "@/src/components/dashboard/dashboard-sidebar";
import { StatCards } from "@/src/components/dashboard/stat-cards";
import { ArticlesTable } from "@/src/components/dashboard/articles-table";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar (desktop) */}
      <div className="sticky top-0 hidden h-screen w-64 shrink-0 lg:block">
        <DashboardSidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-6">
          <div>
            <h1 className="font-serif text-xl font-bold text-foreground">
              Uutishuone yleiskatsaus
            </h1>
            <p className="text-sm text-muted-foreground">
              Tervetuloa takaisin, Elli.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
            >
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Plus className="size-4" />
              Artikkeli
            </button>
          </div>
        </header>

        <main className="flex-1 space-y-6 p-4 sm:p-6">
          <StatCards />
          <ArticlesTable />
        </main>
      </div>
    </div>
  );
}

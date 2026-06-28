import { MoreHorizontal, Search } from "lucide-react";
import { dashboardArticles, type DashboardArticle } from "@/lib/news-data";

const statusStyles: Record<DashboardArticle["status"], string> = {
  Julkaistu: "bg-primary/10 text-primary",
  Luonnos: "bg-muted text-muted-foreground",
  Tarkastelussa: "bg-chart-4/20 text-chart-2",
};

export function ArticlesTable() {
  return (
    <section className="rounded-lg border border-border bg-card">
      <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-lg font-bold text-foreground">
            Uusimmat Artikkelit
          </h2>
          <p className="text-sm text-muted-foreground">
            Hallitse ja tarkastele toimituksesi sisältöä.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm focus:border-primary focus:outline-none sm:w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3 font-medium">Otsikko</th>
              <th className="px-4 py-3 font-medium">Kategoria</th>
              <th className="px-4 py-3 font-medium">Kirjoittaja</th>
              <th className="px-4 py-3 font-medium">Tila</th>
              <th className="px-4 py-3 text-right font-medium">Katsottu</th>
              <th className="px-4 py-3 font-medium">Päivitetty</th>
              <th className="px-4 py-3">
                <span className="sr-only">Toiminnot</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dashboardArticles.map((article) => (
              <tr
                key={article.id}
                className="border-b border-border last:border-0 transition-colors hover:bg-muted/50"
              >
                <td className="max-w-xs px-4 py-3">
                  <span className="font-medium text-foreground line-clamp-1">
                    {article.title}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {article.category}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {article.author}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[article.status]}`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-foreground">
                  {article.views > 0 ? article.views.toLocaleString() : "—"}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {article.updatedAt}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    aria-label={`Actions for ${article.title}`}
                    className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

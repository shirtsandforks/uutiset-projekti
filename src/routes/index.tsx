import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/lib/news-data";
import { SiteHeader } from "@/src/components/news/site-header";
import { SiteFooter } from "@/src/components/news/site-footer";
import { FeaturedHero } from "@/src/components/news/featured-hero";
import { ArticleCard } from "@/src/components/news/article-card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.id !== featured.id);
  const secondary = rest.slice(0, 3);
  const latest = rest.slice(0, 4);
  const business = articles.filter((a) => a.category === "Talous");
  const mostRead = rest.slice(2, 7);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <FeaturedHero article={featured} secondary={secondary} />

        {/* Latest grid + sidebar */}
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading title="Uusimmat uutiset" />
            <div className="grid gap-8 sm:grid-cols-2">
              {latest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Most read sidebar */}
          <aside className="lg:border-l lg:border-border lg:pl-8">
            <SectionHeading title="Luetuimmat" />
            <ol className="flex flex-col gap-5">
              {mostRead.map((article, index) => (
                <li key={article.id} className="group flex gap-4">
                  <span className="font-serif text-3xl font-black leading-none text-primary/30">
                    {index + 1}
                  </span>
                  <div>
                    <a href="#">
                      <h3 className="font-serif text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-balance">
                        {article.title}
                      </h3>
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {article.category} · {article.readTime}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        {/* Business section */}
        {business.length > 0 && (
          <section className="mt-12 border-t border-border pt-8">
            <SectionHeading title="Business" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {business.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <h2 className="font-serif text-2xl font-bold text-foreground">{title}</h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

import type { Article } from "@/lib/news-data";

interface FeaturedHeroProps {
  article: Article;
  secondary: Article[];
}

export function FeaturedHero({ article, secondary }: FeaturedHeroProps) {
  return (
    <section className="grid gap-8 border-b border-border pb-10 lg:grid-cols-3">
      {/* Lead story */}
      <article className="group lg:col-span-2">
        <a href="#" className="block overflow-hidden rounded-lg">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
          {article.category} · Pääuutinen
        </span>
        <a href="#">
          <h2 className="mt-2 font-serif text-3xl font-black leading-tight text-foreground transition-colors group-hover:text-primary text-balance sm:text-4xl lg:text-5xl">
            {article.title}
          </h2>
        </a>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          By {article.author} · {article.publishedAt} · {article.readTime}
        </p>
      </article>

      {/* Secondary stories */}
      <div className="flex flex-col divide-y divide-border lg:border-l lg:border-border lg:pl-8">
        <h2 className="pb-4 font-serif text-lg font-bold text-foreground">
          Lisää huippu-uutisia
        </h2>
        {secondary.map((item) => (
          <div key={item.id} className="py-4 first:pt-0">
            <article className="group">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </span>
              <a href="#">
                <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-balance">
                  {item.title}
                </h3>
              </a>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {item.author} · {item.readTime}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

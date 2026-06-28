import type { Article } from "@/lib/news-data";

interface ArticleCardProps {
  article: Article;
  orientation?: "vertical" | "horizontal";
}

export function ArticleCard({
  article,
  orientation = "vertical",
}: ArticleCardProps) {
  if (orientation === "horizontal") {
    return (
      <article className="group flex gap-4">
        <a href="#" className="shrink-0 overflow-hidden rounded-md">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="size-24 object-cover transition-transform duration-300 group-hover:scale-105 sm:size-28"
          />
        </a>
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {article.category}
          </span>
          <a href="#">
            <h3 className="mt-1 font-serif text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-balance">
              {article.title}
            </h3>
          </a>
          <p className="mt-auto pt-2 text-xs text-muted-foreground">
            {article.author} · {article.readTime}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col">
      <a href="#" className="overflow-hidden rounded-md">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="aspect-16/10 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
        {article.category}
      </span>
      <a href="#">
        <h3 className="mt-1 font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-balance">
          {article.title}
        </h3>
      </a>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        Kirj. {article.author} · {article.publishedAt} · {article.readTime}
      </p>
    </article>
  );
}

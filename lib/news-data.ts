export type Category =
  "Politiikka" | "Talous" | "Maailma" | "Tekniikka" | "Kulttuuri" | "Mielipide";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  readTime: string;
  publishedAt: string;
  image: string;
  featured?: boolean;
}

export const categories: Category[] = [
  "Politiikka",
  "Talous",
  "Maailma",
  "Tekniikka",
  "Kulttuuri",
  "Mielipide",
];

export const articles: Article[] = [
  {
    id: "senate-infrastructure-vote",
    title:
      "Hallitus hyväksyi historiallisen infrastruktuurilain kuukausia kestäneiden neuvottelujen jälkeen",
    excerpt:
      "Laaja lakipaketti ohjaa satoja miljardeja teiden, laajakaistaverkkojen ja puhtaan energian kehittämiseen, mikä merkitsee sukupolven merkittävintä julkista investointia.",
    category: "Politiikka",
    author: "Elli Heinä",
    readTime: "8 min lukuaika",
    publishedAt: "June 27, 2026",
    image: "/images/news-politics.png",
    featured: true,
  },
  {
    id: "markets-rally-rate-cut",
    title:
      "Maailman osakemarkkinat nousuun, kun keskuspankit vihjaavat korkopolitiikan muutoksesta",
    excerpt:
      "Sijoittajat ottivat myönteisesti vastaan viestit, joiden mukaan korkojen laskusykli saattaa alkaa odotettua aikaisemmin.",
    category: "Talous",
    author: "Markku Kello",
    readTime: "5 min lukuaika",
    publishedAt: "June 27, 2026",
    image: "/images/news-business.png",
  },
  {
    id: "coastal-cities-climate",
    title:
      "Rannikkokaupungit kiirehtivät uudistamaan suojautumistaan merenpinnan nousua vastaan",
    excerpt:
      "Rotterdamista Jakartaan insinöörit ja kaupunkisuunnittelijat testaavat rohkeita uusia ratkaisuja veden etenemisen hillitsemiseksi.",
    category: "Maailma",
    author: "Pertti Raita",
    readTime: "11 min lukuaika",
    publishedAt: "June 26, 2026",
    image: "/images/news-world.png",
  },
  {
    id: "ai-newsroom-tools",
    title:
      "Miten toimitukset uudistuvat hiljaisesti tekoälytyökalujen ympärille",
    excerpt:
      "Päätoimittajien mukaan teknologia muuttaa tutkimus- ja tuotantotyötä, mutta vaikeimmat kysymykset liittyvät luottamukseen.",
    category: "Tekniikka",
    author: "Taisto Kontio",
    readTime: "7 min lukuaika",
    publishedAt: "June 26, 2026",
    image: "/images/news-tech.png",
  },
  {
    id: "film-festival-breakout",
    title: "Hiljainen ensiesitys nousee festivaalikauden läpimurtotarinoiksi",
    excerpt:
      "Ensimmäistä elokuvaansa ohjaavan tekijän intiimi draama on saanut kriitikot arvioimaan uudelleen, mitä pienibudjettinen elokuva voi saavuttaa.",
    category: "Kulttuuri",
    author: "Sofia Marin",
    readTime: "6 min lukuaika",
    publishedAt: "June 25, 2026",
    image: "/images/news-culture.png",
  },
  {
    id: "opinion-democracy-local",
    title: "Mielipide: Demokratian tulevaisuus ratkaistaan paikallistasolla",
    excerpt:
      "Kansalliset otsikot hallitsevat huomiotamme, mutta merkittävimmät päätökset tehdään kaupungintaloissa.",
    category: "Mielipide",
    author: "Jaakko Ruoska",
    readTime: "4 min lukuaika",
    publishedAt: "June 25, 2026",
    image: "/images/news-opinion.png",
  },
  {
    id: "supply-chains-shift",
    title:
      "Suuri uudelleenjärjestyminen: toimitusketjut löytävät uuden painopisteen",
    excerpt:
      "Valmistajat hajauttavat tuotantoaan pois yhden maan riippuvuudesta, mikä muokkaa globaaleja kauppareittejä.",
    category: "Talous",
    author: "Markku Kello",
    readTime: "9 min lukuaika",
    publishedAt: "June 24, 2026",
    image: "/images/news-supply.png",
  },
  {
    id: "space-telescope-discovery",
    title:
      "Uusi teleskooppidata paljastaa yllättävän tiheän varhaisen maailmankaikkeuden",
    excerpt:
      "Tähtitieteilijöiden mukaan havainnot voivat pakottaa kirjoittamaan uudelleen käsitykset siitä, miten ensimmäiset galaksit muodostuivat.",
    category: "Tekniikka",
    author: "Taisto Kontio",
    readTime: "6 min lukuaika",
    publishedAt: "June 24, 2026",
    image: "/images/news-space.png",
  },
];

export interface DashboardArticle {
  id: string;
  title: string;
  category: Category;
  author: string;
  status: "Julkaistu" | "Luonnos" | "Tarkastelussa";
  views: number;
  updatedAt: string;
}

export const dashboardArticles: DashboardArticle[] = [
  {
    id: "1",
    title: "Senate Passes Landmark Infrastructure Bill After Months of Talks",
    category: "Politiikka",
    author: "Elli Heinä",
    status: "Julkaistu",
    views: 48213,
    updatedAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Global Markets Rally as Central Banks Signal a Shift on Rates",
    category: "Talous",
    author: "Markku Kello",
    status: "Julkaistu",
    views: 31987,
    updatedAt: "5 hours ago",
  },
  {
    id: "3",
    title: "How Newsrooms Are Quietly Rebuilding Around AI Tools",
    category: "Tekniikka",
    author: "Taisto Kontio",
    status: "Tarkastelussa",
    views: 0,
    updatedAt: "Yesterday",
  },
  {
    id: "4",
    title: "Coastal Cities Race to Rethink Their Defenses Against Rising Seas",
    category: "Maailma",
    author: "Pertti Raita",
    status: "Luonnos",
    views: 0,
    updatedAt: "Yesterday",
  },
  {
    id: "5",
    title: "A Quiet Debut Becomes the Breakout Story of the Festival Season",
    category: "Kulttuuri",
    author: "Sofia Marin",
    status: "Julkaistu",
    views: 12450,
    updatedAt: "2 days ago",
  },
  {
    id: "6",
    title: "The Great Reshuffling: Supply Chains Find a New Center of Gravity",
    category: "Talous",
    author: "Markku Kello",
    status: "Luonnos",
    views: 0,
    updatedAt: "3 days ago",
  },
];

export const dashboardStats = [
  { label: "Kaikki artikkelit", value: "1,284", change: "+24 this week" },
  { label: "Tänään julkaistut", value: "18", change: "+6 vs. yesterday" },
  { label: "Lukijoita kuukaudessa", value: "2.4M", change: "+12.5%" },
  { label: "Keskimääräinen luku aika", value: "6m 12s", change: "+8s" },
];

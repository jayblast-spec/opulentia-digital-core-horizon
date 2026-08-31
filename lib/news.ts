export type NewsItem = {
  id: number;
  title: string;
  url: string;
  points: number;
  author: string;
  createdAt: string;
  commentsUrl: string;
  source: string;
};

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "news.ycombinator.com";
  }
}

// Live tech news pulled from Hacker News (via the public Algolia API — no key required).
// We show headline + source + outbound link only, in a Techmeme-style aggregation:
// this links out to the original publisher rather than republishing article bodies,
// which keeps the news hub legitimate rather than a copyright risk.
export async function fetchTechNews(limit = 24): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      "https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points%3E15",
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const hits: any[] = data.hits ?? [];
    return hits
      .filter((h) => h.title && h.url)
      .slice(0, limit)
      .map((h) => ({
        id: h.objectID,
        title: h.title as string,
        url: h.url as string,
        points: h.points ?? 0,
        author: h.author ?? "unknown",
        createdAt: h.created_at as string,
        commentsUrl: `https://news.ycombinator.com/item?id=${h.objectID}`,
        source: hostnameOf(h.url),
      }));
  } catch {
    return [];
  }
}

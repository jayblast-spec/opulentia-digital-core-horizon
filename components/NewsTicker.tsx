import { fetchTechNews } from "@/lib/news";

export default async function NewsTicker() {
  const items = await fetchTechNews(10);

  const headlines =
    items.length > 0
      ? items.map((i) => `${i.title.toUpperCase()} — ${i.source}`)
      : ["OPULENTIA DIGITAL CORE HORIZON IS NOW LIVE", "EXPLORE OUR ENTERPRISE AI PLATFORM"];

  const track = [...headlines, ...headlines];

  return (
    <div className="overflow-hidden border-y border-amber-dim/40 bg-amber text-obsidian">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap py-2 text-xs font-semibold tracking-wide">
        {track.map((h, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="opacity-70">●</span>
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

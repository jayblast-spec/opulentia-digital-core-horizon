<div align="center">

# Opulentia Digital Core Horizon
### Enterprise AI, analytics, cloud & trust — with a live technology news hub

Opulentia Digital Core Horizon (RC-9802444) is a standalone enterprise technology platform spanning AI orchestration, analytics, cloud infrastructure, and digital trust — paired with a continuously live tech news feed on the homepage and a dedicated news hub, in the spirit of a CNN/BBC-style ticker for the enterprise AI space.

[![Live Demo](https://img.shields.io/badge/Live_Demo-opulentia--digital.vercel.app-1D4ED8?style=for-the-badge&logo=vercel)](https://opulentia-digital.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/jayblast-spec/opulentia-digital-core-horizon)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-1D4ED8?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&pause=1000&color=1D4ED8&width=760&lines=Live+tech+news%2C+refreshed+continuously;Four+products%2C+one+enterprise+platform;No+fabricated+metrics+%E2%80%94+honest+by+design)](https://git.io/typing-svg)

</div>

## What It Does

Opulentia Digital Core Horizon presents four platform products — Horizon Intelligence (AI orchestration), Core Analytics, Opulentia Cloud, and Digital Trust Suite — each with its own detail page, alongside a genuinely live technology news hub pulled from a real public news API and refreshed every few minutes, plus a company-authored Insights/blog section kept deliberately separate from the third-party news feed.

## How It Works

- `app/page.tsx` — homepage: hero, live news ticker, product grid, honest capability-focused positioning section, and a live news preview
- `app/news/page.tsx` + `lib/news.ts` — News Hub: fetches real, current tech headlines from the Hacker News Algolia API (`search_by_date`, sorted by recency), links out to the original publisher, revalidates every 5 minutes
- `components/NewsTicker.tsx` — homepage scrolling ticker, sourced from the same live feed
- `app/services/page.tsx` + `app/services/[slug]/page.tsx` + `lib/products.ts` — the four product overview and detail pages
- `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` + `lib/posts.ts` — company-authored Insights posts, distinct from the third-party News Hub
- `app/about`, `app/careers`, `app/contact` — standard company pages

## Live

[opulentia-digital.vercel.app](https://opulentia-digital.vercel.app)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Tektur (display), Inter (body) |
| Live data | Hacker News Algolia API |
| Hosting | Vercel |

<div align="center">

![Footer banner](https://capsule-render.vercel.app/api?type=waving&color=0:1D4ED8,55:0B1E3D,100:020617&height=120&section=footer&text=Opulentia%20Digital%20Core%20Horizon&fontSize=24&fontColor=ffffff&desc=RC-9802444&descAlignY=75)

</div>

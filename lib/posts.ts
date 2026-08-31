export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-explainability-comes-first",
    title: "Why We Build Explainability First, Not Last",
    excerpt:
      "Most AI platforms bolt on explainability after the fact. We think that's backwards — here's our reasoning.",
    body: [
      "Enterprise buyers don't reject AI tooling because it's inaccurate — they reject it because it's opaque. A dashboard that can't show its work doesn't survive contact with a real audit, a real board meeting, or a real customer escalation.",
      "That's why Core Analytics traces every metric back to its source transformation, and why Horizon Intelligence logs every automated action it takes. Explainability isn't a feature we plan to add later — it's a constraint we designed around from the first commit.",
    ],
  },
  {
    slug: "security-defaults-not-add-ons",
    title: "Security Has to Be a Default, Not an Add-On",
    excerpt:
      "Encryption, access control, and audit logging shouldn't be a premium tier. Here's why we ship them on every plan.",
    body: [
      "Every product in the Opulentia platform ships with role-based access control, encryption in transit and at rest, and audit-oriented logging enabled from the first deployment — not gated behind a higher pricing tier.",
      "This is a deliberate constraint on how we build, not a marketing claim about scale we haven't earned. Digital Trust Suite exists specifically to make these defaults visible and configurable, rather than invisible plumbing.",
    ],
  },
  {
    slug: "building-in-public-as-a-new-company",
    title: "What It Means to Build This as a New Company",
    excerpt:
      "We're early. Here's how that shapes what we say — and don't say — about our own platform.",
    body: [
      "Opulentia Digital Core Horizon is a new company. We don't have a decade of customer logos or a load-bearing case study library yet, and we're not going to pretend otherwise on our own homepage.",
      "What we do have is a clear engineering position: orchestration, analytics, cloud infrastructure, and trust tooling built together, with defaults we're willing to stand behind. That's what this site describes — nothing more, nothing invented.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} — Opulentia Digital Core Horizon` : "Not found" };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/blog" className="text-xs font-semibold tracking-wide text-amber hover:underline">
        ← All Insights
      </Link>
      <h1 className="mt-6 font-display text-3xl text-text sm:text-4xl">{post.title}</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-text-dim">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </main>
  );
}

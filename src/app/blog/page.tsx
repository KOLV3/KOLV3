import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Badge } from "../../components/ui/Badge";
import { blogPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Engineering & Design Blog | KOLVE",
  description:
    "Practical articles on software engineering, UI/UX architecture, design tokens, and digital problem solving by the co-founders of KOLVE.",
};

export default function BlogIndexPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-bg py-16 sm:py-24 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="accent">Technical Insights</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Engineering, Design, and Problem Solving
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              Factual, technical reflections and workflow methodologies written directly by the
              four co-founders of KOLVE. No generic marketing fluff, no AI-generated filler copy.
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Listing */}
      <Section background="surface">
        <Container size="default">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-md border border-border bg-bg p-6 transition-colors hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-accent border border-border">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-muted">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-text hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs text-text-muted leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-surface-muted px-2 py-0.5 text-[10px] text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-accent" />
                      <span className="font-medium text-text">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.publishedAt}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

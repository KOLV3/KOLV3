import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { blogPosts } from "../../../lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | KOLVE",
    };
  }

  return {
    title: `${post.title} | KOLVE Blog`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-bg py-16 sm:py-20 transition-colors">
        <Container size="narrow">
          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs font-medium text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft className="mr-1 h-3.5 w-3.5" />
              Back to Blog
            </Link>
            <span className="text-xs text-text-muted">/</span>
            <Badge variant="accent">{post.category}</Badge>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base text-text-muted leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-on-accent font-semibold text-xs">
                {post.author.name[0]}
              </div>
              <div>
                <span className="font-semibold text-text block">{post.author.name}</span>
                <span className="text-[10px] text-text-muted">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 border-l border-border pl-4">
              <Calendar className="h-3.5 w-3.5 text-accent" />
              <span>Published {post.publishedAt}</span>
            </div>

            <div className="flex items-center gap-1.5 border-l border-border pl-4">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content Layout */}
      <Section background="surface">
        <Container size="narrow">
          <div className="space-y-10 text-sm text-text-muted leading-relaxed">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl font-bold text-text sm:text-2xl">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm text-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.subsections && (
                  <div className="mt-6 space-y-6 pl-2 sm:pl-4 border-l-2 border-accent/30">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <h3 className="text-base font-bold text-text">
                          {sub.title}
                        </h3>
                        {sub.body.map((subP, subPIdx) => (
                          <p key={subPIdx} className="text-xs text-text-muted leading-relaxed">
                            {subP}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Tags footer */}
            <div className="border-t border-border pt-6">
              <span className="text-xs font-semibold text-text block mb-2">Topic Tags:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-surface-muted px-2.5 py-1 text-xs text-text border border-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <Section background="default">
          <Container size="narrow">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
              Related Articles
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="rounded-md border border-border bg-surface p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-accent">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-text hover:text-accent transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs text-text-muted line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-border pt-3">
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                    >
                      Read article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Discussion CTA */}
      <section className="border-t border-border bg-surface-alt py-16 transition-colors">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text">
              Have a problem that aligns with our engineering?
            </h2>
            <p className="mt-2 text-sm text-text-muted max-w-md mx-auto">
              Discuss your project directly with our co-founders in Sunsari, Nepal.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/contact" variant="primary">
                Discuss a Project
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

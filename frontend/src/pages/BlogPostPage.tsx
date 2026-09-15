import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Facebook, Twitter } from "lucide-react";
import { SEO } from "../components/common/SEO";
import { blogPosts as staticBlogPosts, getBlogPostUrl } from "../data/blogData";
import { RelatedPosts } from "../components/blog/RelatedPosts";
import { ContactSection } from "../components/sections/ContactSection";
import { Container } from "../components/ui/Container";

const readingTime = (html: string) => {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ year?: string; month?: string; day?: string; slug: string }>();
  const cleanSlug = slug?.replace(/^\/+/, "") || "";
  const post = staticBlogPosts.find((p) => p.slug === cleanSlug || p.slug === `/${cleanSlug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Container className="py-24 text-center">
        <SEO title="Article Not Found" />
        <h1 className="font-display text-4xl font-semibold">Story Not Found</h1>
        <Link to="/blog" className="mt-6 inline-block font-semibold text-terracotta underline underline-offset-4">
          Back to Blog
        </Link>
      </Container>
    );
  }

  const content = (post.content || "").replace(/­/g, "");
  const url = getBlogPostUrl(post.slug, post.createdAt);
  const tags = post.tags
    ? post.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [post.category];

  const share = (href: string) => window.open(href, "_blank", "noopener,noreferrer");
  const pageUrl = typeof window !== "undefined" ? window.location.href : url;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        url={url}
        type="article"
      />

      <article>
        <header className="bg-cream">
          <Container width="narrow" className="pb-10 pt-12 md:pt-20">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link to="/" className="underline decoration-ink/20 underline-offset-4 hover:text-ink">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/blog" className="underline decoration-ink/20 underline-offset-4 hover:text-ink">Blog</Link>
            </nav>
            <p className="mt-8 text-sm font-semibold text-terracotta">{post.category}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.15] md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-muted">
              By <span className="font-semibold text-ink">{post.author}</span>
              <span aria-hidden="true"> · </span>
              {post.date}
              <span aria-hidden="true"> · </span>
              {readingTime(content)} min read
            </p>
          </Container>

          <Container className="pb-4">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-md bg-sand">
              <img src={post.image} alt="" className="mx-auto max-h-[600px] w-full object-contain" />
            </div>
          </Container>
        </header>

        <Container width="narrow" className="py-12 md:py-16">
          <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />

          <footer className="mt-14 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="sr-only">Tags</h2>
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-sand px-3 py-1 text-sm text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Share this story</span>
              <button
                type="button"
                onClick={() => share(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`)}
                aria-label="Share on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink"
              >
                <Facebook size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => share(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`)}
                aria-label="Share on Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink"
              >
                <Twitter size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => share(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(post.title)}`)}
                aria-label="Share on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 text-sm font-bold hover:border-ink"
              >
                in
              </button>
            </div>
          </footer>

          <Link to="/blog" className="mt-10 inline-block font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta">
            ← Back to Blog
          </Link>
        </Container>
      </article>

      <RelatedPosts currentPostId={post.id} category={post.category} />
      <ContactSection tone="cream" />
    </>
  );
};

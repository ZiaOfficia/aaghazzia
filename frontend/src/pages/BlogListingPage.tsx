import { useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { BlogCard } from "../components/blog/BlogCard";
import { blogPosts as staticBlogPosts, getBlogPostUrl } from "../data/blogData";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { FitImage } from "../components/ui/FitImage";

const ITEMS_PER_PAGE = 7; // 1 featured + 6 cards

export const BlogListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category") || "";
  const pageParam = Math.max(1, parseInt(searchParams.get("page") || "1") || 1);

  const { posts, totalCount, totalPages } = useMemo(() => {
    let filtered = staticBlogPosts;
    if (categoryParam) {
      filtered = filtered.filter((post) => post.category.toLowerCase() === categoryParam.toLowerCase());
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q) ||
          (post.tags && post.tags.toLowerCase().includes(q)),
      );
    }
    const start = (pageParam - 1) * ITEMS_PER_PAGE;
    return {
      posts: filtered.slice(start, start + ITEMS_PER_PAGE),
      totalCount: filtered.length,
      totalPages: Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1,
    };
  }, [pageParam, searchQuery, categoryParam]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageParam, searchQuery, categoryParam]);

  const uniqueCategories = useMemo(
    () => Array.from(new Set(staticBlogPosts.map((post) => post.category))),
    [],
  );

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key !== "page") next.set("page", "1");
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams(new URLSearchParams());

  // Featured post only on page 1 with no filters.
  const showFeatured = !searchQuery && !categoryParam && pageParam === 1 && posts.length > 0;
  const featuredPost = showFeatured ? posts[0] : null;
  const displayPosts = showFeatured ? posts.slice(1) : posts;

  const visiblePages = (() => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    if (pageParam > 3) pages.push("...");
    for (let i = Math.max(2, pageParam - 1); i <= Math.min(totalPages - 1, pageParam + 1); i++) pages.push(i);
    if (pageParam < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  })();

  const pillClass = (active: boolean) =>
    clsx(
      "min-h-11 rounded-md border px-4 text-sm font-semibold transition-colors",
      active ? "border-ink bg-ink text-cream" : "border-ink/20 hover:border-ink",
    );

  return (
    <>
      <SEO
        title="Aaghaz Foundation Blog - Stories of Impact"
        description="Explore our latest stories, success narratives, and updates on how Aaghaz Foundation is transforming lives through education."
      />

      <PageHeader
        eyebrow="Our Blog"
        title="Stories of Impact"
        intro="Read about our students' journeys, how we check student homes, and updates on our work."
      />

      <Container className="pb-20 md:pb-28">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button type="button" onClick={() => setParam("category", "")} aria-pressed={!categoryParam} className={pillClass(!categoryParam)}>
            All Stories
          </button>
          {uniqueCategories.map((cat) => {
            const active = categoryParam.toLowerCase() === cat.toLowerCase();
            return (
              <button key={cat} type="button" onClick={() => setParam("category", cat)} aria-pressed={active} className={pillClass(active)}>
                {cat}
              </button>
            );
          })}
        </div>

        {(searchQuery || categoryParam) && (
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted" aria-live="polite">
            <span>
              Showing results for
              {categoryParam && <strong className="ml-1 font-semibold text-ink">Category: "{categoryParam}"</strong>}
              {searchQuery && <strong className="ml-1 font-semibold text-ink">Search: "{searchQuery}"</strong>}
            </span>
            <button type="button" onClick={clearFilters} className="min-h-11 font-semibold text-terracotta underline underline-offset-4">
              Clear filters
            </button>
          </p>
        )}

        <div className="mt-12 grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {posts.length === 0 ? (
              <div className="rounded-md bg-sand px-6 py-16 text-center">
                <p className="font-display text-2xl font-semibold">No stories found</p>
                <p className="mx-auto mt-3 max-w-md text-muted">
                  We could not find any stories. Try clearing your search or filters to see all stories.
                </p>
                <button type="button" onClick={clearFilters} className="mt-6 min-h-11 font-semibold text-terracotta underline underline-offset-4">
                  Show all stories
                </button>
              </div>
            ) : (
              <>
                {featuredPost && (
                  <article className="mb-14 grid gap-8 border-b border-line pb-14 md:grid-cols-2">
                    <Link
                      to={getBlogPostUrl(featuredPost.slug, featuredPost.createdAt)}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="block aspect-[4/3] overflow-hidden rounded-md bg-sand"
                    >
                      <FitImage src={featuredPost.image} alt="" />
                    </Link>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-muted">
                        <span className="font-semibold text-terracotta">Featured Story · {featuredPost.category}</span>
                        <span aria-hidden="true"> · </span>
                        {featuredPost.date}
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
                        <Link to={getBlogPostUrl(featuredPost.slug, featuredPost.createdAt)} className="hover:text-terracotta">
                          {featuredPost.title}
                        </Link>
                      </h2>
                      <p className="mt-4 text-lg text-muted">{featuredPost.excerpt}</p>
                      <Link
                        to={getBlogPostUrl(featuredPost.slug, featuredPost.createdAt)}
                        className="mt-5 self-start font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
                      >
                        Read the full story
                      </Link>
                    </div>
                  </article>
                )}

                <div className="grid gap-12 sm:grid-cols-2 sm:gap-10">
                  {displayPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            )}

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-16 flex flex-col items-center gap-3">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setParam("page", String(pageParam - 1))}
                    disabled={pageParam <= 1}
                    aria-label="Previous page"
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                  </button>
                  {visiblePages.map((page, i) =>
                    page === "..." ? (
                      <span key={`gap-${i}`} className="flex h-11 w-8 items-center justify-center text-muted">
                        …
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setParam("page", String(page))}
                        aria-current={page === pageParam ? "page" : undefined}
                        className={clsx(
                          "flex h-11 w-11 items-center justify-center rounded-md border font-semibold",
                          page === pageParam ? "border-ink bg-ink text-cream" : "border-ink/20 hover:border-ink",
                        )}
                      >
                        {page}
                      </button>
                    ),
                  )}
                  <button
                    type="button"
                    onClick={() => setParam("page", String(pageParam + 1))}
                    disabled={pageParam >= totalPages}
                    aria-label="Next page"
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </div>
                <p className="text-sm text-muted">
                  Page {pageParam} of {totalPages} — {totalCount} Stories
                </p>
              </nav>
            )}
          </div>

          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </Container>
    </>
  );
};

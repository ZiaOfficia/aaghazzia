import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { getBlogPostUrl, blogPosts as staticBlogPosts } from "../../data/blogData";
import { ButtonLink } from "../ui/ButtonLink";
import { fieldClass } from "../ui/formStyles";

export const BlogSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const recentPosts = staticBlogPosts.slice(0, 4);

  // Compute dynamic categories and counts
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    staticBlogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <aside className="space-y-10" aria-label="Blog sidebar">
      <form onSubmit={handleSearch} role="search">
        <label htmlFor="blog-search" className="font-display text-xl font-semibold">
          Search stories
        </label>
        <div className="relative mt-3">
          <input
            id="blog-search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${fieldClass} pr-12`}
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-muted hover:text-terracotta"
            aria-label="Submit search"
          >
            <Search size={18} aria-hidden="true" />
          </button>
        </div>
      </form>

      <nav aria-labelledby="blog-categories">
        <h2 id="blog-categories" className="font-display text-xl font-semibold">
          Categories
        </h2>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {categoriesWithCounts.map((category) => (
            <li key={category.name}>
              <Link
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="flex min-h-11 items-center justify-between py-2 hover:text-terracotta"
              >
                <span>{category.name}</span>
                <span className="text-sm text-muted">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="recent-stories">
        <h2 id="recent-stories" className="font-display text-xl font-semibold">
          Recent stories
        </h2>
        <ul className="mt-4 space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={getBlogPostUrl(post.slug, post.createdAt)} className="group flex gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-sand">
                  <img loading="lazy" decoding="async" src={post.image} alt="" className="h-full w-full object-cover" />
                </div>
                <span className="min-w-0">
                  <span className="line-clamp-2 font-semibold leading-snug group-hover:text-terracotta">{post.title}</span>
                  <span className="mt-1 block text-sm text-muted">{post.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sponsor-callout" className="rounded-md bg-ink p-6 text-cream">
        <p className="text-sm font-semibold text-sand-light">Support Our Mission</p>
        <h2 id="sponsor-callout" className="mt-2 font-display text-2xl font-semibold">
          Sponsor a Student
        </h2>
        <p className="mt-2 text-cream/75">
          With just Rs 2,000, you can pay a poor student's school fees and help them study.
        </p>
        <ButtonLink to="/contact" variant="inverse" className="mt-5 w-full">
          Sponsor Now
        </ButtonLink>
      </section>
    </aside>
  );
};

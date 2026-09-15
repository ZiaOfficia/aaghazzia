import { blogPosts as staticBlogPosts } from "../../data/blogData";
import { BlogCard } from "./BlogCard";
import { Section } from "../ui/Section";

interface RelatedPostsProps {
  currentPostId: string | number;
  category: string;
}

export const RelatedPosts = ({ currentPostId, category }: RelatedPostsProps) => {
  const others = staticBlogPosts.filter((p) => String(p.id) !== String(currentPostId));
  const sameCategory = others.filter(
    (p) => category && p.category.toLowerCase() === category.toLowerCase(),
  );
  // Fill with recent posts when the category has fewer than three.
  const posts = [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section aria-labelledby="related-stories" tone="sand">
      <h2 id="related-stories" className="font-display text-3xl font-semibold">
        Related Stories
      </h2>
      <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
};

import { BlogCard } from "../blog/BlogCard";
import { blogPosts } from "../../data/blogData";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/ButtonLink";

export const BlogSection = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <Section id="blog" aria-labelledby="news-heading" tone="sand">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="news-heading"
          eyebrow="News & Stories"
          title="Latest News & Stories"
          intro="Read updates about our work, field visits, and the people who support Aaghaz."
        />
        <ButtonLink to="/blog" variant="text">
          See all stories
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
        {recentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
};

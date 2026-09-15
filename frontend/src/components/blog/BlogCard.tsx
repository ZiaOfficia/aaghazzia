import { Link } from "react-router-dom";
import type { BlogPost } from "../../data/blogData";
import { getBlogPostUrl } from "../../data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const url = getBlogPostUrl(post.slug, post.createdAt);

  return (
    <article className="group flex h-full flex-col">
      <Link to={url} tabIndex={-1} aria-hidden="true" className="block aspect-[3/2] overflow-hidden rounded-md bg-sand">
        <img
          loading="lazy"
          decoding="async"
          src={post.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </Link>

      <p className="mt-5 text-sm text-muted">
        <span className="font-semibold text-terracotta">{post.category}</span>
        <span aria-hidden="true"> · </span>
        {post.date}
      </p>

      <h3 className="mt-2 font-display text-xl font-semibold leading-snug md:text-2xl">
        <Link to={url} className="hover:text-terracotta">
          {post.title}
        </Link>
      </h3>

      <p className="mt-3 line-clamp-3 flex-1 text-muted">{post.excerpt}</p>

      <Link
        to={url}
        className="mt-4 inline-block self-start font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
      >
        Read the story<span className="sr-only">: {post.title}</span>
      </Link>
    </article>
  );
};

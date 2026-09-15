import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  /** Use "h1" for page titles. */
  as?: "h1" | "h2";
  /** Set when the heading sits on the dark ink background. */
  onDark?: boolean;
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  as: Tag = "h2",
  onDark = false,
  className,
}: SectionHeadingProps) => (
  <div
    className={clsx(
      "max-w-2xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    {eyebrow && (
      <p
        className={clsx(
          "mb-3 text-sm font-semibold",
          onDark ? "text-sand-light" : "text-terracotta",
        )}
      >
        {eyebrow}
      </p>
    )}
    <Tag
      id={id}
      className={clsx(
        "font-display font-semibold",
        Tag === "h1"
          ? "text-4xl sm:text-5xl md:text-[3.5rem]"
          : "text-3xl sm:text-4xl md:text-[2.75rem]",
      )}
    >
      {title}
    </Tag>
    {intro && (
      <p
        className={clsx(
          "mt-5 text-lg leading-relaxed",
          onDark ? "text-cream/80" : "text-muted",
        )}
      >
        {intro}
      </p>
    )}
  </div>
);

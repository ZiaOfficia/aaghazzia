import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional breadcrumb: parent page link shown above the title. */
  parent?: { label: string; to: string };
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
}

/** Standard top-of-page header: title and intro on cream, optional wide image below. */
export const PageHeader = ({ eyebrow, title, intro, parent, image, imageAlt = "", actions }: PageHeaderProps) => (
  <header className="bg-cream">
    <Container className="pb-12 pt-12 md:pb-16 md:pt-20">
      {parent && (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <Link to={parent.to} className="underline decoration-ink/20 underline-offset-4 hover:text-ink">
            {parent.label}
          </Link>
          <span aria-hidden="true"> / </span>
        </nav>
      )}
      <div className="max-w-3xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold text-terracotta">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-semibold leading-[1.12] sm:text-5xl md:text-[3.5rem]">
          {title}
        </h1>
        {intro && <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">{intro}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </Container>

    {image && (
      <Container className="pb-12 md:pb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-md bg-sand md:aspect-[21/9]">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        </div>
      </Container>
    )}
  </header>
);

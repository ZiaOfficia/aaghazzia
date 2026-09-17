import { Link } from "react-router-dom";
import { services, whatWeDoContent } from "../../data/content";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { FitImage } from "../ui/FitImage";

interface ServicesGridProps {
  /** Hide the heading when the page header already shows it (e.g. /services). */
  withHeading?: boolean;
}

export const ServicesGrid = ({ withHeading = true }: ServicesGridProps) => (
  <Section
    id="services"
    aria-labelledby={withHeading ? "what-we-do" : undefined}
    tone="cream"
    className={withHeading ? undefined : "!pt-4 md:!pt-8"}
  >
    {withHeading && (
      <SectionHeading
        id="what-we-do"
        eyebrow={whatWeDoContent.label}
        title={whatWeDoContent.heading}
        intro={whatWeDoContent.intro}
      />
    )}

    <div className={`${withHeading ? "mt-14" : ""} grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3`}>
      {services.map((service) => (
        <article key={service.title} className="flex flex-col">
          <div className="aspect-[3/2] overflow-hidden rounded-md bg-sand">
            <FitImage src={service.image} alt="" loading="lazy" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold">{service.title}</h3>
          <p className="mt-3 flex-1 text-muted">{service.description}</p>
          <Link
            to={service.link}
            className="mt-5 inline-block self-start font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
          >
            Learn more<span className="sr-only"> about {service.title}</span>
          </Link>
        </article>
      ))}
    </div>
  </Section>
);

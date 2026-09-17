import { aboutContent } from "../../data/content";
import { founderImage } from "../../data/imageAssets";
import { Section } from "../ui/Section";
import { ButtonLink } from "../ui/ButtonLink";
import { LinkedText } from "../ui/LinkedText";
import { FitImage } from "../ui/FitImage";

export const AboutSection = () => (
  <Section id="about" aria-labelledby="about-heading" tone="sand">
    <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <p className="mb-3 text-sm font-semibold text-terracotta">Our Story · Since 2004</p>
        <h2 id="about-heading" className="font-display text-3xl font-semibold sm:text-4xl md:text-[2.75rem]">
          {aboutContent.heading}
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted">
          {aboutContent.text.map((paragraph) => (
            <p key={paragraph}><LinkedText text={paragraph} /></p>
          ))}
        </div>
        <ButtonLink to="/about" variant="secondary" className="mt-10">
          Read our story
        </ButtonLink>
      </div>

      <figure className="lg:col-span-5">
        <div className="aspect-[4/5] overflow-hidden rounded-md bg-cream">
          <FitImage
            src={founderImage}
            alt="Mazhar Farooqui, Founder of Aaghaz Foundation"
            loading="lazy"
          />
        </div>
        <blockquote className="mt-8 border-l-2 border-terracotta pl-6 font-display text-xl italic leading-relaxed md:text-2xl">
          “{aboutContent.quote}”
        </blockquote>
        <figcaption className="mt-4 pl-6 text-muted"><LinkedText text={aboutContent.quoteAuthor} /></figcaption>
      </figure>
    </div>
  </Section>
);

import { faqs } from "../data/content";
import NewsletterSection from "../components/sections/NewsletterSection";
import { FAQList } from "../components/sections/FAQSection";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { ButtonLink } from "../components/ui/ButtonLink";

export const FAQPage = () => {
  return (
    <>
      <SEO
        title="FAQs — Aaghaz Foundation"
        description="Common questions about Aaghaz Foundation, how we support students, how donations work and how you can get involved."
      />

      <PageHeader
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        intro="Common questions about Aaghaz Foundation, how we support students, how donations work and how you can get involved."
      />

      <Section aria-label="Questions and answers" tone="cream" className="!pt-0">
        <div className="max-w-3xl">
          <FAQList items={faqs} />
        </div>
      </Section>

      <Section aria-labelledby="still-questions" tone="cream" className="!pt-0">
        <div className="max-w-3xl">
        <h2 id="still-questions" className="border-t border-line pt-12 font-display text-3xl font-semibold sm:text-4xl">
          Still have questions?
        </h2>
        <p className="mt-4 text-lg text-muted">
          If you cannot find the answer you need, email us at{" "}
          <a href="mailto:aaghaz.foundation@gmail.com" className="font-semibold text-terracotta underline underline-offset-4">
            aaghaz.foundation@gmail.com
          </a>
          . If you live outside India and would like to contribute, please contact us before transferring any funds.
        </p>
        <ButtonLink to="/contact" className="mt-8">
          Contact Us
        </ButtonLink>
        </div>
      </Section>

      <NewsletterSection />
    </>
  );
};

import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/content";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/ButtonLink";

interface FAQSectionProps {
  /** Show only the first N questions and link to the full FAQ page. */
  limit?: number;
  tone?: "cream" | "sand";
}

export const FAQList = ({ items }: { items: { question: string; answer: string }[] }) => (
  <div className="divide-y divide-ink/15 border-y border-ink/15">
    {items.map((faq) => (
      <details key={faq.question} className="group">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
          {faq.question}
          <ChevronDown
            size={20}
            aria-hidden="true"
            className="shrink-0 text-terracotta transition-transform group-open:rotate-180"
          />
        </summary>
        <p className="max-w-3xl pb-6 text-muted">{faq.answer}</p>
      </details>
    ))}
  </div>
);

export const FAQSection = ({ limit, tone = "cream" }: FAQSectionProps) => {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Section id="faq" aria-labelledby="faq-heading" tone={tone}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            intro="Common questions about Aaghaz Foundation, how we support students, how donations work and how you can get involved."
          />
          {limit && (
            <ButtonLink to="/faq" variant="text" className="mt-6">
              See all questions
            </ButtonLink>
          )}
        </div>
        <div className="lg:col-span-8">
          <FAQList items={items} />
        </div>
      </div>
    </Section>
  );
};

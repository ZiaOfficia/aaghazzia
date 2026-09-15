import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const stats = [
  { value: "65,000+", label: "Students supported since 2004" },
  { value: "₹1 lakh+ a day", label: "Provided in educational support" },
  { value: "24 states", label: "Where Aaghaz supports students" },
  { value: "550+", label: "Schools & colleges with Aaghaz-supported students" },
  { value: "350+", label: "Students who became doctors, engineers & lawyers" },
  { value: "90+", label: "Named & memorial scholarships created" },
];

export const StatsSection = () => (
  <Section aria-labelledby="by-the-numbers" tone="cream">
    <SectionHeading
      id="by-the-numbers"
      eyebrow="Our Impact"
      title="Aaghaz by the Numbers"
      intro="From ₹2,000 and one student in 2004 to thousands of students across India."
    />

    <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="border-t border-ink/15 pt-6">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-4xl font-semibold text-terracotta md:text-5xl">{stat.value}</dd>
          <dd className="mt-2 text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

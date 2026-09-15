import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    title: "Apply",
    description:
      "Students seeking financial assistance submit an application through the Aaghaz website, along with the required information and supporting documents.",
  },
  {
    title: "Verify",
    description:
      "Applications that meet our initial criteria are assigned to Aaghaz volunteers for verification. Two volunteers visit the student and their family to assess their circumstances, review the information provided and, where necessary, verify details with the school or college.",
  },
  {
    title: "Review",
    description:
      "The volunteers submit their findings to the Aaghaz committee. Each case is reviewed individually, taking into account financial need, academic record and other relevant circumstances. The committee decides whether assistance should be approved, how much support is required and for how long.",
  },
  {
    title: "Support & Follow Up",
    description:
      "Where possible, approved fees are paid directly to the school or college rather than to the student or family. Our volunteers remain in contact with students, follow their progress and report any significant change in their circumstances.",
  },
];

export const HowItWorks = () => (
  <Section aria-labelledby="how-we-work" tone="ink">
    <SectionHeading
      id="how-we-work"
      eyebrow="How We Work"
      title="Every application is checked before support is approved"
      intro="Aaghaz follows a clear process to assess need, verify information and make sure educational assistance is used for its intended purpose."
      onDark
    />

    <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t border-cream/20 pt-6">
          <span className="font-display text-lg text-sand-light" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-cream">{step.title}</h3>
          <p className="mt-3 text-cream/75">{step.description}</p>
        </li>
      ))}
    </ol>

    <p className="mt-14 text-cream/75">We follow this process for every student without exception.</p>
  </Section>
);

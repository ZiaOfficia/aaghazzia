import type { ServiceData } from "../../data/servicesData";
import { Section } from "../ui/Section";
import { ButtonLink } from "../ui/ButtonLink";

/**
 * Short summary shown near the top of each programme page.
 * Memorial Scholarship has its own longer introduction.
 */
export const ServiceHighlight = ({ service }: { service: ServiceData }) => {
  if (service.id === "memorial-scholarship") {
    return <MemorialScholarshipHighlight />;
  }
  return <ServiceSummary service={service} />;
};

const MemorialScholarshipHighlight = () => (
  <Section aria-labelledby="memorial-highlight" tone="sand">
    <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <p className="mb-3 text-sm font-semibold text-terracotta">A Way to Remember</p>
        <h2 id="memorial-highlight" className="font-display text-3xl font-semibold sm:text-4xl">
          Remember a loved one. Help a child learn.
        </h2>
        <div className="mt-6 space-y-4 text-lg text-muted">
          <p>
            Aaghaz Foundation runs <strong className="font-semibold text-ink">more than 80 memorial scholarships</strong> in India. We give nearly{" "}
            <strong className="font-semibold text-ink">Rs 1 crore every year</strong> to help hundreds of poor students. Many of these students are orphans or come from families struggling to pay for school.
          </p>
          <p>
            We start many of these scholarships during our annual Ramadan campaign,{" "}
            <strong className="font-semibold text-ink">&ldquo;30 Days | 30 Plus Scholarships&rdquo;</strong>. Families and donors fund them to remember their loved ones and support good students.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink to="#enquiry">Start a Memorial Scholarship</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Talk to us
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-muted">Minimum amount per year: Rs 25,000</p>
      </div>

      <figure className="border-l-2 border-terracotta pl-6 lg:col-span-5">
        <blockquote className="font-display text-xl italic leading-relaxed md:text-2xl">
          &ldquo;Starting a scholarship is a beautiful way to remember someone special who has passed away.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-muted">
          With our Memorial Scholarship Program, you can start a scholarship in the name of a loved one who has passed away. This helps poor students continue their education and keeps your loved one's memory alive through their success.
        </figcaption>
      </figure>
    </div>
  </Section>
);

const getBriefDescription = (service: ServiceData) => {
  switch (service.id) {
    case "student-aid":
      return "Aaghaz began in Lucknow in 2004 with ₹2,000 and one student who needed help continuing his education. Today, we support students across India with school and college fees and other educational costs. We believe helping more young people complete their education is one of the most practical ways to build a stronger India.";
    case "scholarships":
      return "Annual, merit-cum-means scholarships for students across India. Every scholarship is awarded after verified pre-scholarship surveys.";
    case "financial-assistance":
      return "Timely financial assistance for families facing unexpected crises. One-time or ongoing support to prevent educational disruption.";
    case "become-volunteer":
      return "Our volunteers help us verify student applications, stay in touch with students and provide guidance and mentoring. You can volunteer in person or support our work remotely.";
    case "join-as-donor":
      return "Register as an Aaghaz donor and choose how you would like to contribute. You can make a one-time contribution, give regularly or support a verified student directly through our donor platform.";
    case "launch-scholarship":
      return "Set up a scholarship in your name or in honour or memory of someone important to you. You decide the broad purpose and budget, and we help structure the scholarship and identify eligible students.";
    default:
      return null;
  }
};

const ServiceSummary = ({ service }: { service: ServiceData }) => {
  const brief = getBriefDescription(service);
  if (!brief) return null;

  return (
    <Section aria-label={`${service.title} summary`} tone="sand" spacing="compact">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-3xl font-display text-2xl leading-relaxed md:text-[1.75rem]">{brief}</p>
        <ButtonLink to="/contact" variant="secondary" className="shrink-0">
          Get in touch
        </ButtonLink>
      </div>
    </Section>
  );
};

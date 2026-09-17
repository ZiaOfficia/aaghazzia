import { Link } from "react-router-dom";
import { actionImages } from "../../data/imageAssets";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { FitImage } from "../ui/FitImage";

const blocks = [
  {
    title: "Start a Scholarship",
    subtitle: "Create something that lasts",
    text: "Set up a scholarship in your name or in honour or memory of someone important to you. You decide the broad purpose and budget, and we help structure the scholarship and identify eligible students.",
    image: actionImages.launchScholarship,
    link: "/services/launch-scholarship",
  },
  {
    title: "Become a Donor",
    subtitle: "Support a student",
    text: "Register as an Aaghaz donor and choose how you would like to contribute. You can make a one-time contribution, give regularly or support a verified student directly through our donor platform.",
    image: actionImages.joinDonor,
    link: "/services/join-as-donor",
  },
  {
    title: "Become a Volunteer",
    subtitle: "Give your time",
    text: "Our volunteers help us verify student applications, stay in touch with students and provide guidance and mentoring. You can volunteer in person or support our work remotely.",
    image: actionImages.becomeVolunteer,
    link: "/services/become-volunteer",
  },
];

export const ActionBlocksSection = () => (
  <Section aria-labelledby="how-you-can-help" tone="sand">
    <SectionHeading
      id="how-you-can-help"
      eyebrow="How You Can Help"
      title="Choose how you would like to help"
      intro="Support a student, create a scholarship or give your time. There are different ways to be part of Aaghaz."
    />

    <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
      {blocks.map((block) => (
        <article key={block.title} className="flex flex-col">
          <div className="aspect-[3/2] overflow-hidden rounded-md bg-cream">
            <FitImage src={block.image} alt="" loading="lazy" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold">{block.title}</h3>
          <p className="mt-1 font-semibold text-terracotta">{block.subtitle}</p>
          <p className="mt-4 flex-1 text-muted">{block.text}</p>
          <Link
            to={block.link}
            className="mt-5 inline-block self-start font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
          >
            Learn more<span className="sr-only"> about how to {block.title.toLowerCase()}</span>
          </Link>
        </article>
      ))}
    </div>
  </Section>
);

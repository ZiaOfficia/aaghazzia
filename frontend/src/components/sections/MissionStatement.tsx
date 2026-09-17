import { Link } from "react-router-dom";
import { missionImages } from "../../data/imageAssets";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { FitImage } from "../ui/FitImage";

const pillars = [
  {
    word: "Educate",
    sub: "Make education possible",
    body: "We pay school and college fees and help with books, uniforms, exam costs and other essentials. We also run a counselling and computer centre. The aim is simple: no student should have to stop studying because their family cannot afford it.",
    image: missionImages.educate,
    link: "/services",
  },
  {
    word: "Empower",
    sub: "Support them along the way",
    body: "Our support does not end when the fees are paid. Volunteers stay in touch with students, track how they are doing and step in when they need help. We also connect them with mentors who can offer guidance through their education and beyond.",
    image: missionImages.empower,
    link: "/success-stories",
  },
  {
    word: "Elevate",
    sub: "See where they go",
    body: "Many Aaghaz students are the first in their families to graduate and some have gone on to leading universities and successful careers. We stay connected with former students and encourage them to mentor, volunteer or support another student, keeping the circle going.",
    image: missionImages.elevate,
    link: "/about",
  },
];

export const MissionStatement = () => (
  <Section aria-labelledby="why-we-exist" tone="sand">
    <SectionHeading
      id="why-we-exist"
      eyebrow="Why We Exist"
      title="Educate. Empower. Elevate."
      intro="Three simple ideas have guided Aaghaz since 2004. Here is what they mean to us."
    />

    <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
      {pillars.map((pillar) => (
        <article key={pillar.word}>
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-cream">
            <FitImage src={pillar.image} alt="" loading="lazy" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold">{pillar.word}</h3>
          <p className="mt-1 font-semibold text-terracotta">{pillar.sub}</p>
          <p className="mt-4 text-muted">{pillar.body}</p>
          <Link to={pillar.link} className="mt-5 inline-block font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta">
            See how we do this
          </Link>
        </article>
      ))}
    </div>
  </Section>
);

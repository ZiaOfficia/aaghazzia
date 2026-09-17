import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialImages } from "../../data/imageAssets";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/ButtonLink";
import { FitImage } from "../ui/FitImage";

interface Story {
  image: string;
  quote: string;
  author: string;
  role: string;
}

const stories: Story[] = [
  {
    image: testimonialImages.yasminParveen,
    author: "Yasmin Parveen",
    role: "Advocate",
    quote:
      "There was a time when completing my law degree seemed very difficult because I simply did not have the financial means. I received support throughout my five-year course, including a monthly stipend, and even help with medical treatment when I fell ill. I was able to finish my studies and become an advocate. It was a dream I had worked towards for years, and today I am living it.",
  },
  {
    image: testimonialImages.aamirHannan,
    author: "Aamir Hannan",
    role: "Software Engineer",
    quote:
      "I received the Coding Ninjas course through Aaghaz at a stage when I wanted to improve my coding but did not have access to the kind of training I needed. The course helped me build both my skills and confidence. I recently received a Software Engineer offer of around ₹23 LPA. For me, that offer is much more than a salary package. It shows how far I have been able to come.",
  },
  {
    image: testimonialImages.irtiqaKhan,
    author: "Irtiqa Khan",
    role: "Clinical Research Coordinator, Anveshna Healthcare",
    quote:
      "I wanted to build a career in clinical research, and the support I received during my Master’s helped me complete my studies and pursue that goal. In February 2026, I joined Lady Hardinge Medical College as a Clinical Research Coordinator in the Department of Psychiatry. I now manage site activities and mentor interns. Being able to work in the field I studied for and become independent is something I had always wanted.",
  },
  {
    image: testimonialImages.mominulIslam,
    author: "Dr. Mominul Islam",
    role: "Paediatric Surgery, Medical College Kolkata",
    quote:
      "Becoming a doctor was my dream, but getting through medical college required far more than ambition. I received support throughout my MBBS for college and hostel fees, books and even my monthly expenses. That meant I could concentrate on my studies instead of constantly worrying about how the next fee would be paid. Today, I am a doctor working in paediatric surgery at Medical College Kolkata, doing the work I once hoped I would get the chance to do.",
  },
  {
    image: testimonialImages.shibaSami,
    author: "Dr. Shiba Sami",
    role: "BDS, Government Dental College, Bengaluru",
    quote:
      "I always wanted to become a dentist, but pursuing a professional degree can be difficult when finances are limited. The support I received helped me continue my BDS at a government dental college in Bengaluru without that uncertainty hanging over my studies. I completed my degree and became a dentist. Looking back, what mattered most was having support at a stage when giving up would have been much easier than carrying on.",
  },
  {
    image: testimonialImages.imranMustafaMalik,
    author: "Dr. Imran Mustafa Malik",
    role: "PG Resident, Anaesthesiology & Critical Care, GMC Srinagar",
    quote:
      "My family was struggling to meet the educational expenses of all of us, and there was only so much they could manage. The scholarship came when I needed it most and eased a burden that could easily have interrupted my studies. I was able to continue medical college and become a doctor. Today, as a postgraduate resident in Anaesthesiology and Critical Care at GMC Srinagar, I am pursuing the career I had once only hoped would be possible.",
  },
];

export const TestimonialsSection = ({ tone = "cream" }: { tone?: "cream" | "sand" }) => {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  const go = (next: number) => setIndex((next + stories.length) % stories.length);

  return (
    <Section aria-labelledby="stories-heading" tone={tone}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="stories-heading"
          eyebrow="Success Stories"
          title="Stories from Aaghaz"
          intro="Meet some of the students we have supported and read about the people and work behind Aaghaz."
        />
        <ButtonLink to="/success-stories" variant="text">
          Read more stories
        </ButtonLink>
      </div>

      <div className="mt-14 grid items-start gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-ink/5">
            <FitImage
              key={story.image}
              src={story.image}
              alt={`Portrait of ${story.author}`}
            />
          </div>
        </div>

        <figure className="md:col-span-8" aria-live="polite">
          <blockquote className="font-display text-xl leading-relaxed md:text-2xl">
            “{story.quote}”
          </blockquote>
          <figcaption className="mt-8">
            <span className="block text-lg font-semibold">{story.author}</span>
            <span className="block text-muted">{story.role}</span>
          </figcaption>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous story"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next story"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <span className="ml-2 text-sm text-muted">
              {index + 1} of {stories.length}
            </span>
          </div>
        </figure>
      </div>
    </Section>
  );
};

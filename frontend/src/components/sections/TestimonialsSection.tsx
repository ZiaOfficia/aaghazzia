import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { testimonialImages } from "../../data/imageAssets";

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

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % stories.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 12000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  const story = stories[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      className="relative py-12 md:py-28 px-4 md:px-6 bg-mesh-rose overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <span className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="block w-8 h-px bg-primary" />
            Success Stories
            <span className="block w-8 h-px bg-primary" />
          </p>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-accent mb-4 leading-tight">
            Stories from Aaghaz
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
            Meet some of the students we have supported and read about the people and work behind Aaghaz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image side */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/40 rounded-tl-[3rem] rounded-br-[3rem]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={story.image}
                  alt={story.author}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Author label overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,15,15,0.92) 0%, transparent 100%)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`label-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="font-display text-2xl font-bold">
                      {story.author}
                    </p>
                    <p className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mt-1 leading-relaxed">
                      {story.role}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Quote side */}
          <div className="lg:col-span-7 relative">
            <Quote
              size={64}
              className="absolute -top-8 -left-2 text-primary/15"
              fill="currentColor"
            />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`quote-${index}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <p className="font-display text-lg md:text-xl lg:text-2xl text-accent leading-relaxed italic mb-6 md:mb-8">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls and progress */}
            <div className="flex items-center justify-between gap-6 pt-6 border-t border-primary/15">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Previous story"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Next story"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slim progress + counter */}
              <div className="flex-1 flex items-center gap-4 max-w-xs">
                <span className="font-display text-2xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-primary/20 relative overflow-hidden">
                  <motion.span
                    key={`bar-${index}-${isPaused}`}
                    initial={{ width: "0%" }}
                    animate={{ width: isPaused ? "30%" : "100%" }}
                    transition={{ duration: isPaused ? 0.3 : 12, ease: "linear" }}
                    className="absolute left-0 top-0 h-full bg-primary"
                  />
                </div>
                <span className="text-xs text-text-muted">
                  / {String(stories.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Quick-jump dots */}
            <div className="mt-5 flex gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? "bg-primary w-12" : "bg-primary/30 w-4 hover:bg-primary/60"
                  }`}
                  aria-label={`Story ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import clsx from "clsx";
import { homeHeroSections as screens } from "../../data/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

const INTERVAL_MS = 8000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);

  const go = (next: number) => setIndex((next + screens.length) % screens.length);

  useEffect(() => {
    if (!playing || hovered) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % screens.length), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [index, playing, hovered]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="About Aaghaz"
      className="bg-cream"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
        {/* Text */}
        <div className="grid lg:col-span-6 [&>*]:col-start-1 [&>*]:row-start-1">
          {screens.map((screen, i) => {
            const active = i === index;
            const Heading = i === 0 ? "h1" : "h2";
            return (
              <div
                key={screen.label}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${screens.length}`}
                aria-hidden={!active}
                inert={!active}
                className={clsx(
                  active
                    ? "opacity-100 transition-opacity duration-500"
                    : "pointer-events-none opacity-0",
                )}
              >
                <p className="mb-4 text-sm font-semibold text-terracotta">{screen.label}</p>
                <Heading className="font-display text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
                  {screen.heading}
                </Heading>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                  {screen.body}
                </p>
                {screen.source && (
                  <p className="mt-3 max-w-xl text-sm italic text-muted">{screen.source}</p>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
                  {screen.ctas.map((cta) => (
                    <ButtonLink key={cta.label} to={cta.to} variant={cta.variant === "primary" ? "primary" : "secondary"}>
                      {cta.label}
                    </ButtonLink>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Image */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-sand">
            {screens.map((screen, i) => (
              <img
                key={screen.label}
                src={screen.image}
                alt={i === index ? screen.imageAlt : ""}
                aria-hidden={i !== index}
                loading={i === 0 ? "eager" : "lazy"}
                className={clsx(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 lg:col-span-12">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous screen"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next screen"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 hover:border-ink"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          <div className="ml-2 flex items-center gap-1">
            {screens.map((screen, i) => (
              <button
                key={screen.label}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show screen ${i + 1}: ${screen.label}`}
                aria-current={i === index}
                className="flex h-11 w-8 items-center justify-center"
              >
                <span
                  className={clsx(
                    "block h-1 rounded-full transition-all",
                    i === index ? "w-7 bg-terracotta" : "w-3 bg-ink/25",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause rotation" : "Play rotation"}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-ink"
          >
            {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>
    </section>
  );
};

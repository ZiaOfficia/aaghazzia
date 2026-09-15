import type { ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Background tone. */
  tone?: "cream" | "sand" | "ink" | "white";
  /** Vertical rhythm. */
  spacing?: "default" | "compact";
  width?: "default" | "narrow";
  "aria-labelledby"?: string;
}

const tones = {
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  ink: "bg-ink text-cream",
  white: "bg-white text-ink",
};

export const Section = ({
  children,
  id,
  className,
  tone = "cream",
  spacing = "default",
  width = "default",
  ...rest
}: SectionProps) => (
  <section
    id={id}
    aria-labelledby={rest["aria-labelledby"]}
    className={clsx(
      tones[tone],
      spacing === "compact" ? "py-12 md:py-16" : "py-16 md:py-24",
      className,
    )}
  >
    <Container width={width}>{children}</Container>
  </section>
);

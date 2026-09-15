import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "text" | "light" | "inverse";

/** Shared button classes used by ButtonLink and the <button> component. */
export const buttonStyles = (variant: ButtonVariant = "primary", className?: string) =>
  clsx(
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200",
    variant !== "text" && "min-h-12 rounded-md px-6 py-3 text-base",
    variant === "primary" && "bg-terracotta text-white hover:bg-terracotta-dark",
    variant === "secondary" && "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
    variant === "light" && "border border-cream/50 text-cream hover:border-cream hover:bg-cream/10",
    variant === "inverse" && "bg-cream text-ink hover:bg-white",
    variant === "text" &&
      "min-h-11 text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta",
    className,
  );

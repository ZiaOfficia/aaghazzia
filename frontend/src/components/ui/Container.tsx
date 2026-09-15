import type { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** "default" = 1200px, "narrow" = readable article width. */
  width?: "default" | "narrow";
}

export const Container = ({ children, className, width = "default" }: ContainerProps) => (
  <div
    className={clsx(
      "mx-auto w-full px-5 sm:px-8",
      width === "narrow" ? "max-w-3xl" : "max-w-[1200px]",
      className,
    )}
  >
    {children}
  </div>
);

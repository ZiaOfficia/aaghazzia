import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "../ui/buttonStyles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  withIcon?: boolean;
  icon?: React.ElementType;
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  withIcon = false,
  icon: Icon,
  children,
  ...props
}: ButtonProps) => {
  const mapped = variant === "outline" ? "secondary" : variant;

  return (
    <button
      className={clsx(
        buttonStyles(mapped),
        size === "sm" && variant !== "text" && "min-h-10 px-4 py-2 text-sm",
        className,
      )}
      {...props}
    >
      {children}
      {Icon ? (
        <Icon size={18} aria-hidden="true" />
      ) : (
        withIcon && <ArrowRight size={18} aria-hidden="true" />
      )}
    </button>
  );
};

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonStyles, type ButtonVariant } from "./buttonStyles";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

/** Router link styled as a button. External URLs and #anchors render a plain anchor. */
export const ButtonLink = ({ to, children, variant = "primary", className, onClick }: ButtonLinkProps) => {
  const classes = buttonStyles(variant, className);
  if (/^(https?:|mailto:|tel:|#)/.test(to)) {
    return (
      <a href={to} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
};

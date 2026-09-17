import { Fragment } from "react";

/** Names that should always link to their official websites when they appear in copy. */
const namedLinks: Record<string, string> = {
  "Mazhar Farooqui": "https://mazharfarooqui.com/",
  NEIEA: "https://neiea.org/partners/institutions",
};

const pattern = new RegExp(`(${Object.keys(namedLinks).join("|")})`, "g");

const linkClass =
  "font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta";

/** Renders plain text, turning mentions of Mazhar Farooqui and NEIEA into external links. */
export const LinkedText = ({ text }: { text: string }) => (
  <>
    {text.split(pattern).map((part, i) =>
      namedLinks[part] ? (
        <a key={i} href={namedLinks[part]} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {part}
        </a>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    )}
  </>
);

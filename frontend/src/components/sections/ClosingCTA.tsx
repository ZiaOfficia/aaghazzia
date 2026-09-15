import { homeHeroSections } from "../../data/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

// Reuses the client's "You Can Help" screen copy and buttons.
const cta = homeHeroSections[homeHeroSections.length - 1];

export const ClosingCTA = () => (
  <section aria-labelledby="closing-cta" className="bg-terracotta text-white">
    <Container className="py-16 md:py-20">
      <div className="max-w-3xl">
        <h2 id="closing-cta" className="font-display text-3xl font-semibold sm:text-4xl md:text-[2.75rem]">
          {cta.heading}
        </h2>
        <p className="mt-5 text-lg text-white/90">{cta.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {cta.ctas.map((item, i) => (
            <ButtonLink key={item.label} to={item.to} variant={i === 0 ? "inverse" : "light"}>
              {item.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

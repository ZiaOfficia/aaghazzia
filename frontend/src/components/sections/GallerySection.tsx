import { galleryImages } from "../../data/imageAssets";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/ButtonLink";

export const GallerySection = () => (
  <Section id="gallery" aria-labelledby="gallery-heading" tone="cream">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        id="gallery-heading"
        eyebrow="Gallery"
        title="Photo Gallery"
        intro="More than two decades of Aaghaz, in pictures."
      />
      <ButtonLink to="/gallery" variant="text">
        View the full gallery
      </ButtonLink>
    </div>

    <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {galleryImages.map((src, i) => (
        <li key={src} className="aspect-square overflow-hidden rounded-md bg-sand">
          <img
            src={src}
            alt={`Aaghaz Foundation photo ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  </Section>
);

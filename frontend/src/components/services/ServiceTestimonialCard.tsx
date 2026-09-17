import { FitImage } from "../ui/FitImage";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

export const ServiceTestimonialCard = ({ quote, author, location, image }: TestimonialCardProps) => (
  <figure className="border-t border-ink/15 pt-6">
    <blockquote className="font-display text-xl leading-relaxed">“{quote}”</blockquote>
    <figcaption className="mt-6 flex items-center gap-4">
      {image && (
        <FitImage src={image} className="h-14 w-14 shrink-0 rounded-md" />
      )}
      <span>
        <span className="block font-semibold">{author}</span>
        <span className="block text-sm text-muted">{location}</span>
      </span>
    </figcaption>
  </figure>
);

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { SEO } from "../components/common/SEO";
import { ContactSection } from "../components/sections/ContactSection";
import { ServiceGalleryGrid } from "../components/services";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";

// Placeholder YouTube ID used before real films were added. Films that still
// use it are hidden. Replace `id` with the real YouTube video ID to show a film.
const PLACEHOLDER_VIDEO_ID = "dQw4w9WgXcQ";

// Aaghaz Foundation — featured films
const videoGallery = [
  {
    id: PLACEHOLDER_VIDEO_ID,
    title: "20 Years of Aaghaz — A short film",
    thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: PLACEHOLDER_VIDEO_ID,
    title: "Inside the LCGC, Lucknow",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: PLACEHOLDER_VIDEO_ID,
    title: "How a pre-scholarship survey works",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: PLACEHOLDER_VIDEO_ID,
    title: "Rahmani 30 — Cohort highlights",
    thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: PLACEHOLDER_VIDEO_ID,
    title: "Donor stories — A memorial scholarship",
    thumbnail: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
  },
];

// Aaghaz Foundation — gallery images (from the field)
const imageGallery = [
  "https://loremflickr.com/900/600/india,student/all?lock=2001",
  "https://loremflickr.com/900/600/india,orphan/all?lock=2002",
  "https://loremflickr.com/900/600/india,school/all?lock=2003",
  "https://loremflickr.com/900/600/india,children/all?lock=2004",
  "https://loremflickr.com/900/600/india,education/all?lock=2005",
  "https://loremflickr.com/900/600/india,classroom/all?lock=2006",
  "https://loremflickr.com/900/600/india,orphanage/all?lock=2007",
  "https://loremflickr.com/900/600/india,teacher/all?lock=2008",
  "https://loremflickr.com/900/600/india,student/all?lock=2009",
  "https://loremflickr.com/900/600/india,orphan/all?lock=2010",
  "https://loremflickr.com/900/600/india,school/all?lock=2011",
  "https://loremflickr.com/900/600/india,children/all?lock=2012",
  "https://loremflickr.com/900/600/india,education/all?lock=2013",
  "https://loremflickr.com/900/600/india,classroom/all?lock=2014",
  "https://loremflickr.com/900/600/india,orphanage/all?lock=2015",
  "https://loremflickr.com/900/600/india,teacher/all?lock=2016",
  "https://loremflickr.com/900/600/india,student/all?lock=2017",
  "https://loremflickr.com/900/600/india,children/all?lock=2018",
];

const films = videoGallery.filter((v) => v.id !== PLACEHOLDER_VIDEO_ID);

export const GalleryPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedVideo && !dialog.open) dialog.showModal();
    if (!selectedVideo && dialog.open) dialog.close();
  }, [selectedVideo]);

  return (
    <>
      <SEO
        title="Photo Gallery — Aaghaz Foundation"
        description="Photographs from the field — Aaghaz Foundation's scholarship students, the LCGC learning centre in Lucknow, Rahmani 30 cohort and volunteer work across India."
      />

      <PageHeader eyebrow="Gallery" title="Photo Gallery" intro="More than two decades of Aaghaz, in pictures." />

      <Section aria-label="Photos" tone="cream" className="!pt-0">
        <ServiceGalleryGrid images={imageGallery} title="Aaghaz Foundation" limit={imageGallery.length} />
      </Section>

      {films.length > 0 && (
        <Section aria-labelledby="films-heading" tone="sand">
          <SectionHeading
            id="films-heading"
            title="Films & Stories"
            intro="Short videos about our students, volunteers, donors, and how Aaghaz works."
          />
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {films.map((film) => (
              <li key={film.id + film.title}>
                <button type="button" onClick={() => setSelectedVideo(film.id)} className="group block w-full text-left">
                  <div className="aspect-video overflow-hidden rounded-md bg-cream">
                    <img loading="lazy" src={film.thumbnail} alt="" className="h-full w-full object-cover" />
                  </div>
                  <span className="mt-4 block font-display text-xl font-semibold group-hover:text-terracotta">
                    {film.title}
                  </span>
                  <span className="mt-1 block text-muted">A short video showing the difference your support makes.</span>
                </button>
              </li>
            ))}
          </ul>

          <dialog
            ref={dialogRef}
            onClose={() => setSelectedVideo(null)}
            className="m-auto w-[92vw] max-w-5xl bg-transparent p-0 backdrop:bg-ink/90"
          >
            {selectedVideo && (
              <div className="relative aspect-video">
                <iframe
                  className="h-full w-full rounded-md"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Aaghaz Foundation video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video"
                  className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-md bg-ink text-cream"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>
            )}
          </dialog>
        </Section>
      )}

      <ContactSection />
    </>
  );
};

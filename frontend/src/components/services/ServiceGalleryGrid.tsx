import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { getOptimizedImage } from "../../utils/imageUtils";

interface ServiceGalleryGridProps {
  images: string[];
  title?: string;
}

export const ServiceGalleryGrid = ({ images, title = "Programme" }: ServiceGalleryGridProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.slice(0, 6).map((img, idx) => (
          <li key={img}>
            <button
              type="button"
              onClick={() => setSelected(img)}
              className="block aspect-square w-full overflow-hidden rounded-md bg-sand"
              aria-label={`Open photo ${idx + 1} of ${title}`}
            >
              <img
                loading="lazy"
                decoding="async"
                src={getOptimizedImage(img, 800)}
                alt=""
                className="h-full w-full object-cover transition-opacity hover:opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === dialogRef.current && setSelected(null)}
        className="m-auto max-h-[92vh] max-w-[92vw] bg-transparent p-0 backdrop:bg-ink/90"
      >
        {selected && (
          <div className="relative">
            <img src={selected} alt={`${title} photo`} className="max-h-[88vh] max-w-[92vw] rounded-md object-contain" />
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close photo"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-md bg-ink/80 text-cream hover:bg-ink"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
};

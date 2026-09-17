import clsx from "clsx";

interface FitImageProps {
  src: string;
  alt?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  className?: string;
  imgClassName?: string;
}

/**
 * Shows the whole photo without cropping. The frame keeps its shape; any space
 * around the photo is filled with a soft, blurred copy of the same image.
 */
export const FitImage = ({ src, alt = "", loading = "lazy", decoding = "async", className, imgClassName }: FitImageProps) => (
  <span className={clsx("relative block h-full w-full overflow-hidden", className)}>
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading={loading}
      decoding={decoding}
      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
    />
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={clsx("relative h-full w-full object-contain", imgClassName)}
    />
  </span>
);

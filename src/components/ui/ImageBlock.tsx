import type { ImgHTMLAttributes } from "react";

type ImageLoading = "eager" | "lazy";

interface ImageBlockProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  loading?: ImageLoading;
  ratio?: "square" | "portrait" | "landscape";
}

const ratioStyles = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

function ImageBlock({ alt, className = "", loading = "lazy", ratio = "portrait", ...props }: ImageBlockProps) {
  return (
    <div className={`overflow-hidden rounded-bendjo-lg bg-kraft/15 ${ratioStyles[ratio]}`}>
      <img
        alt={alt}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
}

export default ImageBlock;

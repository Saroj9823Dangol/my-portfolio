import type { ImageProps } from "next/image";
import Image from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "quality" | "loading"> {
  priority?: boolean;
}

export function OptimizedImage({
  priority = false,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      quality={priority ? 90 : 75}
      loading={priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
    />
  );
}

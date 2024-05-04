import NextImage from "next/image";

interface ImageProps {
  readonly alt: string;
  readonly className: string;
  readonly height: number;
  readonly isPriority?: boolean;
  readonly isUnoptimized?: boolean;
  readonly src: string;
  readonly width: number;
}

export const Image = ({
  alt,
  className,
  height,
  isPriority = false,
  isUnoptimized = false,
  src,
  width,
}: ImageProps) => {
  return (
    <NextImage
      alt={alt}
      className={className}
      height={height}
      priority={isPriority}
      src={src}
      unoptimized={isUnoptimized}
      width={width}
    />
  );
};

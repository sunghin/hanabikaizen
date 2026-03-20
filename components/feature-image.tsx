import Image from "next/image";

type FeatureImageContent = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function FeatureImage({
  image
}: Readonly<{
  image: FeatureImageContent;
}>) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-black">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-auto w-full object-cover"
      />
    </section>
  );
}

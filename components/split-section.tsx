import Image from "next/image";

type SplitSectionContent = {
  id: string;
  text: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageFirst: boolean;
};

export function SplitSection({
  section
}: Readonly<{
  section: SplitSectionContent;
}>) {
  return (
    <section
      id={section.id}
      className="grid gap-0 overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.03)] md:grid-cols-2"
    >
      <div className={section.imageFirst ? "order-1" : "order-2"}>
        <Image
          src={section.image}
          alt={section.imageAlt}
          width={section.imageWidth}
          height={section.imageHeight}
          className="h-full w-full object-cover"
        />
      </div>

      <div className={`flex items-center p-8 sm:p-12 ${section.imageFirst ? "order-2" : "order-1"}`}>
        <p className="max-w-[34rem] text-xl leading-9 font-medium tracking-[-0.02em] text-white sm:text-[1.75rem] sm:leading-[1.55]">
          {section.text}
        </p>
      </div>
    </section>
  );
}

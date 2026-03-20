type HeroContent = {
  intro: string;
  headline: string;
  primaryLink: {
    label: string;
    href: string;
  };
  supportingText: string;
};

export function Hero({ content }: Readonly<{ content: HeroContent }>) {
  return (
    <section className="flex min-h-[calc(100vh-7.5rem)] flex-col justify-between rounded-[2rem] border border-[color:var(--border)] bg-black px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="space-y-8">
        <p className="max-w-[700px] text-base leading-7 text-[color:var(--muted)] sm:text-lg">
          {content.intro}
        </p>
        <h1 className="max-w-[1320px] text-5xl leading-[0.92] font-medium tracking-[-0.04em] text-white sm:text-7xl lg:text-[7rem]">
          {content.headline}
        </h1>
      </div>

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <a
          href={content.primaryLink.href}
          className="w-fit rounded-full border border-white bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          {content.primaryLink.label}
        </a>
        <p className="text-sm text-[color:var(--muted)] md:text-right">{content.supportingText}</p>
      </div>
    </section>
  );
}

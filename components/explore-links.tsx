import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
  external: boolean;
};

type ExploreContent = {
  label: string;
  links: readonly LinkItem[];
};

export function ExploreLinks({
  content
}: Readonly<{
  content: ExploreContent;
}>) {
  return (
    <section className="rounded-[2rem] border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.03)] px-6 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <p className="text-xs tracking-[0.28em] text-[color:var(--muted)]">{content.label}</p>
        <div className="flex flex-col gap-4 text-xl font-medium text-white sm:text-2xl">
          {content.links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} className="transition hover:text-[color:var(--muted)]">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="transition hover:text-[color:var(--muted)]">
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  external: boolean;
};

type Brand = {
  wordmark: string;
  logo: string;
  logoAlt: string;
};

function NavLinks({ items }: Readonly<{ items: readonly NavItem[] }>) {
  return (
    <>
      {items.map((item) =>
        item.external ? (
          <a key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ) : (
          <Link key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </Link>
        )
      )}
    </>
  );
}

export function SiteHeader({
  brand,
  navigation
}: Readonly<{
  brand: Brand;
  navigation: readonly NavItem[];
}>) {
  return (
    <header id="top" className="sticky top-0 z-20 mx-auto w-full max-w-[1400px] px-4 pt-4 sm:px-8 lg:px-10">
      <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-black/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={brand.logo}
              alt={brand.logoAlt}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
              priority
            />
            <span
              className="text-2xl leading-none text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-roboto-condensed), sans-serif" }}
            >
              {brand.wordmark}
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 text-sm text-[color:var(--muted)] md:flex"
          >
            <NavLinks items={navigation} />
          </nav>

          <details className="relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="cursor-pointer list-none rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-white"
            >
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full mt-3 flex min-w-40 flex-col gap-3 rounded-2xl border border-[color:var(--border)] bg-black p-4 text-sm text-[color:var(--muted)] shadow-2xl"
            >
              <NavLinks items={navigation} />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

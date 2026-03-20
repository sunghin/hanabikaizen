import { Container } from "@/components/container";
import { ExploreLinks } from "@/components/explore-links";
import { FeatureImage } from "@/components/feature-image";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { SplitSection } from "@/components/split-section";
import { siteContent } from "@/content/site-content";

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-medium text-black focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader brand={siteContent.brand} navigation={siteContent.navigation} />
      <Container id="main-content" className="flex flex-col gap-8 pb-12 pt-4">
        <Hero content={siteContent.hero} />
        {siteContent.splitSections.map((section) => (
          <SplitSection key={section.id} section={section} />
        ))}
        <FeatureImage image={siteContent.featureImage} />
        <ExploreLinks content={siteContent.footerNav} />
      </Container>
    </>
  );
}

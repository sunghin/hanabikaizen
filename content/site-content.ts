/**
 * Edit this file to change page text, links, SEO, and image paths.
 * Replace images in /public/assets if you want different artwork.
 */
export const siteContent = {
  seo: {
    siteName: "Hanabi Kaizen",
    title: "hanabi kaisen",
    description:
      "A free, customizable template for Digital Agencies / Designers built with Framer. Interactive experiences for web and mobile by Dawid Pietrasiak.",
    siteUrl: "https://hanabikaizen.com",
    ogImage: "/assets/linear-background.webp",
    favicon: "/assets/brand-mark-blue.png"
  },
  brand: {
    wordmark: "hanabi kaizen",
    logo: "/assets/brand-mark-blue.png",
    logoAlt: "Hanabi Kaizen starburst mark"
  },
  navigation: [
    { label: "About", href: "#about", external: false },
    { label: "Contact", href: "mailto:hello@hanabikaizen.com", external: true }
  ],
  hero: {
    intro:
      "We advise those standing at the nexus of AI and ethics. We ensure the responsible deployment of AI in tools that solve problems for humans.",
    headline: "Exploring humanity in the age of intelligent machines",
    primaryLink: {
      label: "hello@hanabikaizen.com",
      href: "mailto:hello@hanabikaizen.com"
    },
    supportingText: "Scroll down to explore"
  },
  splitSections: [
    {
      id: "about",
      text:
        "We empower our clients to harness the transformative potential of AI while mitigating risks, creating solutions that drive success and contribute to a better future for all.",
      image: "/assets/brand-mark-black.png",
      imageAlt: "Hanabi Kaizen starburst mark on black background",
      imageWidth: 826,
      imageHeight: 1047,
      imageFirst: false
    },
    {
      id: "approach",
      text:
        "Our multidisciplinary approach combines deep technical expertise with a profound understanding of the ethical, social, and legal implications of AI, enabling us to provide comprehensive guidance that navigates the delicate balance between innovation and responsibility.",
      image: "/assets/brand-mark-black.png",
      imageAlt: "Hanabi Kaizen starburst mark on black background",
      imageWidth: 826,
      imageHeight: 1047,
      imageFirst: true
    }
  ],
  featureImage: {
    src: "/assets/linear-background.webp",
    alt: "Linear Background",
    width: 1818,
    height: 1470
  },
  footerNav: {
    label: "EXPLORE",
    links: [
      { label: "About", href: "#about", external: false },
      { label: "Top", href: "#top", external: false },
      { label: "Contact", href: "mailto:hello@hanabikaizen.com", external: true }
    ]
  }
} as const;

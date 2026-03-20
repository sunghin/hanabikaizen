import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["400"]
});

const seo = siteContent.seo;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  icons: {
    icon: seo.favicon,
    shortcut: seo.favicon,
    apple: seo.favicon
  },
  openGraph: {
    type: "website",
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: seo.siteName,
    images: [
      {
        url: seo.ogImage,
        alt: seo.siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoCondensed.variable}`}>{children}</body>
    </html>
  );
}

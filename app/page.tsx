import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LazyBelowFoldSections } from "@/components/lazy-below-fold-sections"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site"
import { SeoContentSection } from "@/components/seo-content-section"

export const metadata: Metadata = {
  title: "Association of Indian Students at USC",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <LazyBelowFoldSections />
      <SeoContentSection />
      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { TicketsForm } from "@/components/tickets-form"
import { LotusIcon, RangoliFull } from "@/components/indian-patterns"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "AIS USC Event Tickets",
  description: "Register for AIS USC event tickets for Diwali, Holi, Navratri and Garba, Ganesha Chaturthi, and other USC Indian student events.",
  keywords: [
    "AIS USC tickets",
    "USC Indian student event tickets",
    "AIS USC event registration",
    "USC Diwali tickets",
    "USC Holi tickets",
    "USC Garba tickets",
  ],
  alternates: {
    canonical: "/tickets",
  },
  openGraph: {
    type: "website",
    url: "/tickets",
    siteName: siteConfig.name,
    title: `AIS USC Event Tickets | ${siteConfig.name}`,
    description: "Register for AIS USC event tickets with your USC ID, USC email, event selection, and waiver.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AIS USC event ticket registration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AIS USC Event Tickets | ${siteConfig.name}`,
    description: "Register for AIS USC events including Diwali, Holi, Garba, and Ganesha Chaturthi.",
    images: ["/opengraph-image"],
  },
}

export default function TicketsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AIS USC Event Tickets",
    url: absoluteUrl("/tickets"),
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: absoluteUrl("/tickets"),
      name: "Register for AIS USC event tickets",
      result: {
        "@type": "Reservation",
        name: "AIS USC event ticket request",
      },
    },
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="absolute inset-0 mandala-pattern opacity-35" />
        <div className="absolute left-1/2 top-24 -translate-x-1/2 opacity-[0.06]">
          <RangoliFull size={820} opacity={1} color="#D4AF37" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <LotusIcon size={22} opacity={0.65} />
              <span className="text-sm uppercase tracking-widest text-primary">AIS USC Events</span>
              <LotusIcon size={22} opacity={0.65} />
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Event Tickets
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Register for AIS USC event tickets for signature Indian student events at USC. Select an event, enter your USC details, review the waiver, and submit a ticket request.
            </p>
          </div>

          <TicketsForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EventDetailPage } from "@/components/event-detail-page"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { getSignatureEvent, signatureEvents } from "@/lib/signature-events"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return signatureEvents.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getSignatureEvent(slug)

  if (!event) {
    return {
      title: "Signature Event | AIS USC",
    }
  }

  return {
    title: `${event.title} at USC`,
    description: event.longDescription,
    alternates: {
      canonical: `/events/${event.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/events/${event.slug}`,
      siteName: siteConfig.name,
      title: `${event.title} at USC | ${siteConfig.name}`,
      description: event.longDescription,
      images: [
        {
          url: event.image,
          width: 1400,
          height: 900,
          alt: `${event.title} hosted by AIS USC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} at USC | ${siteConfig.name}`,
      description: event.description,
      images: [event.image],
    },
  }
}

export default async function SignatureEventPage({ params }: PageProps) {
  const { slug } = await params
  const event = getSignatureEvent(slug)

  if (!event) {
    notFound()
  }

  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.title} - ${event.subtitle}`,
    description: event.longDescription,
    image: [absoluteUrl(event.image)],
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.address,
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        postalCode: "90089",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    url: absoluteUrl(`/events/${event.slug}`),
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
      />
      <Navigation />
      <EventDetailPage event={event} />
      <Footer />
    </main>
  )
}

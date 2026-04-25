import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { absoluteUrl, siteConfig } from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: 'student organization',
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'AIS USC students celebrating Indian culture and community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
  icons: {
    icon: [
      {
        url: '/ais-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/ais-logo.svg',
    apple: '/ais-logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.fullName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl('/ais-logo.svg'),
      sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
      email: siteConfig.social.email,
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Southern California',
        url: 'https://www.usc.edu',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Organization',
        name: siteConfig.fullName,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AIS USC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AIS USC is the Association of Indian Students at the University of Southern California, a student organization focused on Indian culture, community, events, and student support.',
          },
        },
        {
          '@type': 'Question',
          name: 'What events does AIS USC host?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AIS USC hosts signature cultural events including Diwali, Holi, Navratri and Garba, and Ganesha Chaturthi, along with community and new student programming.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can new students get involved with AIS USC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New students can join AIS USC events, watch orientation resources, subscribe to updates, and connect with the executive board to learn about volunteer and leadership opportunities.',
          },
        },
      ],
    },
  ]

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

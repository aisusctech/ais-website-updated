"use client"

import dynamic from "next/dynamic"
import { SectionDivider } from "@/components/indian-patterns"
import {
  BoardSectionSkeleton,
  EventsSectionSkeleton,
  NewsletterSectionSkeleton,
  ResourcesSectionSkeleton,
  SponsorsSectionSkeleton,
  TestimonialsSectionSkeleton,
} from "@/components/section-skeletons"

const EventsSection = dynamic(
  () => import("@/components/events-section").then((mod) => mod.EventsSection),
  {
    ssr: false,
    loading: () => <EventsSectionSkeleton />,
  },
)

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
  {
    ssr: false,
    loading: () => <TestimonialsSectionSkeleton />,
  },
)

const BoardSection = dynamic(
  () => import("@/components/board-section").then((mod) => mod.BoardSection),
  {
    ssr: false,
    loading: () => <BoardSectionSkeleton />,
  },
)

const ResourcesSection = dynamic(
  () => import("@/components/resources-section").then((mod) => mod.ResourcesSection),
  {
    ssr: false,
    loading: () => <ResourcesSectionSkeleton />,
  },
)

const SponsorsSection = dynamic(
  () => import("@/components/sponsors-section").then((mod) => mod.SponsorsSection),
  {
    ssr: false,
    loading: () => <SponsorsSectionSkeleton />,
  },
)

const NewsletterSection = dynamic(
  () => import("@/components/newsletter-section").then((mod) => mod.NewsletterSection),
  {
    ssr: false,
    loading: () => <NewsletterSectionSkeleton />,
  },
)

export function LazyBelowFoldSections() {
  return (
    <>
      <SectionDivider />
      <EventsSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <BoardSection />
      <SectionDivider />
      <ResourcesSection />
      <SectionDivider />
      <SponsorsSection />
      <SectionDivider />
      <NewsletterSection />
    </>
  )
}

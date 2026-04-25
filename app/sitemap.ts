import type { MetadataRoute } from "next"
import { boardTeams } from "@/lib/board-teams"
import { signatureEvents } from "@/lib/signature-events"
import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/tickets"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...signatureEvents.map((event) => ({
      url: absoluteUrl(`/events/${event.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...boardTeams.map((team) => ({
      url: absoluteUrl(`/board/${team.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}

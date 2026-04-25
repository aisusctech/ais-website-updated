import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, CheckCircle2, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { LotusIcon, RangoliFull } from "@/components/indian-patterns"
import { boardTeams, getBoardTeam } from "@/lib/board-teams"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return boardTeams.map((team) => ({ slug: team.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const team = getBoardTeam(slug)

  if (!team) {
    return {
      title: "Board Team | AIS USC",
    }
  }

  return {
    title: `${team.name}`,
    description: team.purpose,
    alternates: {
      canonical: `/board/${team.slug}`,
    },
    openGraph: {
      type: "profile",
      url: `/board/${team.slug}`,
      siteName: siteConfig.name,
      title: `${team.name} | ${siteConfig.name}`,
      description: team.purpose,
      images: [
        {
          url: team.image,
          width: 1200,
          height: 1200,
          alt: `${team.name} at AIS USC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${team.name} | ${siteConfig.name}`,
      description: team.description,
      images: [team.image],
    },
  }
}

export default async function BoardTeamPage({ params }: PageProps) {
  const { slug } = await params
  const team = getBoardTeam(slug)

  if (!team) {
    notFound()
  }

  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${siteConfig.fullName} ${team.name}`,
    url: absoluteUrl(`/board/${team.slug}`),
    description: team.purpose,
    image: absoluteUrl(team.image),
    member: team.members.map((member) => ({
      "@type": "Person",
      name: member,
    })),
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />
      <Navigation />

      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="absolute inset-0 mandala-pattern opacity-30" />

        <div className="absolute left-1/2 top-24 -translate-x-1/2 opacity-[0.07]">
          <RangoliFull size={780} opacity={1} color="#D4AF37" />
        </div>
        <div className="absolute -right-32 bottom-12 opacity-[0.055]">
          <RangoliFull size={520} opacity={1} color="#D4AF37" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Link
            href="/#board"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Executive Board
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className={`relative overflow-hidden rounded-2xl border ${team.borderColor} bg-gradient-to-br ${team.color} p-8 sm:p-10`}>
              <div
                role="img"
                aria-label={team.imageAlt}
                className="absolute inset-0 bg-cover opacity-30 mix-blend-screen saturate-125"
                style={{
                  backgroundImage: `url(${team.image})`,
                  backgroundPosition: team.imagePosition,
                }}
              />
              <p className="sr-only">{team.imageCaption}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-background/86 via-background/62 to-background/90" />
              <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-80`} />

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <LotusIcon size={22} opacity={0.65} />
                  <span className="text-sm uppercase tracking-widest text-primary">
                    Executive Board 2025
                  </span>
                </div>
                <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  {team.name}
                </h1>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {team.description}
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-card/45 p-5 backdrop-blur-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Users size={20} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{team.members.length}</p>
                    <p className="text-sm text-muted-foreground">Board members</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-card/45 p-5 backdrop-blur-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CalendarDays size={20} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">2025</p>
                    <p className="text-sm text-muted-foreground">Leadership term</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/45 p-8 sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-primary/50" />
                <span className="text-sm uppercase tracking-widest text-primary">Purpose</span>
              </div>
              <p className="text-base leading-8 text-foreground/90">
                {team.purpose}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-2xl border border-border bg-card/40 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">Team Members</h2>
              <div className="grid gap-3">
                {team.members.map((member, index) => (
                  <div
                    key={member}
                    className="flex items-center gap-4 rounded-xl border border-border/70 bg-secondary/30 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="font-medium text-foreground">{member}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/40 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">What This Team Does</h2>
              <div className="grid gap-4">
                {team.responsibilities.map((item) => (
                  <div key={item} className="flex gap-4 rounded-xl border border-border/70 bg-secondary/25 p-4">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

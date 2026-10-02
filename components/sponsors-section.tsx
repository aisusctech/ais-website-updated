"use client"

import { motion } from "framer-motion"
import { LotusIcon } from "@/components/indian-patterns"

type Sponsor = {
  name: string
  logo: string
  href: string
  accent: string
  borderColor: string
  glow: string
}

type SponsorSize = "large" | "medium" | "small"

const sponsors: {
  title: Sponsor[]
  ticketing: Sponsor[]
  supporting: Sponsor[]
} = {
  title: [
    {
      name: "WellAway",
      logo: "/sponsors/wellaway.png",
      href: "https://www.wellaway.com/",
      accent: "from-amber-500/25 via-primary/10 to-yellow-500/15",
      borderColor: "border-primary/40",
      glow: "shadow-primary/15",
    },
  ],
  ticketing: [
    {
      name: "Eventreels",
      logo: "/sponsors/eventreels.png",
      href: "https://eventreels.com/",
      accent: "from-violet-500/20 via-primary/10 to-fuchsia-500/15",
      borderColor: "border-violet-400/30",
      glow: "shadow-violet-500/10",
    },
  ],
  supporting: [
    {
      name: "EasyTransfer",
      logo: "/sponsors/easytransfer.png",
      href: "https://www.easytransferglobal.com/",
      accent: "from-blue-500/20 via-cyan-500/10 to-primary/10",
      borderColor: "border-blue-400/30",
      glow: "shadow-blue-500/10",
    },
    {
      name: "BIH",
      logo: "/sponsors/bih.jpg",
      href: "https://linktr.ee/bihevents",
      accent: "from-red-500/20 via-orange-500/10 to-primary/10",
      borderColor: "border-red-400/30",
      glow: "shadow-red-500/10",
    },
  ],
}

function SponsorCard({
  sponsor,
  size,
  index,
}: {
  sponsor: Sponsor
  size: SponsorSize
  index: number
}) {
  const sizeClasses: Record<SponsorSize, string> = {
    large: "w-full max-w-2xl min-h-60 sm:min-h-64",
    medium: "w-full max-w-xl min-h-52",
    small: "w-full max-w-sm min-h-48",
  }

  const logoClasses: Record<SponsorSize, string> = {
  large: "h-24 sm:h-28",
  medium: "h-20 sm:h-24",
  small: "h-16 sm:h-20",
 }
  const logoPanelClasses: Record<SponsorSize, string> = {
  large: "w-full max-w-sm px-6 py-6 sm:px-12 sm:py-7",
  medium: "w-full max-w-xs px-6 py-6 sm:px-10",
  small: "w-full max-w-[240px] px-6 py-5 sm:px-8",
}

  return (
    <motion.a
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`${sizeClasses[size]} group relative flex items-center justify-center overflow-hidden rounded-2xl border ${sponsor.borderColor} bg-gradient-to-br ${sponsor.accent} transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-2xl ${sponsor.glow} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-card/65 to-background/85" />

      <div
        aria-hidden="true"
        className="absolute -right-16 -bottom-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-transform duration-500 group-hover:scale-125"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-5 px-6 py-8 text-center">
        <div
          className={`${logoPanelClasses[size]} flex min-h-28 items-center justify-center rounded-2xl border border-white/20 bg-white shadow-xl shadow-black/20 transition-transform duration-300 group-hover:scale-[1.02]`}
        >
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} sponsor logo`}
            loading="lazy"
            decoding="async"
            className={`${logoClasses[size]} w-full max-w-full object-contain`}          />
        </div>

        <div>
          <p className="text-base font-medium text-foreground">
            {sponsor.name}
          </p>

          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary">
            Visit website
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  )
}

function SponsorTier({
  title,
  sponsors,
  size,
}: {
  title: string
  sponsors: Sponsor[]
  size: SponsorSize
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="mb-8 inline-flex items-center gap-3">
        <div
          aria-hidden="true"
          className="h-px w-10 bg-gradient-to-r from-transparent to-primary/50 sm:w-12"
        />

        <h3 className="text-sm font-medium uppercase tracking-widest text-primary">
          {title}
        </h3>

        <div
          aria-hidden="true"
          className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50 sm:w-12"
        />
      </div>

      <div className="flex flex-wrap items-stretch justify-center gap-6">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={sponsor.name}
            sponsor={sponsor}
            size={size}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 mandala-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <LotusIcon size={22} opacity={0.65} />

            <span className="text-sm uppercase tracking-widest text-primary">
              Our Partners
            </span>

            <LotusIcon size={22} opacity={0.65} />
          </div>

          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Sponsors & Partners
          </h2>

          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            We are grateful to our sponsors and partners who help make our
            events and initiatives possible.
          </p>
        </motion.div>

        <div className="space-y-14 sm:space-y-16">
          <SponsorTier
            title="Title Sponsor"
            sponsors={sponsors.title}
            size="large"
          />

          <SponsorTier
            title="Ticketing Sponsor"
            sponsors={sponsors.ticketing}
            size="medium"
          />

          <SponsorTier
            title="Supporting Sponsors"
            sponsors={sponsors.supporting}
            size="small"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8">
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Interested in Partnering With Us?
            </h3>

            <p className="mb-6 max-w-md text-muted-foreground">
              Join our community of sponsors and help us create unforgettable
              cultural experiences at USC.
            </p>

            <a
              href="mailto:sponsorship@aisusc.org"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Become a Sponsor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
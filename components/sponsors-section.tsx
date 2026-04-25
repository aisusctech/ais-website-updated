"use client"

import { motion } from "framer-motion"
import { LotusIcon } from "@/components/indian-patterns"

const sponsors = {
  premium: [
    {
      name: "gradly",
      level: "Premium Sponsor",
      logo: "/sponsors/gradly.svg",
      accent: "from-blue-500/25 via-primary/10 to-yellow-500/15",
      borderColor: "border-primary/35",
      glow: "shadow-primary/10",
    },
  ],
  bronze: [
    {
      name: "Weee!",
      level: "Bronze Sponsor",
      logo: "/sponsors/weee.svg",
      accent: "from-orange-500/20 via-cyan-500/10 to-blue-500/15",
      borderColor: "border-orange-500/25",
      glow: "shadow-orange-500/10",
    },
  ],
  media: [
    {
      name: "Radio5 Events",
      level: "Media Partner",
      logo: "/sponsors/radio5events.svg",
      accent: "from-zinc-500/20 via-red-500/10 to-primary/10",
      borderColor: "border-zinc-400/25",
      glow: "shadow-zinc-500/10",
    },
  ],
}

type Sponsor = {
  name: string
  level: string
  logo: string
  accent: string
  borderColor: string
  glow: string
}

function SponsorLogo({ sponsor, size = "medium", index }: { sponsor: Sponsor; size?: "large" | "medium" | "small"; index: number }) {
  const sizeClasses = {
    large: "w-full max-w-xl min-h-56 sm:min-h-64",
    medium: "w-full max-w-sm min-h-44",
    small: "w-full max-w-sm min-h-44",
  }

  const logoClasses = {
    large: "h-24 sm:h-28 max-w-[260px]",
    medium: "h-20 max-w-[210px]",
    small: "h-20 max-w-[210px]",
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} relative overflow-hidden rounded-2xl border ${sponsor.borderColor} bg-gradient-to-br ${sponsor.accent} flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-2xl ${sponsor.glow} group`}
    >
      <img
        src={sponsor.logo}
        alt=""
        aria-hidden="true"
        className="absolute -right-8 -bottom-10 h-40 w-40 object-contain opacity-[0.07] blur-[1px] saturate-150 transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/74 via-card/64 to-background/84" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-5 px-8 py-8 text-center">
        <span className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
          {sponsor.level}
        </span>
        <div className="rounded-2xl border border-white/10 bg-white/95 px-7 py-5 shadow-xl shadow-black/20">
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`${logoClasses[size]} w-auto object-contain`}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {sponsor.name}
        </p>
      </div>
    </motion.div>
  )
}

function SponsorTier({ title, sponsors, size }: { title: string; sponsors: Sponsor[]; size: "large" | "medium" | "small" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-3 mb-8">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-sm text-primary tracking-widest uppercase font-medium">
          {title}
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
      </div>
      <div className="flex flex-wrap items-stretch justify-center gap-6">
        {sponsors.map((sponsor, index) => (
          <SponsorLogo key={sponsor.name} sponsor={sponsor} size={size} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mandala-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <LotusIcon size={22} opacity={0.65} />
            <span className="text-sm text-primary tracking-widest uppercase">
              Our Partners
            </span>
            <LotusIcon size={22} opacity={0.65} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sponsors & Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are grateful to our sponsors and partners who help make our events 
            and initiatives possible.
          </p>
        </motion.div>
        
        {/* Sponsor tiers */}
        <div className="space-y-16">
          <SponsorTier title="Premium Sponsor" sponsors={sponsors.premium} size="large" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <SponsorTier title="Bronze Sponsor" sponsors={sponsors.bronze} size="medium" />
            <SponsorTier title="Media Partner" sponsors={sponsors.media} size="small" />
          </div>
        </div>
        
        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Interested in Partnering With Us?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join our community of sponsors and help us create unforgettable 
              cultural experiences at USC.
            </p>
            <a
              href="mailto:sponsorship@aisusc.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Become a Sponsor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

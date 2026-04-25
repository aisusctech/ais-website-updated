"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, DollarSign, Code, Camera, Calendar, Handshake, Heart, Building } from "lucide-react"
import { LotusIcon } from "@/components/indian-patterns"
import { boardTeams, type BoardTeam } from "@/lib/board-teams"

const icons = {
  users: Users,
  dollar: DollarSign,
  code: Code,
  camera: Camera,
  calendar: Calendar,
  handshake: Handshake,
  heart: Heart,
  building: Building,
}

function TeamCard({ team, index }: { team: BoardTeam; index: number }) {
  const Icon = icons[team.icon]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link
        href={`/board/${team.slug}`}
        aria-label={`Open ${team.name} page`}
        className={`relative block h-full p-6 rounded-2xl border ${team.borderColor} bg-gradient-to-br ${team.color} backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-xl cursor-pointer overflow-hidden`}
      >
        {/* Blended team artwork */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover opacity-30 mix-blend-screen saturate-125 transition-all duration-500 group-hover:scale-105 group-hover:opacity-45"
          style={{
            backgroundImage: `url(${team.image})`,
            backgroundPosition: team.imagePosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/82 via-background/62 to-background/88" />
        <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-85`} />
        <span className="sr-only">{team.imageCaption}</span>

        {/* Background decoration */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative z-10 w-14 h-14 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="text-primary" />
        </div>
        
        {/* Content */}
        <h3 className="relative z-10 text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {team.name}
        </h3>
        <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-4">
          {team.description}
        </p>
        
        {/* Members count */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(Math.min(3, team.members.length))].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {team.members.length} members
          </span>
        </div>
        
        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      </Link>
    </motion.div>
  )
}

export function BoardSection() {
  return (
    <section id="board" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />
      <div className="absolute inset-0 mandala-pattern opacity-50" />
      
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
              Leadership
            </span>
            <LotusIcon size={22} opacity={0.65} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Executive Board 2025
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated teams working behind the scenes to create meaningful 
            experiences and build a stronger community.
          </p>
        </motion.div>
        
        {/* Teams grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardTeams.map((team, index) => (
            <TeamCard key={team.id} team={team} index={index} />
          ))}
        </div>
        
        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border">
            <div className="text-center sm:text-left">
              <p className="font-medium text-foreground mb-1">Interested in joining our team?</p>
              <p className="text-sm text-muted-foreground">Applications open each semester</p>
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

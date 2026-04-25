"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { LotusIcon, RangoliFull } from "@/components/indian-patterns"
import { signatureEvents, type SignatureEvent } from "@/lib/signature-events"

function EventCard({ event, index }: { event: SignatureEvent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link
        href={`/events/${event.slug}`}
        aria-label={`Open ${event.title} event page`}
        className={`relative block h-full overflow-hidden rounded-2xl border ${event.borderColor} bg-gradient-to-br ${event.color} p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10`}
      >
        {/* Blended event artwork */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover opacity-35 mix-blend-screen saturate-125 transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundPosition: event.imagePosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/58 to-background/82" />
        <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-80`} />
        <span className="sr-only">{event.imageCaption}</span>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
        </div>
        
        {/* Event number */}
        <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
          {String(index + 1).padStart(2, "0")}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {event.title}
          </h3>
          <p className="text-primary text-sm font-medium tracking-wide mb-4">
            {event.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {event.description}
          </p>
          
          {/* Meta info */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} className="text-primary" />
              <time dateTime={event.startDate}>{event.date}</time>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>{event.location}</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
            <span>View Details</span>
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
        </div>
      </Link>
    </motion.div>
  )
}

export function EventsSection() {
  return (
    <section id="events" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mandala-pattern" />
      {/* Subtle rangoli watermark bottom-right */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.035]">
        <RangoliFull size={500} opacity={1} color="#D4AF37" />
      </div>

      {/* Section content */}
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
              Annual Celebrations
            </span>
            <LotusIcon size={22} opacity={0.65} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Signature Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant tapestry of Indian culture through our carefully curated events 
            that bring together tradition, celebration, and community.
          </p>
        </motion.div>
        
        {/* Events grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {signatureEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want to stay updated on all our events?
          </p>
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
          >
            Subscribe to Newsletter
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

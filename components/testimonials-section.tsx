"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { LotusIcon } from "@/components/indian-patterns"

const testimonials = [
  {
    id: 1,
    quote: "AIS has become an integral part of the USC community, creating a home away from home for students from all backgrounds. Their events showcase the beautiful diversity of Indian culture while bringing our entire campus together.",
    name: "Dr. Yannis Yortsos",
    role: "Dean, USC Viterbi School of Engineering",
    initials: "YY",
    highlight: true,
  },
  {
    id: 2,
    quote: "The Association of Indian Students represents the very best of what student organizations can achieve. Their commitment to cultural celebration, community building, and student support is truly remarkable.",
    name: "Varun Soni",
    role: "Dean of Religious Life, USC",
    initials: "VS",
    highlight: false,
  },
  {
    id: 3,
    quote: "Attending AIS events has been the highlight of my USC experience. From Diwali to Holi, each celebration feels like a piece of home while making unforgettable memories with new friends.",
    name: "Priya Sharma",
    role: "USC Class of 2025",
    initials: "PS",
    highlight: false,
  },
  {
    id: 4,
    quote: "AIS does an incredible job of bridging cultures and creating spaces where everyone feels welcome. Their events are always well-organized, meaningful, and incredibly fun.",
    name: "Michael Chen",
    role: "USC Staff Member",
    initials: "MC",
    highlight: false,
  },
  {
    id: 5,
    quote: "Being part of AIS has given me leadership opportunities, lifelong friendships, and a deeper connection to my heritage. It is more than a club - it is family.",
    name: "Aditya Patel",
    role: "AIS Member, Class of 2026",
    initials: "AP",
    highlight: false,
  },
  {
    id: 6,
    quote: "The energy at AIS events is unmatched. Whether you are Indian or not, you feel the warmth and inclusivity that makes these celebrations special.",
    name: "Sarah Johnson",
    role: "USC Graduate Student",
    initials: "SJ",
    highlight: false,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
        testimonial.highlight
          ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 md:col-span-2"
          : "bg-card/50 border-border hover:border-primary/20"
      }`}
    >
      {/* Quote icon */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
        testimonial.highlight ? "bg-primary/20" : "bg-secondary"
      }`}>
        <Quote size={20} className="text-primary" />
      </div>
      
      {/* Quote text */}
      <p className={`text-foreground/90 leading-relaxed mb-6 ${
        testimonial.highlight ? "text-lg" : "text-sm sm:text-base"
      }`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
          testimonial.highlight 
            ? "bg-primary text-primary-foreground" 
            : "bg-secondary text-foreground"
        }`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="font-medium text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
              Community Voices
            </span>
            <LotusIcon size={22} opacity={0.65} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from the USC community about their experiences with AIS and our celebrations.
          </p>
        </motion.div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

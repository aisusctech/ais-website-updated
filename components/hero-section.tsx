"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { RangoliFull, CornerOrnament } from "@/components/indian-patterns"

function FloatingDiya({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, bottom: "20%" }}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0, 0.8, 0.6, 0.8, 0],
        y: [-20, -150, -300],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Flame */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-saffron via-primary to-primary-foreground rounded-full blur-[1px]"
          animate={{ scaleY: [1, 1.2, 0.9, 1.1, 1], opacity: [0.9, 1, 0.8, 1, 0.9] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        {/* Lamp base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-gradient-to-b from-primary to-gold-dark rounded-full" />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/30 rounded-full blur-xl" />
      </div>
    </motion.div>
  )
}

function RangoliBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* ── Large central rangoli, very faint, slow rotation ── */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      >
        <RangoliFull size={900} opacity={0.055} color="#D4AF37" />
      </motion.div>

      {/* ── Counter-rotating middle layer (just inner portion shown through the outer) ── */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <RangoliFull size={520} opacity={0.04} color="#E07828" />
      </motion.div>

      {/* ── Corner ornaments ── */}
      <div className="absolute top-0 left-0">
        <CornerOrnament size={220} opacity={0.07} flip={false} />
      </div>
      <div className="absolute top-0 right-0">
        <CornerOrnament size={220} opacity={0.07} flip={true} />
      </div>
      <div className="absolute bottom-0 left-0" style={{ transform: "scaleY(-1)" }}>
        <CornerOrnament size={160} opacity={0.05} flip={false} />
      </div>
      <div className="absolute bottom-0 right-0" style={{ transform: "scale(-1, -1)" }}>
        <CornerOrnament size={160} opacity={0.05} flip={false} />
      </div>

      {/* ── Ambient colour glows ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Indian rangoli background */}
      <RangoliBackground />

      {/* Floating diyas */}
      <FloatingDiya delay={0}  x={10} size={16} />
      <FloatingDiya delay={2}  x={25} size={12} />
      <FloatingDiya delay={4}  x={75} size={14} />
      <FloatingDiya delay={1}  x={85} size={10} />
      <FloatingDiya delay={3}  x={50} size={12} />
      <FloatingDiya delay={5}  x={38} size={10} />
      <FloatingDiya delay={6}  x={62} size={11} />

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary tracking-wide">University of Southern California</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance"
        >
          <span className="text-india-orange">Association</span>{" "}
          <span>of</span>{" "}
          <span className="text-gradient-gold">Indian</span>{" "}
          <span className="text-india-green">Students</span>
        </motion.h1>

        {/* Decorative rangoli divider under title */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
          {/* Inline mini lotus glyph */}
          <svg viewBox="-12 -12 24 24" width={24} height={24} className="text-primary opacity-70">
            <g fill="currentColor" stroke="currentColor" strokeLinecap="round">
              {Array.from({ length: 8 }, (_, i) => {
                const a = (i * 45 * Math.PI) / 180
                const hw = (17 * Math.PI) / 180
                const r = 10.5
                const rc = r * 0.65
                const tx = f(r * Math.sin(a)), ty = f(-r * Math.cos(a))
                const cx1 = f(rc * Math.sin(a - hw * 0.5)), cy1 = f(-rc * Math.cos(a - hw * 0.5))
                const cx2 = f(rc * Math.sin(a + hw * 0.5)), cy2 = f(-rc * Math.cos(a + hw * 0.5))
                return <path key={i} d={`M0 0 Q${cx1} ${cy1} ${tx} ${ty} Q${cx2} ${cy2} 0 0Z`} strokeWidth="0.4" fillOpacity="0.22" />
              })}
              <circle r={1.8} strokeWidth="0" fillOpacity="0.7" />
            </g>
          </svg>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-primary font-medium mb-6 italic"
        >
          Where Culture Meets Community
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Celebrating Indian heritage, fostering connections, and creating unforgettable experiences at USC
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#events"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore Events
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </span>
          </Link>
          <Link
            href="#newsletter"
            className="px-8 py-4 border border-primary/30 text-primary rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
          >
            Join Newsletter
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Helper used inline above
function f(n: number): string { return n.toFixed(2) }

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ImageIcon, MapPin, Play, Quote, Ticket, Users } from "lucide-react"
import { LotusIcon, RangoliFull } from "@/components/indian-patterns"
import type { SignatureEvent } from "@/lib/signature-events"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function FloatingAccent({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute rounded-full border border-primary/30 bg-primary/10"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 180, 360],
        opacity: [0.18, 0.42, 0.18],
      }}
      transition={{
        duration: 6 + delay,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function EventDetailPage({ event }: { event: SignatureEvent }) {
  const { scrollYProgress } = useScroll()
  const heroImageY = useTransform(scrollYProgress, [0, 0.45], [0, 80])
  const chakraRotate = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 mandala-pattern opacity-35" />

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -translate-x-1/2 opacity-[0.07]"
        style={{ rotate: chakraRotate }}
      >
        <RangoliFull size={820} opacity={1} color="#D4AF37" />
      </motion.div>
      <FloatingAccent delay={0} x="8%" y="22%" size={10} />
      <FloatingAccent delay={1.4} x="88%" y="28%" size={14} />
      <FloatingAccent delay={2.2} x="16%" y="72%" size={12} />
      <FloatingAccent delay={3.1} x="82%" y="78%" size={9} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Signature Events
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-2xl border ${event.borderColor} bg-gradient-to-br ${event.color} p-8 sm:p-10`}
          >
            <motion.div
              role="img"
              aria-label={event.imageAlt}
              className="absolute inset-0 bg-cover opacity-40 mix-blend-screen saturate-125"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundPosition: event.imagePosition,
                y: heroImageY,
              }}
            />
            <p className="sr-only">{event.imageCaption}</p>
            <div className="absolute inset-0 bg-gradient-to-br from-background/86 via-background/58 to-background/92" />
            <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-80`} />

            <div className="relative z-10">
              <motion.div
                className="mb-5 flex items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <LotusIcon size={22} opacity={0.65} />
                <span className="text-sm uppercase tracking-widest text-primary">
                  {event.subtitle}
                </span>
              </motion.div>

              <motion.h1
                className="mb-5 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                {event.title}
              </motion.h1>

              <motion.p
                className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
              >
                {event.longDescription}
              </motion.p>

              <motion.div
                className="flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <a
                  href={event.waitlistHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
                >
                  Join Waitlist
                  <Ticket size={18} />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3 font-medium text-primary transition-all hover:scale-105 hover:bg-primary/10"
                >
                  View Address
                  <MapPin size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="grid gap-4"
          >
            {[
              { icon: Calendar, label: "Date", value: event.date, dateTime: event.startDate },
              { icon: Clock, label: "Time", value: event.time, dateTime: event.startDate },
              { icon: MapPin, label: "Location", value: event.location },
              { icon: Users, label: "Address", value: event.address },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card/45 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.08 }}
                  whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.35)" }}
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={21} />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-primary">{item.label}</p>
                  {item.dateTime ? (
                    <time dateTime={item.dateTime} className="mt-1 block text-base leading-6 text-foreground">
                      {item.value}
                    </time>
                  ) : (
                    <p className="mt-1 text-base leading-6 text-foreground">{item.value}</p>
                  )}
                </motion.div>
              )
            })}
          </motion.aside>
        </div>

        <motion.section
          className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card/40 p-8">
            <div className="mb-5 flex items-center gap-3">
              <ImageIcon size={20} className="text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Moments Gallery</h2>
            </div>

            {event.gallery.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {event.gallery.map((item, index) => (
                  <motion.figure
                    key={item.src}
                    className={`group relative min-h-44 overflow-hidden rounded-xl border border-border/70 bg-secondary/25 ${
                      index === 0 ? "sm:col-span-2 min-h-64" : ""
                    }`}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.src}
                          poster={item.poster}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                          aria-label={item.alt}
                        />
                        <div className="pointer-events-none absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-primary backdrop-blur-sm">
                          <Play size={18} />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes={index === 0 ? "(min-width: 1024px) 38vw, (min-width: 640px) 85vw, 100vw" : "(min-width: 1024px) 18vw, (min-width: 640px) 42vw, 100vw"}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        quality={82}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-85" />
                    <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-sm leading-6 text-foreground">
                      {item.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-primary/25 bg-primary/5 p-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  Add photos or videos for {event.title} in <span className="text-primary">public/events/{event.slug}/</span>, then register them in the event gallery.
                </p>
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card/40 p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Event Flow</h2>
            <div className="relative">
              <div className="absolute bottom-5 left-[17px] top-5 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" />
              <div className="space-y-5">
                {event.schedule.map((item, index) => (
                  <motion.div
                    key={`${item.time}-${item.title}`}
                    className="relative flex gap-4"
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/35 bg-background text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="rounded-xl border border-border/70 bg-secondary/20 p-4">
                      <p className="text-xs font-medium uppercase tracking-widest text-primary">{item.time}</p>
                      <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section className="mt-10">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <LotusIcon size={22} opacity={0.65} />
              <span className="text-sm uppercase tracking-widest text-primary">Community Reactions</span>
              <LotusIcon size={22} opacity={0.65} />
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What People Say</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {event.testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card/45 p-6"
                initial={{ opacity: 0, y: 30, rotate: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: 0, borderColor: "rgba(212, 175, 55, 0.35)" }}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Quote size={19} className="text-primary" />
                </div>
                <p className="mb-6 text-sm leading-7 text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

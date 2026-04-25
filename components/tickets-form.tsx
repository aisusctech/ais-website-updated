"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, CheckCircle2, ClipboardCheck, Mail, ShieldCheck, Ticket, User, Users } from "lucide-react"
import { signatureEvents } from "@/lib/signature-events"

type FormState = {
  eventSlug: string
  fullName: string
  uscId: string
  uscEmail: string
  waiverAccepted: boolean
}

const initialFormState: FormState = {
  eventSlug: signatureEvents[0]?.slug ?? "",
  fullName: "",
  uscId: "",
  uscEmail: "",
  waiverAccepted: false,
}

export function TicketsForm() {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle")
  const [error, setError] = useState("")

  const selectedEvent = useMemo(
    () => signatureEvents.find((event) => event.slug === form.eventSlug) ?? signatureEvents[0],
    [form.eventSlug],
  )

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
    setError("")
  }

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.fullName.trim() || !form.uscId.trim() || !form.uscEmail.trim() || !form.eventSlug) {
      setError("Please complete every required field.")
      return
    }

    if (!form.uscEmail.toLowerCase().endsWith("@usc.edu")) {
      setError("Please use your USC email address.")
      return
    }

    if (!form.waiverAccepted) {
      setError("Please accept the event waiver before submitting.")
      return
    }

    setStatus("submitting")
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus("submitted")
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55 }}
        className={`relative overflow-hidden rounded-2xl border ${selectedEvent.borderColor} bg-gradient-to-br ${selectedEvent.color} p-7`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover opacity-35 mix-blend-screen saturate-125"
          style={{
            backgroundImage: `url(${selectedEvent.image})`,
            backgroundPosition: selectedEvent.imagePosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/88 via-background/62 to-background/92" />
        <div className={`absolute inset-0 bg-gradient-to-br ${selectedEvent.color} opacity-80`} />

        <div className="relative z-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Ticket size={24} />
          </div>
          <p className="mb-2 text-sm uppercase tracking-widest text-primary">Selected Event</p>
          <h2 className="mb-3 text-3xl font-bold text-foreground">{selectedEvent.title}</h2>
          <p className="mb-6 text-sm leading-6 text-muted-foreground">{selectedEvent.description}</p>

          <div className="grid gap-3">
            <div className="rounded-xl border border-border/70 bg-card/45 p-4">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Calendar size={16} />
                <span className="text-xs uppercase tracking-widest">Date & Time</span>
              </div>
              <p className="text-sm text-foreground">{selectedEvent.date}</p>
              <p className="text-sm text-muted-foreground">{selectedEvent.time}</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/45 p-4">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Users size={16} />
                <span className="text-xs uppercase tracking-widest">Location</span>
              </div>
              <p className="text-sm text-foreground">{selectedEvent.location}</p>
              <p className="text-sm text-muted-foreground">{selectedEvent.address}</p>
            </div>
          </div>
        </div>
      </motion.aside>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="rounded-2xl border border-border bg-card/45 p-6 sm:p-8"
      >
        <AnimatePresence mode="wait">
          {status === "submitted" ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="flex min-h-[520px] flex-col items-center justify-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 size={34} />
              </div>
              <h2 className="mb-3 text-3xl font-bold text-foreground">Ticket Request Submitted</h2>
              <p className="mb-8 max-w-md text-muted-foreground">
                Your frontend ticket request for {selectedEvent.title} is ready. Backend storage and confirmation emails can be connected later.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialFormState)
                  setStatus("idle")
                }}
                className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit Another Ticket
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={submitForm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-foreground">Ticket Registration</h2>
                <p className="text-sm text-muted-foreground">
                  Fill this out with your USC information. This is frontend-only for now and ready for your backend later.
                </p>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-foreground">Select Event</span>
                <select
                  value={form.eventSlug}
                  onChange={(event) => updateField("eventSlug", event.target.value)}
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  required
                >
                  {signatureEvents.map((event) => (
                    <option key={event.slug} value={event.slug}>
                      {event.title} - {event.date}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-foreground">Full Name</span>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      placeholder="Your full legal name"
                      className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">USC ID</span>
                  <div className="relative">
                    <ClipboardCheck size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={form.uscId}
                      onChange={(event) => updateField("uscId", event.target.value)}
                      placeholder="10-digit USC ID"
                      inputMode="numeric"
                      className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">USC Email</span>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      value={form.uscEmail}
                      onChange={(event) => updateField("uscEmail", event.target.value)}
                      placeholder="name@usc.edu"
                      className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </label>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Event Waiver</p>
                    <p className="text-xs text-muted-foreground">Required before ticket submission</p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  I understand that AIS USC events may include photography, videography, food, crowds, dancing, and physical activity. I agree to follow event staff instructions, respect venue rules, and participate responsibly.
                </p>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.waiverAccepted}
                    onChange={(event) => updateField("waiverAccepted", event.target.checked)}
                    className="mt-1 h-4 w-4 accent-primary"
                    required
                  />
                  <span className="text-sm text-foreground">
                    I have read and agree to the AIS USC event waiver.
                  </span>
                </label>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit Ticket Request"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

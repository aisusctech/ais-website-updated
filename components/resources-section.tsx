"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Home, Globe, Shield, BookOpen, PlayCircle, Video } from "lucide-react"
import { LotusIcon } from "@/components/indian-patterns"

const orientationRecordingUrl = "https://usc.zoom.us/rec/play/pPfqQPFzsEMErAU9F1uGYMQEVZ48EgESGqtw9kLBG1HHo3jP-R6ajt7o4KkMhch-4QlYDAxH249oh-7t.8T1KVeoSUe2ZInEC?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&oldStyle=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fusc.zoom.us%2Frec%2Fshare%2FGrYtHsOXHtDmZN4fb5pTcsYGzrOUnjcIwoDq5GWg06qLgUQARrtWOSqGs538DXU.HzjUdGrvWN4_UqPr"

const faqs = [
  {
    question: "How do I find housing and roommates at USC?",
    answer: "AIS hosts housing mixers each semester where you can meet potential roommates. We also have a dedicated Discord channel and WhatsApp group for housing discussions. Check out USC Housing's official portal and our resource links below for more information."
  },
  {
    question: "Are there on-campus job opportunities available?",
    answer: "Yes! USC offers various on-campus positions through the Student Employment Office. AIS also shares job postings relevant to our community. We recommend checking Workday, USC Careers, and attending our career networking events."
  },
  {
    question: "How much do AIS event tickets typically cost?",
    answer: "Most of our events are free for USC students! For larger events like Diwali and Holi, tickets typically range from $5-$15 for students. AIS members often receive early access and discounted rates."
  },
  {
    question: "What tips do you have for apartment hunting near USC?",
    answer: "Start early (2-3 months before move-in), explore neighborhoods like West Adams and University Park, use USC's off-campus housing database, and always verify landlord credentials. AIS hosts apartment hunting workshops each spring."
  },
  {
    question: "What skills are useful for finding part-time jobs?",
    answer: "Strong communication, time management, and customer service skills are highly valued. For tech roles, basic coding and design skills help. AIS offers resume workshops and skill-building sessions throughout the year."
  },
]

const resources = [
  {
    title: "USC Housing",
    description: "Official on-campus and off-campus housing resources",
    icon: Home,
    link: "https://housing.usc.edu",
  },
  {
    title: "International Student Office",
    description: "Support services for international students",
    icon: Globe,
    link: "https://ois.usc.edu",
  },
  {
    title: "Housing Safety Guide",
    description: "Tips for safe apartment hunting and living",
    icon: Shield,
    link: "#",
  },
  {
    title: "Student Resources Portal",
    description: "Comprehensive student support and services",
    icon: BookOpen,
    link: "https://students.usc.edu",
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
        >
          <ChevronDown size={18} className="text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ResourceCard({ resource, index }: { resource: typeof resources[0]; index: number }) {
  const Icon = resource.icon
  
  return (
    <motion.a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group block p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon size={22} className="text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {resource.title}
            </h4>
            <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm text-muted-foreground">
            {resource.description}
          </p>
        </div>
      </div>
    </motion.a>
  )
}

function OrientationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.25 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative mt-6 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/12 via-card/70 to-saffron/10 p-6"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-primary/20 bg-primary/10"
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.36, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-5 right-8 h-3 w-3 rounded-full bg-primary/50"
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.22em] text-primary">
              New Students
            </p>
            <h4 className="text-2xl font-bold text-foreground">
              AIS Orientation
            </h4>
          </div>
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Video size={22} />
          </div>
        </div>

        <p className="mb-6 text-sm leading-6 text-muted-foreground">
          Everything you need to hit the ground running at USC.
        </p>

        <div className="mb-6 rounded-xl border border-border/70 bg-background/45 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PlayCircle size={19} />
            </div>
            <div>
              <p className="font-medium text-foreground">AIS Orientation Session</p>
              <p className="text-sm text-muted-foreground">Full Zoom recording</p>
            </div>
          </div>
        </div>

        <a
          href={orientationRecordingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Watch Recording
          <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  )
}

export function ResourcesSection() {
  return (
    <section id="resources" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
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
              Student Support
            </span>
            <LotusIcon size={22} opacity={0.65} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Resources & FAQ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about life at USC and how AIS can help you thrive.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAQ Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-foreground mb-6"
            >
              Frequently Asked Questions
            </motion.h3>
            <div className="rounded-2xl border border-border bg-card/30 p-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
            <OrientationCard />
          </div>
          
          {/* Resources Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-foreground mb-6"
            >
              Helpful Resources
            </motion.h3>
            <div className="grid gap-4">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} index={index} />
              ))}
            </div>
            
            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <h4 className="font-medium text-foreground mb-2">
                Need more help?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is always ready to assist. Reach out to us for personalized guidance.
              </p>
              <a
                href="mailto:tech@aisusc.org"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Contact Us
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

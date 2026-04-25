"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Events", href: "#events" },
    { label: "Tickets", href: "/tickets" },
    { label: "Community", href: "#testimonials" },
    { label: "Board", href: "#board" },
    { label: "Resources", href: "#resources" },
    { label: "Sponsors", href: "#sponsors" },
  ],
  resources: [
    { label: "USC Housing", href: "https://housing.usc.edu", external: true },
    { label: "International Students", href: "https://ois.usc.edu", external: true },
    { label: "Student Portal", href: "https://students.usc.edu", external: true },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/aisusc", icon: Instagram },
    { label: "LinkedIn", href: "https://linkedin.com/company/aisusc", icon: Linkedin },
    { label: "Email", href: "mailto:tech@aisusc.org", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-card/50 border-t border-border">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-primary/30 overflow-hidden">
                <img
                  src="/ais-logo.svg"
                  alt="AIS USC logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">AIS</span>
                <span className="block text-xs text-muted-foreground tracking-widest">USC</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Association of Indian Students at the University of Southern California. 
              Where Culture Meets Community.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:tech@aisusc.org"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                tech@aisusc.org
              </a>
              <p className="text-sm text-muted-foreground">
                University of Southern California<br />
                Los Angeles, CA
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AIS USC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

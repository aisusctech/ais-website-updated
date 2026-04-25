import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SeoContentSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-border bg-card/35 p-8 sm:p-10">
          <p className="mb-3 text-sm uppercase tracking-widest text-primary">
            AIS USC Community
          </p>
          <h2 className="mb-5 text-2xl font-bold text-foreground sm:text-3xl">
            Indian Student Community, Cultural Events, and New Student Support at USC
          </h2>
          <div className="grid gap-6 text-sm leading-7 text-muted-foreground md:grid-cols-2">
            <p>
              AIS USC is the Association of Indian Students at the University of Southern California. We bring
              together Indian students, South Asian students, international students, alumni, and friends of the
              community through cultural celebrations, campus resources, and student-led programming in Los Angeles.
            </p>
            <p>
              Our signature events include USC Diwali, Holi, Navratri and Garba, and Ganesha Chaturthi. We also
              support new students with orientation resources, housing guidance, community connections, sponsor
              partnerships, and opportunities to get involved with the AIS executive board.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/#events"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Explore AIS Events
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/#resources"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              View USC Student Resources
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

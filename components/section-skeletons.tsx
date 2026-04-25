import type React from "react"

function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded bg-secondary/70 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </div>
  )
}

function SectionHeaderSkeleton({ eyebrowWidth = "w-44", titleWidth = "w-80" }: { eyebrowWidth?: string; titleWidth?: string }) {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="mb-4 flex items-center gap-3">
        <SkeletonBlock className="h-5 w-5 rounded-full" />
        <SkeletonBlock className={`h-4 ${eyebrowWidth}`} />
        <SkeletonBlock className="h-5 w-5 rounded-full" />
      </div>
      <SkeletonBlock className={`mb-6 h-12 ${titleWidth} max-w-full`} />
      <div className="flex w-full max-w-2xl flex-col items-center gap-3">
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-4/5" />
      </div>
    </div>
  )
}

function SectionShell({ id, children, background = "mandala" }: { id?: string; children: React.ReactNode; background?: "mandala" | "gradient" }) {
  return (
    <section id={id} className="relative overflow-hidden py-32">
      {background === "mandala" ? (
        <div className="absolute inset-0 mandala-pattern opacity-30" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  )
}

export function EventsSectionSkeleton() {
  return (
    <SectionShell id="events">
      <SectionHeaderSkeleton eyebrowWidth="w-40" titleWidth="w-72" />
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative min-h-[300px] overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-card/70 to-secondary/40 p-8"
          >
            <SkeletonBlock className="absolute right-4 top-4 h-16 w-16 rounded-xl opacity-60" />
            <SkeletonBlock className="mb-3 h-9 w-48" />
            <SkeletonBlock className="mb-7 h-4 w-36" />
            <div className="mb-8 space-y-3">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
              <SkeletonBlock className="h-4 w-3/5" />
            </div>
            <div className="mb-8 space-y-3">
              <SkeletonBlock className="h-4 w-44" />
              <SkeletonBlock className="h-4 w-52" />
            </div>
            <SkeletonBlock className="h-5 w-32" />
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export function TestimonialsSectionSkeleton() {
  return (
    <SectionShell id="testimonials" background="gradient">
      <SectionHeaderSkeleton eyebrowWidth="w-40" titleWidth="w-72" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-border bg-card/45 p-6 sm:p-8 ${index === 0 ? "md:col-span-2" : ""}`}
          >
            <SkeletonBlock className="mb-5 h-10 w-10 rounded-full" />
            <div className="mb-7 space-y-3">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-4/5" />
              {index === 0 && <SkeletonBlock className="h-4 w-2/3" />}
            </div>
            <div className="flex items-center gap-4">
              <SkeletonBlock className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <SkeletonBlock className="h-4 w-36" />
                <SkeletonBlock className="h-3 w-48" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export function BoardSectionSkeleton() {
  return (
    <SectionShell id="board" background="gradient">
      <SectionHeaderSkeleton eyebrowWidth="w-28" titleWidth="w-80" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="min-h-[232px] rounded-2xl border border-primary/15 bg-gradient-to-br from-card/60 to-secondary/40 p-6"
          >
            <SkeletonBlock className="mb-5 h-14 w-14 rounded-xl" />
            <SkeletonBlock className="mb-3 h-6 w-36" />
            <div className="mb-6 space-y-3">
              <SkeletonBlock className="h-3 w-full" />
              <SkeletonBlock className="h-3 w-4/5" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <SkeletonBlock className="h-6 w-6 rounded-full" />
                <SkeletonBlock className="h-6 w-6 rounded-full" />
                <SkeletonBlock className="h-6 w-6 rounded-full" />
              </div>
              <SkeletonBlock className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export function ResourcesSectionSkeleton() {
  return (
    <SectionShell id="resources" background="gradient">
      <SectionHeaderSkeleton eyebrowWidth="w-36" titleWidth="w-72" />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SkeletonBlock className="mb-6 h-7 w-64" />
          <div className="rounded-2xl border border-border bg-card/30 p-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="border-b border-border py-6 last:border-0">
                <div className="flex items-center justify-between gap-4">
                  <SkeletonBlock className="h-5 w-4/5" />
                  <SkeletonBlock className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SkeletonBlock className="mb-6 h-7 w-48" />
          <div className="grid gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-xl border border-border bg-card/50 p-6">
                <div className="flex gap-4">
                  <SkeletonBlock className="h-12 w-12 rounded-xl" />
                  <div className="flex-1 space-y-3">
                    <SkeletonBlock className="h-5 w-44" />
                    <SkeletonBlock className="h-4 w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <SkeletonBlock className="mb-3 h-5 w-36" />
            <SkeletonBlock className="mb-4 h-4 w-full" />
            <SkeletonBlock className="h-5 w-28" />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

export function SponsorsSectionSkeleton() {
  return (
    <SectionShell id="sponsors">
      <SectionHeaderSkeleton eyebrowWidth="w-32" titleWidth="w-80" />
      <div className="space-y-16">
        <div className="flex flex-col items-center">
          <SkeletonBlock className="mb-8 h-4 w-48" />
          <div className="w-full max-w-xl rounded-2xl border border-primary/25 bg-gradient-to-br from-card/60 to-primary/5 p-8">
            <SkeletonBlock className="mx-auto mb-6 h-4 w-44" />
            <SkeletonBlock className="mx-auto h-28 w-64 rounded-2xl" />
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <SkeletonBlock className="mb-8 h-4 w-40" />
              <div className="w-full max-w-sm rounded-2xl border border-border bg-card/45 p-8">
                <SkeletonBlock className="mx-auto mb-6 h-4 w-36" />
                <SkeletonBlock className="mx-auto h-20 w-48 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export function NewsletterSectionSkeleton() {
  return (
    <section id="newsletter" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <SkeletonBlock className="mx-auto mb-6 h-16 w-16 rounded-full" />
        <SkeletonBlock className="mx-auto mb-5 h-12 w-72" />
        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-3">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-3/4" />
        </div>
        <SkeletonBlock className="mx-auto h-14 w-full max-w-md rounded-full" />
        <SkeletonBlock className="mx-auto mt-4 h-3 w-56" />
      </div>
    </section>
  )
}

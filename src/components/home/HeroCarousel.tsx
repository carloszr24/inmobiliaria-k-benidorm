'use client'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-sky-500">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255,255,255,0.35) 0%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-stone-950/10" />
    </div>
  )
}

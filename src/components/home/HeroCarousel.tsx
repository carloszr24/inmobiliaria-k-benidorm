'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/benidorm-hero.jpg"
        alt="Vista de Benidorm y la Costa Blanca"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/42 via-stone-950/22 to-stone-950/48" />
    </div>
  )
}

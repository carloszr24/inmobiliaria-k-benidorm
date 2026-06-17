export const AGENT = {
  name: 'Inmobiliaria K Benidorm',
  shortName: 'I.K.B',
  title: 'Agencia inmobiliaria',
  tagline: 'Compra, venta y alquiler en Benidorm y la Costa Blanca con asesoramiento cercano y profesional.',
  logo: '/images/inmobiliaria-k-benidorm-logo.png',
} as const

export const CONTACT = {
  address: {
    line1: 'Av. Rei Jaume I, 28',
    line2: '03501 Benidorm, Alicante',
    full: 'Av. Rei Jaume I, 28, 03501 Benidorm, Alicante',
    mapsQuery: 'Av.+Rei+Jaume+I,+28,+03501+Benidorm,+Alicante',
  },
  phone: {
    display: '687 49 96 25',
    e164: '+34687499625',
    wa: '34687499625',
  },
  email: '',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '10:00–14:00 · 17:00–20:00' },
  { day: 'Martes', hours: '10:00–14:00 · 17:00–20:00' },
  { day: 'Miércoles', hours: '10:00–14:00 · 17:00–20:00' },
  { day: 'Jueves', hours: '10:00–14:00 · 17:00–20:00' },
  { day: 'Viernes', hours: '10:00–14:00 · 17:00–20:00' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Vie: 10:00–14:00 · 17:00–20:00 · Sáb y Dom: Cerrado'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, operation?: string): string {
  if (!price || price <= 0) return 'Consultar precio'
  const base = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
  return operation === 'alquiler' ? `${base}/mes` : base
}

export function parseImages(images: string): string[] {
  try {
    const parsed = JSON.parse(images)
    const list = Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : []
    return list.length ? list.map(resolveImageUrl) : [PROPERTY_IMAGE_FALLBACK]
  } catch {
    return [PROPERTY_IMAGE_FALLBACK]
  }
}

const PROPERTY_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80'

/** Evita rutas locales inexistentes que rompen next/image en producción. */
export function resolveImageUrl(url: string): string {
  const trimmed = url?.trim()
  if (!trimmed) return PROPERTY_IMAGE_FALLBACK
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return PROPERTY_IMAGE_FALLBACK
}

export const PROPERTY_TYPES = ['piso', 'casa', 'local', 'terreno', 'oficina'] as const
export const PROPERTY_OPERATIONS = ['venta', 'alquiler'] as const
export const PROPERTY_STATUSES = ['disponible', 'reservado', 'vendido'] as const

export const STATUS_LABELS: Record<string, string> = {
  disponible: 'Disponible',
  reservado: 'Reservado',
  vendido: 'Vendido',
}

export const TYPE_LABELS: Record<string, string> = {
  piso: 'Piso',
  casa: 'Casa',
  local: 'Local',
  terreno: 'Terreno',
  oficina: 'Oficina',
}

export const OPERATION_LABELS: Record<string, string> = {
  venta: 'Venta',
  alquiler: 'Alquiler',
}

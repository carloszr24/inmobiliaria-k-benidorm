import type { Property } from '@/types'

const now = new Date('2026-06-17T12:00:00.000Z')

const propiedad1Images = [
  '/images/propiedad1-k.png',
  '/images/propiedad1-k(1).png',
  '/images/propiedad1-k(2).png',
  '/images/propiedad1-k(3).png',
]

const propiedad2Images = [
  '/images/propiedad2-k.png',
  '/images/propiedad2-k(1).png',
  '/images/propiedad2-k(2).png',
  '/images/propiedad2-k(3).png',
]

const propiedad3Images = [
  '/images/propiedad3-k.png',
  '/images/propiedad3-k(1).png',
  '/images/propiedad3-k(2).png',
  '/images/propiedad3-k(3).png',
]

/** Catálogo en archivo local (sin Supabase). */
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'propiedad1-k',
    title: 'Piso en venta en Calle Langreo, 4',
    price: 374_000,
    location: 'Playa de Poniente, Benidorm',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `¡Oportunidad única! Se vende estupenda vivienda totalmente exterior.

Descubre esta maravillosa vivienda que se encuentra a solo 200 metros de la preciosa playa de Poniente. Con un diseño luminoso y moderno, esta propiedad cuenta con tres amplios dormitorios dobles, todos equipados con armarios empotrados para maximizar el espacio y el confort.

El dormitorio principal es un verdadero refugio, que incluye un baño en suite privado y acceso a una encantadora terraza, donde podrás disfrutar del clima y las vistas impresionantes. Además, la vivienda dispone de otros dos baños completos, perfectos para las necesidades diarias de toda la familia.

El amplio salón comedor es ideal para relajarte o recibir a tus invitados, mientras te deleitas con las vistas al exterior. La cocina independiente está completamente equipada con todo lo necesario para preparar tus platillos favoritos y cuenta con una galería que añade comodidad y funcionalidad.

La propiedad no solo ofrece un hogar ideal, sino que también está situada en una zona con todos los servicios necesarios a tu alcance: supermercados, centros médicos y autobuses, todo a pocos pasos de tu puerta.

Además, disfrutarás de la tranquilidad que proporciona la urbanización completa, y tendrás tu propia plaza de garaje en propiedad, lo que garantiza comodidad y seguridad para tu vehículo.

No dejes pasar esta oportunidad de vivir cerca del mar en una vivienda que lo tiene todo. ¡Contáctanos para más información y para concertar una visita!`,
    images: JSON.stringify(propiedad1Images),
    fotocasaUrl: null,
    bedrooms: 3,
    bathrooms: 2,
    sqMeters: 104,
    availability: 'Disponible',
    heating: 'Calefacción individual: Eléctrica',
    condition: 'Segunda mano/buen estado',
    propertyAge: '2008',
    floor: '16ª planta exterior',
    garage: 'Plaza de garaje incluida en el precio',
    elevator: 'Con ascensor',
    furnished: 'Armarios empotrados',
    energyRating: 'En trámite',
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'propiedad2-k',
    title: 'Piso en venta en Av Armada Española, 3',
    price: 990_000,
    location: 'Playa de Poniente, Benidorm',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `Se Vende Espectacular Vivienda en Playa de Poniente

¡Oportunidad única! Se vende impresionante vivienda ubicada en la planta 22, en primera línea de la hermosa playa de Poniente. Este exclusivo apartamento cuenta con tres dormitorios dobles, perfectos para disfrutar del descanso y la comodidad en un entorno privilegiado.

La cocina independiente está diseñada con espacios funcionales, mientras que los dos baños completos, uno de ellos en suite, ofrecen la comodidad de una bañera y ducha independiente. El amplio salón comedor se convierte en el corazón del hogar, ideal para disfrutar de momentos inolvidables con familia y amigos.
Uno de los elementos que destaca en este contexto es el uso del estuco en las paredes, una técnica que no solo aporta belleza, sino también durabilidad y eficiencia en la construcción.

Uno de los mayores encantos de esta propiedad es su gran terraza, desde donde se pueden admirar vistas panorámicas que abarcan todo Benidorm, tanto al mar como a la montaña, gracias a su privilegiada orientación hacia el norte, este y sur.

El apartamento dispone de A/A tanto frío como calor en toda la vivienda.

Además, la vivienda tiene dos plazas de garaje cabinadas que son opcionales para el comprador, brindando comodidad y seguridad. Formando parte de una urbanización completa, los residentes pueden disfrutar de una zona ajardinada, piscina y dos canchas de pádel, así como de la tranquilidad que ofrece un conserje disponible las 24 horas.

Este apartamento está situado en un punto ideal, cercano al centro de Benidorm y a todos los servicios disponibles, sin olvidar la extraordinaria ventaja de estar en primera línea de playa.

No pierdas la oportunidad de vivir en este espectacular lugar. ¡Contáctanos para más información y para concertar una visita!`,
    images: JSON.stringify(propiedad2Images),
    fotocasaUrl: null,
    bedrooms: 3,
    bathrooms: 2,
    sqMeters: 105,
    availability: 'Disponible',
    heating: 'Calefacción individual: Eléctrica',
    condition: 'Segunda mano/buen estado',
    propertyAge: '1987',
    floor: '22ª planta exterior',
    garage: 'Plaza de garaje por 70.000 € adicionales',
    elevator: 'Con ascensor',
    energyRating: 'En trámite',
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'propiedad3-k',
    title: 'Piso en venta en Avenida de Madrid, 21',
    price: 489_000,
    location: 'Playa de Levante, Benidorm',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `Le ofrecemos este espectacular ático dúplex, situado en Benidorm, en una de las mejores zonas de la ciudad. Este inmueble ofrece una ubicación privilegiada frente al mar Mediterráneo.

Se encuentra en primera línea de playa, con acceso directo al paseo marítimo y a pocos pasos de la arena. La zona es inmejorable y se encuentra a con una gran concentración de servicios como bares, restaurantes, supermercados, farmacias y todo el entretenimiento que se pueda imaginar. Además, está perfectamente comunicada con el resto de la ciudad, tanto a pie como mediante transporte público.

La vivienda cuenta con aproximadamente 185 m² construidos y 170 m² útiles. Actualmente está dividida en dos viviendas independientes, ambas con licencia turística, lo que representa una excelente oportunidad tanto para uso personal como para inversión.

La propiedad dispone de tres terrazas con vistas al mar, orientación sur y luz directa durante todo el día. Se vende completamente amueblada y equipada, lista para entrar a vivir en un enclave perfecto en Benidorm. ¡No pierdas la oportunidad de vivir o invertir en este magnífico ático dúplex!`,
    images: JSON.stringify(propiedad3Images),
    fotocasaUrl: null,
    bedrooms: 5,
    bathrooms: 2,
    sqMeters: 185,
    availability: 'Disponible',
    heating: 'Calefacción individual: Eléctrica',
    condition: 'Segunda mano/buen estado',
    propertyAge: '1962',
    floor: '7ª planta exterior',
    elevator: 'Con ascensor',
    furnished: 'Sí',
    energyRating: 'E',
    emissionsRating: 'E',
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
]

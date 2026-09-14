import type { FaqItem, GalleryItem, Stat, Testimonial, Treatment, WhatsappCta } from "@/config/types";

// Configuración de negocio de Nova Beauty Studio.
// Prueba de reutilización de la base de Lumina: mismos componentes, misma
// arquitectura, identidad de marca completamente distinta (ver theme.id).
export const novaConfig = {
  theme: {
    // Selecciona el bloque de colores en globals.css ([data-brand="nova"])
    // y la paleta hex plana de theme.ts (favicon / apple-icon / OG image).
    id: "nova",
  },
  business: {
    name: "Nova Beauty Studio",
    shortName: "NOVA",
    displayName: "Nova",
    monogram: "N",
    categoryLabel: "Beauty Studio",
    slogan: "Belleza, cuidado y bienestar en un solo lugar.",
    subSlogan:
      "Resultados visibles, atención personalizada y una experiencia premium pensada para realzar tu belleza natural.",
    heroHeadline: {
      line1: "Tu belleza,",
      accentLine: "elevada.",
    },
    heroVisual: {
      eyebrow: "Estudio boutique",
      label: "Precisión, calma, belleza real",
    },
    description:
      "Beauty studio en Buenos Aires. Diseño de cejas, pestañas, tratamientos faciales, depilación y masajes. Reservá tu turno.",
    city: "Buenos Aires",
    country: "Argentina",
    url: "https://nova-beauty-studio.example.com",
    locale: "es-AR",
    legalNote: "CUIT ficticio a fines demostrativos",
  },
  contact: {
    // Número ficticio en formato internacional sin "+" ni espacios (formato requerido por wa.me).
    whatsappNumber: "5491144556677",
    whatsappDisplay: "+54 9 11 4455-6677",
    phoneDisplay: "(011) 4455-6677",
    email: "hola@novabeautystudio.com.ar",
    instagramHandle: "@novabeautystudio",
    instagramUrl: "https://instagram.com/novabeautystudio",
  },
  location: {
    addressLine1: "Av. Santa Fe 2850",
    addressLine2: "Buenos Aires, Argentina",
    neighborhood: "Barrio Norte",
    mapsQuery: "Av. Santa Fe 2850, Buenos Aires, Argentina",
    countryCode: "AR",
    hours: [
      { days: "Lunes a viernes", time: "9:00 – 20:00" },
      { days: "Sábados", time: "9:00 – 15:00" },
      { days: "Domingos", time: "Cerrado" },
    ],
  },
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Resultados", href: "#resultados" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Contacto", href: "#contacto" },
  ],
  treatments: [
    {
      slug: "diseno-de-cejas",
      name: "Diseño de cejas",
      description: "Definimos la forma ideal de tus cejas según tu rostro.",
      price: "$12.000",
      priceValue: 12000,
      category: "facial",
      duration: "30 min",
    },
    {
      slug: "laminado-de-cejas",
      name: "Laminado de cejas",
      description:
        "Cejas prolijas, definidas y con volumen natural por semanas.",
      price: "$18.000",
      priceValue: 18000,
      category: "facial",
      duration: "45 min",
    },
    {
      slug: "lifting-de-pestanas",
      name: "Lifting de pestañas",
      description:
        "Curvatura natural que resalta tu mirada sin extensiones.",
      price: "$16.000",
      priceValue: 16000,
      category: "facial",
      duration: "45 min",
    },
    {
      slug: "extensiones-de-pestanas",
      name: "Extensiones de pestañas",
      description: "Volumen y densidad a medida, aplicación pelo a pelo.",
      price: "Consultar",
      priceValue: null,
      category: "facial",
      duration: "90 min",
    },
    {
      slug: "limpieza-facial",
      name: "Limpieza facial",
      description:
        "Piel renovada con un protocolo profesional de limpieza profunda.",
      price: "$22.000",
      priceValue: 22000,
      category: "facial",
      duration: "50 min",
    },
    {
      slug: "tratamientos-faciales",
      name: "Tratamientos faciales",
      description: "Protocolos faciales personalizados según tu tipo de piel.",
      price: "Consultar",
      priceValue: null,
      category: "facial",
      duration: "60 min",
    },
    {
      slug: "depilacion",
      name: "Depilación",
      description: "Depilación con cera o láser, sesiones a medida.",
      price: "Consultar",
      priceValue: null,
      category: "depilacion",
      duration: "Según zona",
    },
    {
      slug: "masajes",
      name: "Masajes",
      description:
        "Masajes relajantes y descontracturantes para desconectar.",
      price: "$20.000",
      priceValue: 20000,
      category: "spa",
      duration: "50 min",
    },
  ] satisfies Treatment[],
  stats: [
    { id: "experience", value: "+3", label: "años de trayectoria" },
    { id: "clients", value: "+1.500", label: "clientas" },
    { id: "recommend", value: "97%", label: "recomendarían Nova" },
  ] satisfies Stat[],
  gallery: [
    { id: "g1", title: "Cejas definidas", category: "facial", tone: "champagne" },
    { id: "g2", title: "Mirada lifting", category: "facial", tone: "rose" },
    { id: "g3", title: "Extensiones a medida", category: "facial", tone: "nude" },
    { id: "g4", title: "Piel renovada", category: "facial", tone: "beige" },
    { id: "g5", title: "Depilación de precisión", category: "depilacion", tone: "champagne" },
    { id: "g6", title: "Ritual de relajación", category: "spa", tone: "rose" },
  ] satisfies GalleryItem[],
  testimonials: [
    {
      name: "Ana P.",
      quote:
        "Mis cejas nunca se vieron tan naturales. En Nova entendieron exactamente lo que buscaba.",
      rating: 5,
      treatment: "Laminado de cejas",
    },
    {
      name: "Julieta S.",
      quote:
        "El estudio es hermoso, minimalista, y la atención es impecable de principio a fin.",
      rating: 5,
      treatment: "Extensiones de pestañas",
    },
    {
      name: "Rocío D.",
      quote:
        "Profesionales, prolijas y puntuales. Se nota la calidad en cada detalle.",
      rating: 5,
      treatment: "Limpieza facial",
    },
    {
      name: "Carla M.",
      quote: "Encontré mi lugar de confianza para el cuidado de mi piel.",
      rating: 5,
      treatment: "Tratamientos faciales",
    },
  ] satisfies Testimonial[],
  faq: [
    {
      question: "¿Necesito reservar con anticipación?",
      answer:
        "Recomendamos reservar con al menos 24 horas de anticipación para asegurar el horario que prefieras.",
    },
    {
      question: "¿Cómo puedo cancelar mi turno?",
      answer:
        "Podés cancelar o reprogramar escribiéndonos por WhatsApp hasta 24 horas antes de tu turno, sin ningún cargo.",
    },
    {
      question:
        "¿Cada cuánto debo renovar el laminado de cejas o el lifting de pestañas?",
      answer:
        "El efecto dura entre 6 y 8 semanas según el crecimiento natural de cada persona. Te recomendamos agendar tu próxima sesión dentro de ese rango.",
    },
    {
      question: "¿Aceptan distintos medios de pago?",
      answer: "Sí, aceptamos efectivo, débito, crédito y transferencia.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "Estamos en Av. Santa Fe 2850, en Barrio Norte, Buenos Aires.",
    },
    {
      question: "¿Cuánto dura cada sesión?",
      answer:
        "Depende del servicio: entre 30 y 90 minutos aproximadamente. Te confirmamos la duración exacta al reservar tu turno.",
    },
  ] satisfies FaqItem[],
  about: {
    title: "Un estudio pensado para realzar tu belleza natural",
    body: "En Nova creemos en una belleza auténtica: cejas, pestañas y piel que se ven cuidadas, no artificiales. Combinamos técnica precisa, productos de calidad y un espacio minimalista donde cada detalle está pensado para tu comodidad.",
  },
  booking: {
    timeSlots: [
      "09:00 – 11:00",
      "11:00 – 13:00",
      "13:00 – 15:00",
      "15:00 – 17:00",
      "17:00 – 19:00",
      "19:00 – 20:00",
    ],
  },
  ctas: {
    chooseTreatment: {
      title: "¿No sabés qué servicio elegir?",
      subtitle:
        "Contanos qué estás buscando y te ayudamos a encontrar el tratamiento ideal.",
      message:
        "Hola Nova Beauty Studio, no estoy segura de qué servicio elegir. ¿Me pueden ayudar a encontrar el ideal para mí?",
    },
    finalPush: {
      title: "Reservá tu lugar en Nova",
      subtitle:
        "Escribinos ahora y coordinamos el día y horario que mejor te quede.",
      message: "Hola Nova Beauty Studio, quiero coordinar un turno.",
      buttonText: "Coordinar por WhatsApp",
    },
  } satisfies Record<string, WhatsappCta>,
  footerNav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Reservar turno", href: "#reservar" },
    { label: "Contacto", href: "#contacto" },
  ],
  seo: {
    titleSuffix: "Cejas, pestañas y tratamientos faciales",
    keywords: [
      "beauty studio",
      "diseño de cejas",
      "laminado de cejas",
      "lifting de pestañas",
      "extensiones de pestañas",
      "depilación Buenos Aires",
    ],
  },
} as const;

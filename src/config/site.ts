// Configuración centralizada del negocio.
// Para reutilizar esta base con otro centro de estética, alcanza con editar este archivo.

export type Treatment = {
  slug: string;
  name: string;
  description: string;
  price: string;
  priceValue: number | null;
  category: "facial" | "corporal" | "depilacion" | "spa";
  duration: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  treatment: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "facial" | "corporal" | "depilacion" | "spa";
  tone: "champagne" | "rose" | "nude" | "beige";
};

export type Stat = {
  // Id estable usado para referenciar una estadística puntual desde otras
  // secciones (por ejemplo el hero) sin repetir el número a mano.
  id: "experience" | "clients" | "recommend";
  value: string;
  label: string;
};

export type WhatsappCta = {
  title: string;
  subtitle: string;
  message: string;
  buttonText?: string;
};

export const siteConfig = {
  business: {
    name: "Lumina Estética",
    // Nombre corto en mayúsculas para el isotipo de la navbar (se usa tal cual, sin transformar).
    shortName: "LUMINA",
    // Nombre corto en formato natural, para usar dentro de oraciones (ej. "recomiendan Lumina").
    displayName: "Lumina",
    // Inicial usada en el favicon y el apple-icon generados dinámicamente.
    monogram: "L",
    slogan: "Tu mejor versión empieza acá.",
    subSlogan:
      "Tratamientos personalizados, tecnología y profesionales que se enfocan en vos.",
    description:
      "Centro de estética en Buenos Aires. Tratamientos faciales, corporales, depilación y bienestar. Reservá tu turno.",
    city: "Buenos Aires",
    country: "Argentina",
    url: "https://lumina-estetica.example.com",
    // Idioma/región para el atributo lang del <html> y el locale de Open Graph.
    locale: "es-AR",
    // Texto legal opcional del footer. Dejar como "" para no mostrar la línea.
    legalNote: "CUIT ficticio a fines demostrativos",
  },
  contact: {
    // Número ficticio en formato internacional sin "+" ni espacios (formato requerido por wa.me).
    whatsappNumber: "5491133445566",
    whatsappDisplay: "+54 9 11 3344-5566",
    phoneDisplay: "(011) 3344-5566",
    email: "hola@luminaestetica.com.ar",
    instagramHandle: "@lumina.estetica",
    instagramUrl: "https://instagram.com/lumina.estetica",
  },
  location: {
    addressLine1: "Av. Santa Fe 2450",
    addressLine2: "Buenos Aires, Argentina",
    neighborhood: "Recoleta",
    mapsQuery: "Av. Santa Fe 2450, Buenos Aires, Argentina",
    // Código de país ISO 3166-1 alfa-2, usado en los datos estructurados (JSON-LD).
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
      slug: "limpieza-facial-profunda",
      name: "Limpieza facial profunda",
      description:
        "Renová y revitalizá tu piel con una limpieza profesional.",
      price: "$25.000",
      priceValue: 25000,
      category: "facial",
      duration: "50 min",
    },
    {
      slug: "limpieza-facial-premium",
      name: "Limpieza facial premium",
      description:
        "Una experiencia completa para una piel más luminosa, suave y saludable.",
      price: "$35.000",
      priceValue: 35000,
      category: "facial",
      duration: "80 min",
    },
    {
      slug: "radiofrecuencia-facial",
      name: "Radiofrecuencia facial",
      description:
        "Estimulación y cuidado para mejorar la apariencia y firmeza de la piel.",
      price: "$30.000",
      priceValue: 30000,
      category: "facial",
      duration: "45 min",
    },
    {
      slug: "depilacion-definitiva",
      name: "Depilación definitiva",
      description:
        "Sesiones personalizadas con tecnología de última generación.",
      price: "Consultar",
      priceValue: null,
      category: "depilacion",
      duration: "Según zona",
    },
    {
      slug: "masajes-relajantes",
      name: "Masajes relajantes",
      description: "Un espacio para desconectar, relajarte y volver a vos.",
      price: "$25.000",
      priceValue: 25000,
      category: "spa",
      duration: "60 min",
    },
    {
      slug: "tratamiento-corporal",
      name: "Tratamiento corporal",
      description: "Protocolos personalizados según tus objetivos.",
      price: "Consultar",
      priceValue: null,
      category: "corporal",
      duration: "Según protocolo",
    },
  ] satisfies Treatment[],
  stats: [
    { id: "experience", value: "+5", label: "años de experiencia" },
    { id: "clients", value: "+2.000", label: "clientas" },
    { id: "recommend", value: "98%", label: "recomendarían Lumina" },
  ] satisfies Stat[],
  gallery: [
    { id: "g1", title: "Hidratación facial", category: "facial", tone: "champagne" },
    { id: "g2", title: "Piel luminosa", category: "facial", tone: "rose" },
    { id: "g3", title: "Modelado corporal", category: "corporal", tone: "nude" },
    { id: "g4", title: "Ritual relajante", category: "spa", tone: "beige" },
    { id: "g5", title: "Depilación láser", category: "depilacion", tone: "champagne" },
    { id: "g6", title: "Radiofrecuencia", category: "facial", tone: "nude" },
    { id: "g7", title: "Masaje descontracturante", category: "spa", tone: "rose" },
    { id: "g8", title: "Tonificación corporal", category: "corporal", tone: "beige" },
  ] satisfies GalleryItem[],
  testimonials: [
    {
      name: "Martina G.",
      quote:
        "Me encantó la atención desde que entré. El lugar es hermoso y salí feliz con el resultado.",
      rating: 5,
      treatment: "Limpieza facial premium",
    },
    {
      name: "Sofía R.",
      quote:
        "Hace meses que vengo y realmente noto muchísima la diferencia.",
      rating: 5,
      treatment: "Radiofrecuencia facial",
    },
    {
      name: "Valentina M.",
      quote:
        "Las chicas son súper profesionales y siempre me recomiendan lo que realmente necesito.",
      rating: 5,
      treatment: "Depilación definitiva",
    },
    {
      name: "Camila F.",
      quote:
        "Un espacio hermoso, prolijo y con muy buena onda. Se nota que les importa cada detalle.",
      rating: 5,
      treatment: "Masajes relajantes",
    },
  ] satisfies Testimonial[],
  faq: [
    {
      question: "¿Necesito reservar con anticipación?",
      answer:
        "Recomendamos reservar con al menos 48 horas de anticipación para asegurar el horario que prefieras, aunque también recibimos consultas de último momento sujetas a disponibilidad.",
    },
    {
      question: "¿Cómo puedo cancelar mi turno?",
      answer:
        "Podés cancelar o reprogramar escribiéndonos por WhatsApp hasta 24 horas antes de tu turno, sin ningún cargo.",
    },
    {
      question: "¿Qué tratamiento es mejor para mi piel?",
      answer:
        "Cada piel es distinta. En tu primera consulta evaluamos tu piel y tus objetivos para recomendarte el protocolo ideal, sin compromiso.",
    },
    {
      question: "¿Aceptan distintos medios de pago?",
      answer:
        "Sí, aceptamos efectivo, débito, crédito y transferencia. También ofrecemos planes de pago para tratamientos en sesiones.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "Estamos en Av. Santa Fe 2450, en el barrio de Recoleta, Buenos Aires, a pocas cuadras de la estación de subte más cercana.",
    },
    {
      question: "¿Cuánto dura cada sesión?",
      answer:
        "Depende del tratamiento: entre 45 y 90 minutos aproximadamente. Te confirmamos la duración exacta al reservar tu turno.",
    },
  ] satisfies FaqItem[],
  about: {
    title: "Un espacio pensado para vos",
    body: "En Lumina creemos que el cuidado personal no es un lujo: es un momento para vos. Trabajamos con tratamientos personalizados, profesionales capacitados y productos seleccionados para brindarte una experiencia que puedas disfrutar desde el primer momento.",
  },
  // Franjas horarias que se ofrecen en el select del formulario de reserva.
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
  // Banners de WhatsApp que aparecen intercalados entre secciones (ver page.tsx).
  ctas: {
    chooseTreatment: {
      title: "¿No sabés qué tratamiento elegir?",
      subtitle:
        "Contanos qué estás buscando y te recomendamos la mejor opción para vos.",
      message:
        "Hola Lumina Estética, no estoy segura de qué tratamiento elegir. ¿Me pueden ayudar a encontrar el ideal para mí?",
    },
    finalPush: {
      title: "Tu próximo turno está a un mensaje de distancia",
      subtitle:
        "Escribinos ahora y coordinamos el día y horario que mejor te quede.",
      message: "Hola Lumina Estética, quiero coordinar un turno.",
      buttonText: "Coordinar por WhatsApp",
    },
  } satisfies Record<string, WhatsappCta>,
  // Enlaces del footer (subconjunto curado de la navegación principal).
  footerNav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Reservar turno", href: "#reservar" },
    { label: "Contacto", href: "#contacto" },
  ],
  seo: {
    // Se combina con business.name para armar el <title> y el título de Open Graph/Twitter.
    titleSuffix: "Tratamientos faciales y corporales",
    keywords: [
      "centro de estética",
      "tratamientos faciales",
      "tratamientos corporales",
      "depilación definitiva",
      "estética Buenos Aires",
      "limpieza facial",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

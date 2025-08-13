// Single-file configuration for client customization
window.CONFIG = {
  // Client Information
  CLIENT_NAME: "CLIENT_NAME",
  BUSINESS_NAME: "BUSINESS_NAME",
  CITY: "CITY",
  PHONE: "99999",
  EMAIL: "email@example.com",
  WHATSAPP: "4917664056418",
  
  // Address
  ADDRESS: {
    STREET: "Street",
    POSTAL_CODE: "11111",
    CITY: "City",
    COUNTRY: "DE"
  },
  
  // Business Hours
  OPENING_HOURS: "Mo-Sa 08:00-18:00",
  
  // SEO
  SITE_TITLE: "SITE_TITLE",
  SITE_DESCRIPTION: "SITE_DESCRIPTION",
  
  // Hero Section
  HERO_HEADLINE: "test",
  HERO_SUBHEADLINE: "test",
  HERO_TAGLINE: "test",
  HERO_CTA_TEXT: "test",
  HERO_BACKGROUND: "https://i.postimg.cc/SKcn3kbD/Whats-App-Image-2025-08-12-at-13-52-31-1.jpg",
  
  // Services Section
  SERVICES_HEADLINE: "test",
  SERVICES_SUBHEADLINE: "DIE FAHRZEUG - FOLIERUNG",
  SERVICES_DESCRIPTION: "Seit über 10 Jahren bringen wir Fahrzeuge in Bestform – von der Lackaufbereitung über Leasingrückläufer bis zur Oldtimerpflege. Perfekter Glanz und langanhaltender Schutz sind unser Anspruch.",
  
  // Main Service Categories
  MAIN_SERVICES: [
    {
      title: "DIE VOLLFOLIERUNG",
      subtitle: "Fahrzeugfolierung mit über 300+ verschiedene Farben in matt & glanz.",
      image: "https://i.postimg.cc/Ss7DyBCG/f72e7568-e366-4d39-bd91-7021ab2b55ce.avif"
    },
    {
      title: "LACKSCHUTZFOLIERUNG",
      subtitle: "Unsichtbar & selbstheilend – Effektiver Schutz gegen Steinschläge & Kratzer!",
      image: "https://i.postimg.cc/6Q4PNbMH/a0ad6478-ef04-475f-bae8-8aa78512e8d8.avif"
    },
    {
      title: "WERBEFOLIERUNG",
      subtitle: "Mobile Werbung, die auffällt – Steigern Sie Ihre Markenpräsenz.",
      image: "https://i.postimg.cc/m261FmSN/Whats-App-Image-2025-08-12-at-13-44-25.jpg"
    },
    {
      title: "FAHRZEUGAUFBEREITUNG",
      subtitle: "Premium Fahrzeugaufbereitung, Detailing und Keramikversiegelung.",
      image: "https://i.postimg.cc/CLw9fNK1/09a70c1a-984d-4d8b-aa0d-9b24bb08272b.avif"
    }
  ],
  
  // Detailed Services
  SERVICES: [
    {
      title: "Lackaufbereitung & Politur",
      description: "Professionelle Lackpflege für perfekten Glanz",
      icon: "Car"
    },
    {
      title: "Oldtimerpflege",
      description: "Spezialpflege für klassische Fahrzeuge",
      icon: "Star"
    },
    {
      title: "Innenraumreinigung & Polsterreinigung",
      description: "Tiefenreinigung für perfekte Sauberkeit",
      icon: "Sparkles"
    },
    {
      title: "Cabrio-Verdeckpflege",
      description: "Spezialbehandlung für Stoffverdecke",
      icon: "Wind"
    },
    {
      title: "Geruchsbeseitigung (Ozon)",
      description: "Effektive Ozonbehandlung gegen Gerüche",
      icon: "Zap"
    },
    {
      title: "Scheinwerfer-Aufbereitung",
      description: "Kristallklare Sicht durch Politur",
      icon: "Eye"
    },
    {
      title: "Motorreinigung mit Trockendampf",
      description: "Schonende Motorraumreinigung",
      icon: "Flame"
    },
    {
      title: "Keramik Coating",
      description: "Premium Versiegelung für optimalen Schutz",
      icon: "Gem"
    },
    {
      title: "Nano- & Scheibenversiegelung",
      description: "Innovative Versiegelung für beste Sicht",
      icon: "Glass"
    }
  ],
  
  // Gallery Images
  GALLERY_IMAGES: [
    {
      src: "https://i.postimg.cc/wj7fhbY6/d2e4ca96-94d8-48ba-b91f-fef3981ae700.avif",
      title: "Hochglanzpolitur",
      category: "Lackaufbereitung"
    },
    {
      src: "https://i.postimg.cc/G21XnL82/fe452e31-eaee-45ac-baf4-8498e7729893.avif",
      title: "Innenraumaufbereitung",
      category: "Interior"
    },
    {
      src: "https://i.postimg.cc/g2QM4qG3/e7cf8a9f-e8c6-45f2-b941-d16186afda69.avif",
      title: "Keramikversiegelung",
      category: "Beschichtung"
    },
    {
      src: "https://i.postimg.cc/kMvp9byd/ceac01fb-fea6-4efd-b6d3-5e2daaffd286.avif",
      title: "Felgenaufbereitung",
      category: "Räder"
    },
    {
      src: "https://i.postimg.cc/W4Z5yF4C/dff8f3e0-aab7-47c6-952b-65e4de2f008f.avif",
      title: "Motorreinigung",
      category: "Motor"
    },
    {
      src: "https://i.postimg.cc/1tpY8nhw/ac9614d9-bc3b-46ff-90c9-c533763304d4.avif",
      title: "Scheinwerferaufbereitung",
      category: "Optik"
    }
  ],
  
  // Reviews
  REVIEWS: [
    {
      name: "Michael K.",
      rating: 5,
      text: "Absolut professionelle Arbeit! Mein BMW sieht aus wie neu. Vadim arbeitet sehr sorgfältig und pünktlich.",
      service: "Lackaufbereitung"
    },
    {
      name: "Sandra M.",
      rating: 5,
      text: "Bin begeistert von der Innenraumreinigung. Jedes Detail wurde perfekt gemacht. Sehr empfehlenswert!",
      service: "Innenraumreinigung"
    },
    {
      name: "Thomas R.",
      rating: 5,
      text: "Die Keramikversiegelung ist ihr Geld wert. Das Auto glänzt nach Monaten immer noch wie am ersten Tag.",
      service: "Keramik Coating"
    },
    {
      name: "Julia H.",
      rating: 5,
      text: "Sehr freundlich und kompetent. Die Geruchsbeseitigung hat perfekt funktioniert. Vielen Dank!",
      service: "Geruchsbeseitigung"
    },
    {
      name: "Robert S.",
      rating: 5,
      text: "Top Service für meinen Oldtimer. Vadim versteht sein Handwerk und behandelt jedes Auto wie sein eigenes.",
      service: "Oldtimerpflege"
    },
    {
      name: "Marina L.",
      rating: 5,
      text: "Faire Preise und ausgezeichnete Qualität. Die Aufbereitung für die Leasingrückgabe war perfekt.",
      service: "Leasingrückläufer"
    }
  ],
  
  // Contact Section
  CONTACT_HEADLINE: "Jetzt Termin",
  CONTACT_SUBHEADLINE: "sichern",
  CONTACT_DESCRIPTION: "Lassen Sie Ihr Fahrzeug von einem Profi behandeln. Schnelle Termine, faire Preise und erstklassige Ergebnisse.",
  CONTACT_CTA_LEFT: "ERHALTE EIN ANGEBOT",
  CONTACT_CTA_RIGHT: "UNSERE LEISTUNGEN FÜR SIE",
  CONTACT_LEFT_IMAGE: "https://i.postimg.cc/K8Mj3xjx/Whats-App-Image-2025-08-12-at-13-52-33-1.jpg",
  CONTACT_RIGHT_IMAGE: "https://i.postimg.cc/HL1xQR85/Whats-App-Image-2025-08-12-at-13-52-34.jpg",
  
  // Form
  FORM_ENDPOINT: "vad-lit@web.de",
  
  // Footer
  FOOTER_DESCRIPTION: "Professionelle Autopflege und Fahrzeugaufbereitung in Bremen. Von der Grundreinigung bis zur Premium-Keramikversiegelung.",
  FOOTER_TAX_NOTE: "Hinweis: Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer ausgewiesen.",
  
  // Demo Mode (set to true to add noindex,nofollow)
  IS_DEMO: false
};
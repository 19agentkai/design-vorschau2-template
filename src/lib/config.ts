// Configuration helpers
declare global {
  interface Window {
    CONFIG: any;
  }
}

export const getConfig = () => {
  if (typeof window === 'undefined' || !window.CONFIG) {
    console.warn('Config not loaded yet');
    return {};
  }
  return window.CONFIG;
};

export const applySeoFromConfig = (config: any) => {
  if (!config) return;
  
  // Update title
  if (config.SITE_TITLE) {
    document.title = config.SITE_TITLE;
  }
  
  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta && config.SITE_DESCRIPTION) {
    descriptionMeta.setAttribute('content', config.SITE_DESCRIPTION);
  }
  
  // Add robots meta if demo mode
  if (config.IS_DEMO) {
    const robotsMeta = document.createElement('meta');
    robotsMeta.name = 'robots';
    robotsMeta.content = 'noindex,nofollow';
    document.head.appendChild(robotsMeta);
  }
  
  // Update JSON-LD if not demo
  if (!config.IS_DEMO && config.CLIENT_NAME && config.ADDRESS) {
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `${config.BUSINESS_NAME} – ${config.CLIENT_NAME}`,
        "description": config.SITE_DESCRIPTION,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": config.ADDRESS.STREET,
          "addressLocality": config.ADDRESS.CITY,
          "postalCode": config.ADDRESS.POSTAL_CODE,
          "addressCountry": config.ADDRESS.COUNTRY
        },
        "url": window.location.origin,
        "telephone": config.PHONE,
        "email": config.EMAIL,
        "openingHours": config.OPENING_HOURS,
        "priceRange": "€€",
        "serviceArea": {
          "@type": "City",
          "name": config.CITY
        }
      };
      existingJsonLd.textContent = JSON.stringify(jsonLd);
    }
  }
};
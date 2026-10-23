import { useEffect } from 'react';
import { practiceConfig } from '@/config';

export function SEOHead() {
  useEffect(() => {
    document.documentElement.lang = 'fr';
    const title = `${practiceConfig.name} | Cabinet dentaire à ${practiceConfig.city}`;
    const description = `Retrouvez les informations pratiques et de soins du cabinet dentaire du ${practiceConfig.name} à ${practiceConfig.city}, wilaya d'${practiceConfig.wilaya} : téléphone, horaires et itinéraire.`;
    document.title = title;

    const setMeta = (selector: string, attribute: string, key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[property="og:image"]', 'property', 'og:image', practiceConfig.imagePath);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', practiceConfig.imagePath);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (practiceConfig.canonicalDomain.trim()) {
      const origin = practiceConfig.canonicalDomain.replace(/\/+$/, '');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${origin}/`;
      setMeta('meta[property="og:url"]', 'property', 'og:url', `${origin}/`);
      setMeta('meta[property="og:image"]', 'property', 'og:image', `${origin}${practiceConfig.imagePath}`);
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${origin}${practiceConfig.imagePath}`);
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: practiceConfig.name,
      telephone: practiceConfig.phoneLink.replace('tel:', ''),
      url: practiceConfig.canonicalDomain || undefined,
      image: practiceConfig.imagePath,
      priceRange: '$$',
      currenciesAccepted: 'DZD',
      address: {
        '@type': 'PostalAddress',
        addressLocality: practiceConfig.city,
        addressRegion: practiceConfig.wilaya,
        addressCountry: 'DZ',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      availableLanguage: ['fr', 'ar'],
    };

    let structuredData = document.getElementById('practice-structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'practice-structured-data';
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(schema);
  }, []);

  return null;
}

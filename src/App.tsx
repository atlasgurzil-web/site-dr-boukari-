import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import { practiceConfig } from './config';

const careCategories = [
  { icon: ShieldCheck, title: 'Implants dentaires', detail: 'Les modalités de cette prise en charge au cabinet restent à confirmer.' },
  { icon: Sparkles, title: 'Esthétique dentaire', detail: 'Les possibilités du cabinet pour ces soins restent à confirmer.' },
  { icon: Check, title: 'Orthodontie', detail: 'La disponibilité de cette prise en charge au cabinet reste à confirmer.' },
  { icon: HeartPulse, title: 'Prothèses dentaires', detail: 'Les possibilités sont à confirmer par le praticien.' },
  { icon: HeartPulse, title: 'Chirurgie buccale', detail: 'Les actes proposés au cabinet dans cette catégorie restent à confirmer.' },
  { icon: Sparkles, title: 'Détartrage et prévention', detail: 'Les modalités proposées au cabinet restent à confirmer.' },
];

const navigation = [
  { href: '#soins', label: 'Les soins' },
  { href: '#praticien', label: 'Le praticien' },
  { href: '#infos', label: 'Informations pratiques' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = 'fr';
    const title = 'Dr Khaled Boukari | Cabinet dentaire à Besbes';
    const description = "Retrouvez les informations pratiques du cabinet dentaire du Dr Khaled Boukari à Besbes, wilaya d'El Tarf : téléphone, horaires et itinéraire.";
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
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Besbes',
        addressRegion: "El Tarf",
        addressCountry: 'DZ',
      },
      openingHours: 'Mo-Su 09:00-17:00',
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

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell min-h-[100dvh]" data-testid="page-practice">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <div className="section-wrap header-inner">
          <a href="#accueil" className="brand" aria-label="Dr Khaled Boukari, accueil" data-testid="link-home">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-copy"><strong>Dr Khaled Boukari</strong><small>Cabinet dentaire · Besbes</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((item) => <a key={item.href} className="nav-link" href={item.href} data-testid={`link-nav-${item.href.slice(1)}`}>{item.label}</a>)}
          </nav>
          <a href={practiceConfig.phoneLink} className="header-call" data-testid="link-call-header"><Phone size={16} aria-hidden="true" /> <span>Appeler</span></a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
          >{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation mobile" hidden={!menuOpen}>
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-mobile-${item.href.slice(1)}`}>{item.label}<ArrowRight size={16} aria-hidden="true" /></a>)}
          <a className="mobile-menu-call" href={practiceConfig.phoneLink} onClick={closeMenu} data-testid="link-mobile-call"><Phone size={16} aria-hidden="true" /> Appeler le 0664676185</a>
        </nav>
      </header>

      <main id="contenu">
        <section className="hero section-wrap" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal">Cabinet dentaire à Besbes</p>
            <h1 id="hero-title" className="reveal reveal-delay-1">Prendre soin de votre sourire,<br /><em>près de chez vous.</em></h1>
            <p className="hero-intro reveal reveal-delay-2">Le cabinet du Dr Khaled Boukari vous accueille à Besbes. Retrouvez ici l’essentiel pour nous contacter et préparer votre visite.</p>
            <div className="hero-actions reveal reveal-delay-2">
              <a className="button-primary" href={practiceConfig.phoneLink} data-testid="link-call-hero"><Phone size={17} aria-hidden="true" /> Appeler le cabinet <ArrowRight size={16} aria-hidden="true" /></a>
              <a className="text-link" href="#infos" data-testid="link-hero-info">Voir les informations <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} aria-hidden="true" /> Besbes, El Tarf</span>
              <i aria-hidden="true" />
              <span><Clock3 size={16} aria-hidden="true" /> 09 h–17 h, tous les jours</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-art">
              <img className="hero-photo" src={practiceConfig.imagePath} width="1536" height="2728" fetchPriority="high" alt="Portrait du Dr Khaled Boukari en blouse blanche dans un cabinet dentaire." data-testid="img-dr-khaled-boukari-hero" />
            </div>
            <div className="floating-location float-note"><span className="location-icon"><MapPin size={17} aria-hidden="true" /></span><span><small>Nous trouver</small><strong>Besbes · El Tarf</strong></span></div>
            <div className="vertical-note" aria-hidden="true">CABINET DENTAIRE · ALGÉRIE</div>
          </div>
        </section>

        <section className="care-section" id="soins" aria-labelledby="care-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">Au cabinet</p><h2 id="care-title">Des soins à aborder<br /><em>en toute simplicité.</em></h2></div>
              <p>Un besoin ou une question ? Le plus simple est d’appeler le cabinet. Le praticien pourra vous indiquer les soins adaptés à votre situation.</p>
            </div>
            <div className="provisional-notice" role="note" data-testid="notice-care-confirmation">
              <span className="notice-mark"><Check size={16} aria-hidden="true" /></span>
              <span><strong>Information à confirmer par le praticien.</strong> Les catégories ci-dessous sont provisoires et doivent être validées avant publication.</span>
            </div>
            <div className="care-grid">
              {careCategories.map(({ icon: Icon, title, detail }, index) => (
                <article className="care-card" key={title} data-testid={`card-care-${index + 1}`}>
                  <div className="care-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div>
                  <span className="care-number">0{index + 1}</span>
                  <h3>{title}</h3><p>{detail}</p>
                  <a className="care-contact" href={practiceConfig.phoneLink} data-testid={`link-care-call-${index + 1}`}>Appeler le cabinet <ArrowRight size={14} aria-hidden="true" /></a>
                </article>
              ))}
            </div>
            <p className="care-footnote">La liste n’est pas une confirmation des soins pratiqués. Pour toute question, contactez le cabinet.</p>
          </div>
        </section>

        <section className="practitioner-section" id="praticien" aria-labelledby="practitioner-title">
          <div className="section-wrap practitioner-layout">
            <div className="portrait-frame">
              <img src={practiceConfig.imagePath} width="1536" height="2728" loading="lazy" alt="Portrait du Dr Khaled Boukari en blouse blanche dans un cabinet dentaire." data-testid="img-dr-khaled-boukari-profile" />
            </div>
            <div className="practitioner-copy">
              <p className="eyebrow">Votre praticien</p>
              <h2 id="practitioner-title">Dr Khaled<br /><em>Boukari.</em></h2>
              {practiceConfig.biography ? <p className="practitioner-bio" data-testid="text-practitioner-biography">{practiceConfig.biography}</p> : (
                <p className="practitioner-bio" data-testid="text-practitioner-introduction">Le cabinet dentaire du Dr Khaled Boukari se situe à Besbes, dans la wilaya d’El Tarf. Pour toute information sur le cabinet ou les soins proposés, contactez-le directement par téléphone.</p>
              )}
              <div className="practitioner-callout"><span className="callout-rule" /><p>Une information claire, un échange direct.<br /><strong>Appelez avant votre venue.</strong></p></div>
              <a href={practiceConfig.phoneLink} className="button-outline" data-testid="link-call-practitioner"><Phone size={16} aria-hidden="true" /> 0664676185 <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="practical-section" id="infos" aria-labelledby="practical-title">
          <div className="section-wrap practical-layout">
            <div className="practical-intro">
              <p className="eyebrow">Avant votre visite</p>
              <h2 id="practical-title">Les informations<br /><em>essentielles.</em></h2>
              <p>Pour toute demande ou précision, contactez directement le cabinet. L’appel est le moyen de contact principal.</p>
            </div>
            <div className="info-panel">
              <div className="info-row">
                <span className="info-icon"><MapPin size={20} aria-hidden="true" /></span>
                <div><span className="info-label">Localisation</span><strong data-testid="text-practice-location">{practiceConfig.location}</strong><a className="info-action" href={practiceConfig.directionsUrl} target="_blank" rel="noopener noreferrer" data-testid="link-directions">Ouvrir l’itinéraire <ArrowRight size={14} aria-hidden="true" /></a></div>
              </div>
              <div className="info-row">
                <span className="info-icon"><Clock3 size={20} aria-hidden="true" /></span>
                <div><span className="info-label">Horaires</span><strong data-testid="text-practice-hours">{practiceConfig.hours}</strong><small>09 h–17 h</small></div>
              </div>
              <div className="info-row">
                <span className="info-icon"><Phone size={20} aria-hidden="true" /></span>
                <div><span className="info-label">Téléphone du cabinet</span><a className="info-phone" href={practiceConfig.phoneLink} data-testid="link-call-contact">0664676185 <ArrowRight size={16} aria-hidden="true" /></a></div>
              </div>
              <a href={practiceConfig.phoneLink} className="button-primary info-button" data-testid="link-call-contact-button"><Phone size={16} aria-hidden="true" /> Contacter le cabinet</a>
            </div>
          </div>
          <div className="map-band">
            <div className="section-wrap map-band-inner">
              <div className="map-mark" aria-hidden="true"><MapPin size={20} /></div>
              <div><strong>Besbes, wilaya d’El Tarf</strong><span>Algérie</span></div>
              <a className="map-link" href={practiceConfig.directionsUrl} target="_blank" rel="noopener noreferrer" data-testid="link-map-directions">Voir l’itinéraire Google Maps <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="section-wrap closing-inner">
            <div className="closing-stamp" aria-hidden="true"><CalendarDays size={22} strokeWidth={1.5} /></div>
            <p className="eyebrow">Un renseignement ?</p>
            <h2 id="closing-title">Un appel suffit<br /><em>pour commencer.</em></h2>
            <p>Pour connaître les modalités d’accueil ou parler de votre besoin, contactez le cabinet du Dr Khaled Boukari.</p>
            <a className="button-primary" href={practiceConfig.phoneLink} data-testid="link-call-closing"><Phone size={17} aria-hidden="true" /> Appeler le 0664676185 <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a href="#accueil" className="brand footer-brand" data-testid="link-footer-home"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-copy"><strong>Dr Khaled Boukari</strong><small>Cabinet dentaire · Besbes</small></span></a>
          <p>Besbes, wilaya d’El Tarf, Algérie</p>
          <a href={practiceConfig.phoneLink} className="footer-phone" data-testid="link-call-footer"><Phone size={15} aria-hidden="true" /> 0664676185</a>
          <a href={practiceConfig.directionsUrl} target="_blank" rel="noopener noreferrer" className="footer-directions" data-testid="link-footer-directions">Itinéraire <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom"><div className="section-wrap"><span>© {new Date().getFullYear()} Dr Khaled Boukari</span><span>Informations pratiques · Besbes, Algérie</span></div></div>
      </footer>

      <a href={practiceConfig.phoneLink} className="mobile-call button-primary" aria-label="Appeler le cabinet au 0664676185" data-testid="link-mobile-fixed-call"><Phone size={17} aria-hidden="true" /> Appeler le cabinet <span>0664676185</span></a>
    </div>
  );
}

export default App;

import { ArrowDown, ArrowRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { practiceConfig } from '@/config';

export function Hero() {
  return (
    <section className="hero section-wrap" id="accueil" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow reveal">Cabinet dentaire à {practiceConfig.city}</p>
        <h1 id="hero-title" className="reveal reveal-delay-1">
          Prendre soin de votre sourire,<br />
          <em>près de chez vous.</em>
        </h1>
        <p className="hero-intro reveal reveal-delay-2">
          Le cabinet du {practiceConfig.name} vous accueille à {practiceConfig.city}. Retrouvez ici l’essentiel pour nous contacter, poser vos questions et préparer votre visite en toute sérénité.
        </p>
        <div className="hero-actions reveal reveal-delay-2">
          <a className="button-primary" href={practiceConfig.phoneLink} data-testid="link-call-hero">
            <Phone size={17} aria-hidden="true" /> Appeler le {practiceConfig.phoneDisplay}
          </a>
          <a
            className="button-whatsapp"
            href={practiceConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-hero"
          >
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp
          </a>
          <a className="text-link" href="#infos" data-testid="link-hero-info">
            Informations pratiques <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={16} aria-hidden="true" /> {practiceConfig.city}, {practiceConfig.wilaya}
          </span>
          <i aria-hidden="true" />
          <span>
            <Clock3 size={16} aria-hidden="true" /> {practiceConfig.hours}
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-art">
          <img
            className="hero-photo"
            src={practiceConfig.imagePath}
            width="1536"
            height="2728"
            fetchPriority="high"
            alt={`Portrait du ${practiceConfig.name} en blouse blanche dans son cabinet dentaire à ${practiceConfig.city}.`}
            data-testid="img-dr-khaled-boukari-hero"
          />
        </div>
        <div className="floating-location float-note">
          <span className="location-icon">
            <MapPin size={17} aria-hidden="true" />
          </span>
          <span>
            <small>Nous trouver</small>
            <strong>{practiceConfig.city} · {practiceConfig.wilaya}</strong>
          </span>
        </div>
        <div className="vertical-note" aria-hidden="true">
          CABINET DENTAIRE · ALGÉRIE
        </div>
      </div>
    </section>
  );
}

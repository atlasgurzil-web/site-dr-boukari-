import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { practiceConfig } from '@/config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <a href="#accueil" className="brand footer-brand" data-testid="link-footer-home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>{practiceConfig.name}</strong>
            <small>Cabinet dentaire · {practiceConfig.city}</small>
          </span>
        </a>
        <p>{practiceConfig.location}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={practiceConfig.phoneLink}
            className="footer-phone"
            data-testid="link-call-footer"
          >
            <Phone size={15} aria-hidden="true" /> {practiceConfig.phoneDisplay}
          </a>
          <a
            href={practiceConfig.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-directions"
            data-testid="link-footer-directions"
          >
            <MapPin size={15} aria-hidden="true" /> Itinéraire Maps <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap">
          <span>© {new Date().getFullYear()} {practiceConfig.name} — Tous droits réservés</span>
          <span>Cabinet de chirurgie dentaire · {practiceConfig.city}, {practiceConfig.wilaya}, Algérie</span>
        </div>
      </div>
    </footer>
  );
}

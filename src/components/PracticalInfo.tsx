import { ArrowRight, Clock3, MapPin, Navigation, Phone } from 'lucide-react';
import { practiceConfig } from '@/config';

export function PracticalInfo() {
  return (
    <section className="practical-section" id="infos" aria-labelledby="practical-title">
      <div className="section-wrap practical-layout">
        <div className="practical-intro">
          <p className="eyebrow">Avant votre visite</p>
          <h2 id="practical-title">
            Les informations<br />
            <em>essentielles.</em>
          </h2>
          <p>
            Pour toute demande d’horaires, de prise en charge ou d’orientation, contactez directement le cabinet par téléphone. L’appel vous permet d’échanger sans intermédiaire.
          </p>
        </div>

        <div className="info-panel">
          <div className="info-row">
            <span className="info-icon">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <span className="info-label">Localisation</span>
              <strong data-testid="text-practice-location">{practiceConfig.location}</strong>
              <a
                className="info-action"
                href={practiceConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-directions"
              >
                Ouvrir l’itinéraire Google Maps <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="info-row">
            <span className="info-icon">
              <Clock3 size={20} aria-hidden="true" />
            </span>
            <div>
              <span className="info-label">Horaires d’accueil</span>
              <strong data-testid="text-practice-hours">{practiceConfig.hours}</strong>
              <small>Ouvert 7 jours sur 7</small>
            </div>
          </div>

          <div className="info-row">
            <span className="info-icon">
              <Phone size={20} aria-hidden="true" />
            </span>
            <div>
              <span className="info-label">Téléphone du cabinet</span>
              <a
                className="info-phone"
                href={practiceConfig.phoneLink}
                data-testid="link-call-contact"
              >
                {practiceConfig.phoneDisplay} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="info-buttons-group">
            <a
              href={practiceConfig.phoneLink}
              className="button-primary info-button"
              data-testid="link-call-contact-button"
            >
              <Phone size={16} aria-hidden="true" /> Appeler le {practiceConfig.phoneDisplay}
            </a>
            <a
              href={practiceConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-directions info-button"
              data-testid="link-directions-contact-button"
            >
              <Navigation size={16} aria-hidden="true" /> Lancer l’itinéraire GPS Maps
            </a>
          </div>
        </div>
      </div>

      <div className="map-band">
        <div className="section-wrap map-band-inner">
          <div className="map-mark" aria-hidden="true">
            <MapPin size={20} />
          </div>
          <div>
            <strong>{practiceConfig.city}, wilaya d’{practiceConfig.wilaya}</strong>
            <span>Algérie</span>
          </div>
          <a
            className="map-link"
            href={practiceConfig.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-map-directions"
          >
            Voir l’itinéraire sur Google Maps <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

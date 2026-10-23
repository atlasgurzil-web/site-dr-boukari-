import { MapPin, Phone } from 'lucide-react';
import { practiceConfig } from '@/config';

export function MobileCallBar() {
  return (
    <div className="mobile-call" aria-label="Actions rapides mobiles">
      <a
        href={practiceConfig.phoneLink}
        className="button-primary"
        aria-label={`Appeler le cabinet au ${practiceConfig.phoneDisplay}`}
        data-testid="link-mobile-fixed-call"
      >
        <Phone size={16} aria-hidden="true" /> Appeler
      </a>
      <a
        href={practiceConfig.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="button-directions"
        aria-label="Ouvrir l’itinéraire Google Maps vers le cabinet"
        data-testid="link-mobile-fixed-directions"
      >
        <MapPin size={16} aria-hidden="true" /> Itinéraire
      </a>
    </div>
  );
}

import { MessageCircle, Phone } from 'lucide-react';
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
        href={practiceConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="button-whatsapp"
        aria-label="Contacter le praticien par WhatsApp"
        data-testid="link-mobile-fixed-whatsapp"
      >
        <MessageCircle size={16} aria-hidden="true" /> WhatsApp
      </a>
    </div>
  );
}

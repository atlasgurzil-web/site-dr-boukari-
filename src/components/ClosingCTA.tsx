import { ArrowRight, CalendarDays, MessageCircle, Phone } from 'lucide-react';
import { practiceConfig } from '@/config';

export function ClosingCTA() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="section-wrap closing-inner">
        <div className="closing-stamp" aria-hidden="true">
          <CalendarDays size={22} strokeWidth={1.6} />
        </div>
        <p className="eyebrow">Un renseignement ?</p>
        <h2 id="closing-title">
          Un appel suffit<br />
          <em>pour commencer.</em>
        </h2>
        <p>
          Pour connaître les disponibilités d’accueil, poser une question ou préparer votre rendez-vous, contactez directement le cabinet du {practiceConfig.name}.
        </p>
        <div className="closing-actions">
          <a
            className="button-primary"
            href={practiceConfig.phoneLink}
            data-testid="link-call-closing"
          >
            <Phone size={17} aria-hidden="true" /> Appeler le {practiceConfig.phoneDisplay} <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            className="button-whatsapp"
            href={practiceConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-closing"
          >
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp direct
          </a>
        </div>
      </div>
    </section>
  );
}

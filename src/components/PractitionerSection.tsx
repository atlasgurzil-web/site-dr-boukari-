import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { practiceConfig } from '@/config';

export function PractitionerSection() {
  return (
    <section className="practitioner-section" id="praticien" aria-labelledby="practitioner-title">
      <div className="section-wrap practitioner-layout">
        <div className="portrait-frame">
          <img
            src={practiceConfig.imagePath}
            width="1536"
            height="2728"
            loading="lazy"
            alt={`Portrait du ${practiceConfig.name} en blouse blanche dans son cabinet dentaire.`}
            data-testid="img-dr-khaled-boukari-profile"
          />
        </div>
        <div className="practitioner-copy">
          <p className="eyebrow">Votre praticien</p>
          <h2 id="practitioner-title">
            Dr Khaled<br />
            <em>Boukari.</em>
          </h2>
          {practiceConfig.biography ? (
            <p className="practitioner-bio" data-testid="text-practitioner-biography">
              {practiceConfig.biography}
            </p>
          ) : (
            <p className="practitioner-bio" data-testid="text-practitioner-introduction">
              Chirurgien-dentiste exerçant à {practiceConfig.city} (wilaya d’{practiceConfig.wilaya}), le {practiceConfig.name} assure un accueil bienveillant et des soins attentifs pour l’ensemble de vos besoins bucco-dentaires. Pour toute information sur les prises en charge ou pour préparer votre visite au cabinet, le contact direct par téléphone est privilégié.
            </p>
          )}
          <div className="practitioner-callout">
            <span className="callout-rule" />
            <p>
              Une écoute attentive, un échange direct.<br />
              <strong>Appelez le cabinet avant votre venue.</strong>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <a href={practiceConfig.phoneLink} className="button-primary" data-testid="link-call-practitioner">
              <Phone size={16} aria-hidden="true" /> Appeler le {practiceConfig.phoneDisplay}
            </a>
            <a
              href={practiceConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline"
              data-testid="link-directions-practitioner"
            >
              <MapPin size={16} aria-hidden="true" /> Voir l’itinéraire <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

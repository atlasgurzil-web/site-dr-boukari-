import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
  Activity,
  type LucideIcon,
} from 'lucide-react';
import { practiceConfig } from '@/config';

interface CareCategory {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const careCategories: CareCategory[] = [
  {
    icon: ShieldCheck,
    title: 'Implants dentaires',
    detail: 'Remplacement fixe et durable des dents manquantes pour retrouver un confort de mastication optimal et un sourire naturel.',
  },
  {
    icon: Sparkles,
    title: 'Esthétique dentaire',
    detail: 'Éclaircissement dentaire, facettes et soins restaurateurs pour sublimer l’éclat et l’harmonie de vos dents.',
  },
  {
    icon: Smile,
    title: 'Orthodontie & Alignement',
    detail: 'Correction des malpositions dentaires chez l’enfant et l’adulte pour une occlusion fonctionnelle et esthétique.',
  },
  {
    icon: HeartPulse,
    title: 'Prothèses dentaires',
    detail: 'Couronnes céramiques, bridges et prothèses adaptées assurant solidité, mastication confortable et longévité.',
  },
  {
    icon: Stethoscope,
    title: 'Chirurgie & Soins des gencives',
    detail: 'Extractions dentaires simples et chirurgicales, soins parodontaux et interventions douces sous anesthésie locale.',
  },
  {
    icon: Activity,
    title: 'Prévention & Détartrage',
    detail: 'Élimination du tartre, polissage, bilans complets et conseils d’hygiène pour prévenir durablement caries et infections.',
  },
];

export function CareSection() {
  return (
    <section className="care-section" id="soins" aria-labelledby="care-title">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Au cabinet</p>
            <h2 id="care-title">
              Des soins complets,<br />
              <em>en toute confiance.</em>
            </h2>
          </div>
          <p>
            Un besoin, une douleur ou une question ? Le cabinet vous accompagne avec une prise en charge attentive et adaptée à votre situation dentaire.
          </p>
        </div>

        <div className="care-grid">
          {careCategories.map(({ icon: Icon, title, detail }, index) => (
            <article className="care-card" key={title} data-testid={`card-care-${index + 1}`}>
              <div className="care-icon">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span className="care-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
              <a
                className="care-contact"
                href={practiceConfig.phoneLink}
                data-testid={`link-care-call-${index + 1}`}
              >
                Appeler le cabinet <ArrowRight size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="care-footnote">
          Pour toute demande de renseignement ou pour convenir d’une consultation, contactez directement le cabinet au {practiceConfig.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}

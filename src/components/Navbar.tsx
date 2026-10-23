import { useEffect, useState } from 'react';
import { ArrowRight, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { practiceConfig } from '@/config';

const navigation = [
  { href: '#soins', label: 'Les soins' },
  { href: '#praticien', label: 'Le praticien' },
  { href: '#infos', label: 'Informations pratiques' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-locked');
    } else {
      document.body.classList.remove('menu-locked');
    }
    return () => {
      document.body.classList.remove('menu-locked');
    };
  }, [menuOpen]);

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
    <header className="site-header">
      <div className="section-wrap header-inner">
        <a href="#accueil" className="brand" aria-label="Dr Khaled Boukari, accueil" data-testid="link-home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>{practiceConfig.name}</strong>
            <small>Cabinet dentaire · {practiceConfig.city}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} className="nav-link" href={item.href} data-testid={`link-nav-${item.href.slice(1)}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={practiceConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp"
            data-testid="link-whatsapp-header"
            aria-label="Contacter le cabinet par WhatsApp"
          >
            <MessageCircle size={15} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <a href={practiceConfig.phoneLink} className="header-call" data-testid="link-call-header">
            <Phone size={15} aria-hidden="true" />
            <span>Appeler</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navigation mobile"
        hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-mobile-${item.href.slice(1)}`}>
            {item.label}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        ))}
        <div className="mobile-nav-actions">
          <a
            className="mobile-menu-call button-primary"
            href={practiceConfig.phoneLink}
            onClick={closeMenu}
            data-testid="link-mobile-call"
          >
            <Phone size={16} aria-hidden="true" /> Appeler le {practiceConfig.phoneDisplay}
          </a>
          <a
            className="button-whatsapp"
            href={practiceConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            data-testid="link-mobile-whatsapp"
          >
            <MessageCircle size={16} aria-hidden="true" /> Échanger par WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}

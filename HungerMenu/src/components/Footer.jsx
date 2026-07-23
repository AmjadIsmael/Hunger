import logo from '../assets/HungerLogo-optimized.jpg'
import './Footer.css'

const copy = {
  en: {
    tagline: 'Bold comfort food, made fresh for every craving.',
    explore: 'Explore',
    links: ['Home', 'Menu', 'Offers', 'Our story'],
    visit: 'Visit',
    address: 'Al Ain, Baalbeck – Qaa',
    hours: 'Daily · 1:00 PM — 12:00 AM',
    contact: 'Contact',
    phone: '+961 71 230 797',
    rights: 'All rights reserved.',
  },
  ar: {
    tagline: 'طعام غني بالنكهات، يُحضّر طازجاً لكل رغبة.',
    explore: 'استكشف',
    links: ['الرئيسية', 'القائمة', 'العروض', 'قصتنا'],
    visit: 'زورونا',
    address: 'العين، بعلبك – القاع',
    hours: 'يومياً · 1:00 ظهراً — 12:00 ليلاً',
    contact: 'تواصل معنا',
    phone: '+961 71 230 797',
    rights: 'جميع الحقوق محفوظة.',
  },
}

function SocialIcon({ name }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="filled" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 4v10.2a4.3 4.3 0 1 1-3.6-4.2" />
      <path d="M15 4c.6 2.5 2.1 4 4.5 4.5" />
    </svg>
  )
}

function Footer({ language }) {
  const content = copy[language]
  const linkTargets = ['#', '#', '#', '#story']

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <img src={logo} alt="" />
            <strong>HUNGERS</strong>
          </a>
          <p>{content.tagline}</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon name="instagram" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <SocialIcon name="tiktok" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>{content.explore}</h3>
          {content.links.map((link, index) => (
            <a href={linkTargets[index]} key={link}>{link}</a>
          ))}
        </div>

        <div className="footer-column">
          <h3>{content.visit}</h3>
          <a
            href="https://maps.app.goo.gl/AnViY961HT2uqv4J9?g_st=ic"
            target="_blank"
            rel="noreferrer"
          >
            {content.address}
          </a>
          <span>{content.hours}</span>
        </div>

        <div className="footer-column">
          <h3>{content.contact}</h3>
          <a href="tel:+96171230797" dir="ltr">{content.phone}</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">@hungers</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HUNGERS. {content.rights}</span>
        <span>Made fresh. Served bold.</span>
      </div>
    </footer>
  )
}

export default Footer

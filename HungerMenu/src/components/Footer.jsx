import logo from '../assets/HungerLogo.webp'
import { WHATSAPP_NUMBER, WHATSAPP_PHONE_DISPLAY } from '../config'
import '../styles/Footer.css'

const copy = {
  en: {
    tagline: 'Bold comfort food, made fresh for every craving.',
    explore: 'Explore',
    links: ['Home', 'Menu', 'Offers', 'Our story'],
    visit: 'Visit',
    address: 'Al Ain, Baalbeck ',
    hours: 'Daily · 1:00 PM — 12:00 AM',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  ar: {
    tagline: 'طعام غني بالنكهات، يُحضّر طازجاً لكل رغبة.',
    explore: 'استكشف',
    links: ['الرئيسية', 'القائمة', 'العروض', 'قصتنا'],
    visit: 'زورونا',
    address: 'العين، بعلبك ',
    hours: 'يومياً · 1:00 ظهراً — 12:00 ليلاً',
    contact: 'تواصل معنا',
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

function Footer({ language, onNavigate }) {
  const content = copy[language]
  const linkTargets = [
    { page: 'Home' },
    { page: 'Menu' },
    { page: 'Offers' },
    { page: 'Home', section: 'story' },
  ]

  const navigate = (event, target) => {
    event.preventDefault()
    onNavigate(target.page)

    window.setTimeout(() => {
      if (target.section) {
        document.getElementById(target.section)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }, 0)
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" onClick={(event) => navigate(event, { page: 'Home' })}>
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
            <a
              href={linkTargets[index].section ? `#${linkTargets[index].section}` : `#${linkTargets[index].page.toLowerCase()}`}
              key={link}
              onClick={(event) => navigate(event, linkTargets[index])}
            >
              {link}
            </a>
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
          <a href={`tel:+${WHATSAPP_NUMBER}`} dir="ltr">{WHATSAPP_PHONE_DISPLAY}</a>
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

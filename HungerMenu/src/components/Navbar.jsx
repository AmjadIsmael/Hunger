import logo from '../assets/HungerLogo.png'
import './Navbar.css'

const navItems = [
  { key: 'Home', icon: 'home' },
  { key: 'Menu', icon: 'menu' },
  { key: 'Offers', icon: 'tag' },
]

const translations = {
  en: { Home: 'Home', Menu: 'Menu', Offers: 'Offers', Cart: 'Cart' },
  ar: { Home: 'الرئيسية', Menu: 'القائمة', Offers: 'العروض', Cart: 'السلة' },
}

function Icon({ name }) {
  const paths = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h10" /></>,
    tag: <><path d="M20 13 12 21l-9-9V4h8l9 9Z" /><circle cx="8" cy="9" r="1.25" /></>,
    cart: <><path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5H18a2 2 0 0 0 2-1.6L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Navbar({
  activePage,
  onNavigate,
  cartCount = 0,
  language,
  onLanguageChange,
}) {
  const labels = translations[language]

  const navigate = (page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <>
      <header className="navbar">
        <button className="brand" type="button" onClick={() => navigate('Home')}>
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span className="brand-name">HUNGERS</span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(({ key }) => (
            <button
              className={activePage === key ? 'active' : ''}
              key={key}
              type="button"
              onClick={() => navigate(key)}
            >
              {labels[key]}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-switcher" aria-label="Choose language">
            <button
              className={language === 'en' ? 'active' : ''}
              type="button"
              lang="en"
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
            <button
              className={language === 'ar' ? 'active' : ''}
              type="button"
              lang="ar"
              onClick={() => onLanguageChange('ar')}
            >
              AR
            </button>
          </div>
          <button
            className="cart-button"
            type="button"
            aria-label={`Cart with ${cartCount} items`}
            onClick={() => navigate('Cart')}
          >
            <Icon name="cart" />
            <span className="cart-label">{labels.Cart}</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(({ key, icon }) => (
          <button
            className={activePage === key ? 'active' : ''}
            key={key}
            type="button"
            onClick={() => navigate(key)}
          >
            <Icon name={icon} />
            <span>{labels[key]}</span>
          </button>
        ))}
        <button
          className={activePage === 'Cart' ? 'active' : ''}
          type="button"
          onClick={() => navigate('Cart')}
        >
          <span className="mobile-cart-icon">
            <Icon name="cart" />
            {cartCount > 0 && <span className="mobile-cart-count">{cartCount}</span>}
          </span>
          <span>{labels.Cart}</span>
        </button>
      </nav>
    </>
  )
}

export default Navbar

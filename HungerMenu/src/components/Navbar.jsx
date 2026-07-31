import logo from '../assets/HungerLogo.webp'
import { CartIcon, HomeIcon, MenuIcon, TagIcon } from './Icons'
import '../styles/Navbar.css'

const navItems = [
  { key: 'Home', icon: 'home' },
  { key: 'Menu', icon: 'menu' },
  { key: 'Offers', icon: 'tag' },
]

const translations = {
  en: { Home: 'Home', Menu: 'Menu', Offers: 'Offers', Cart: 'Cart' },
  ar: { Home: 'الرئيسية', Menu: 'القائمة', Offers: 'العروض', Cart: 'السلة' },
}

const icons = { home: HomeIcon, menu: MenuIcon, tag: TagIcon, cart: CartIcon }

function Icon({ name }) {
  const IconComponent = icons[name]
  return <IconComponent />
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

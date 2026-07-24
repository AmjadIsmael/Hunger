import { useMemo, useState } from 'react'
import menuItems from '../data/menuItems'
import Footer from './Footer'
import './MenuPage.css'

const copy = {
  en: {
    eyebrow: 'Made fresh to order',
    title: 'Our menu',
    intro: 'Big cravings deserve bold flavor. Find your new favorite.',
    categories: {
      all: 'All',
      burgers: 'Burgers',
      chicken: 'Crispy Chicken',
      wraps: 'Wraps',
    },
    add: 'Add to Cart',
    added: 'Added!',
    currency: '$',
  },
  ar: {
    eyebrow: 'نحضّرها طازجة عند الطلب',
    title: 'قائمتنا',
    intro: 'الشهية الكبيرة تستحق نكهة غنية. اكتشف وجبتك المفضلة.',
    categories: {
      all: 'الكل',
      burgers: 'البرغر',
      chicken: 'الدجاج المقرمش',
      wraps: 'الراب',
    },
    add: 'أضف إلى السلة',
    added: 'تمت الإضافة!',
    currency: '$',
  },
}

const categories = ['all', 'burgers', 'chicken', 'wraps']

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5H18a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  )
}

function MenuPage({ language, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [recentlyAdded, setRecentlyAdded] = useState(null)
  const content = copy[language]

  const visibleItems = useMemo(
    () => activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const addItem = (item) => {
    onAddToCart(item)
    setRecentlyAdded(item.id)
    window.setTimeout(() => setRecentlyAdded(null), 900)
  }

  return (
    <main className="menu-page">
      <header className="menu-hero">
        <p>{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <span>{content.intro}</span>
      </header>

      <nav className="category-bar" aria-label={content.title}>
        <div className="category-scroll">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'active' : ''}
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {content.categories[category]}
            </button>
          ))}
        </div>
      </nav>

      <section className="menu-grid">
        {visibleItems.map((item) => (
          <article className="menu-card" key={item.id}>
            <div className="menu-card-image">
              <img src={item.image} alt={item.name[language]} />
              <span className="item-category">{content.categories[item.category]}</span>
            </div>
            <div className="menu-card-body">
              <div className="item-heading">
                <h2>{item.name[language]}</h2>
                <strong><small>{content.currency}</small>{item.price.toFixed(2)}</strong>
              </div>
              <p>{item.description[language]}</p>
              <button
                className={recentlyAdded === item.id ? 'added' : ''}
                type="button"
                onClick={() => addItem(item)}
              >
                <CartIcon />
                {recentlyAdded === item.id ? content.added : content.add}
              </button>
            </div>
          </article>
        ))}
      </section>

      <Footer language={language} />
    </main>
  )
}

export default MenuPage

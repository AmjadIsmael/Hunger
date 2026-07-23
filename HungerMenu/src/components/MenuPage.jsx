import { useMemo, useRef, useState } from 'react'
import menuItems from '../data/menuItems'
import { formatPrice } from '../utils/currency'
import Footer from './Footer'
import './MenuPage.css'

const copy = {
  en: {
    eyebrow: 'Made fresh to order',
    title: 'Our menu',
    intro: 'Big cravings deserve bold flavor. Find your new favorite.',
    categories: {
      all: 'All',
      'chicken-sandwiches': 'Chicken Sandwiches',
      'beef-sandwiches': 'Beef Sandwiches',
      vegetarian: 'Vegetarian',
      'chicken-burgers': 'Chicken Burgers',
      'beef-burgers': 'Beef Burgers',
      appetizers: 'Appetizers',
      dips: 'Dips',
      drinks: 'Drinks',
    },
    add: 'Add to Cart',
    added: 'Added!',
  },
  ar: {
    eyebrow: 'نحضّرها طازجة عند الطلب',
    title: 'قائمتنا',
    intro: 'الشهية الكبيرة تستحق نكهة غنية. اكتشف وجبتك المفضلة.',
    categories: {
      all: 'الكل',
      'chicken-sandwiches': 'ساندويشات الدجاج',
      'beef-sandwiches': 'ساندويشات اللحم',
      vegetarian: 'نباتي',
      'chicken-burgers': 'برغر الدجاج',
      'beef-burgers': 'برغر اللحم',
      appetizers: 'المقبلات',
      dips: 'الصلصات',
      drinks: 'المشروبات',
    },
    add: 'أضف إلى السلة',
    added: 'تمت الإضافة!',
  },
}

const categories = [
  'all',
  'chicken-sandwiches',
  'beef-sandwiches',
  'vegetarian',
  'chicken-burgers',
  'beef-burgers',
  'appetizers',
  'dips',
  'drinks',
]

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
  const menuGridRef = useRef(null)
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

  const changeCategory = (category) => {
    setActiveCategory(category)
    window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      menuGridRef.current?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <main className="menu-page">
      <nav className="category-bar" aria-label={content.title}>
        <div className="category-scroll">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'active' : ''}
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
            >
              {content.categories[category]}
            </button>
          ))}
        </div>
      </nav>

      <section className="menu-grid" ref={menuGridRef}>
        {visibleItems.map((item) => (
          <article className="menu-card" key={item.id}>
            <div className="menu-card-image">
              <img src={item.image} alt={item.name[language]} />
            </div>
            <div className="menu-card-body">
              <div className="item-heading">
                <h2>{item.name[language]}</h2>
                <strong>{formatPrice(item.price)}</strong>
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

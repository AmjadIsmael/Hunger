import { useState } from 'react'
import menuItems from '../data/menuItems'
import { formatPrice } from '../utils/currency'
import Footer from '../components/Footer'
import { CartIcon, TagIcon } from '../components/Icons'
import '../styles/MenuPage.css'
import '../styles/OffersPage.css'

const copy = {
  en: {
    eyebrow: 'Something special',
    title: 'Offers',
    intro: 'Fresh deals made for bigger cravings.',
    add: 'Add to Cart',
    added: 'Added!',
    emptyTitle: 'No offers right now',
    emptyText: 'We are cooking up something special. Check back soon for fresh deals.',
  },
  ar: {
    eyebrow: 'شيء مميز',
    title: 'العروض',
    intro: 'عروض طازجة للشهية الكبيرة.',
    add: 'أضف إلى السلة',
    added: 'تمت الإضافة!',
    emptyTitle: 'لا توجد عروض حالياً',
    emptyText: 'نحضّر لكم عروضاً مميزة. عودوا قريباً لاكتشاف أحدث العروض.',
  },
}

function OffersPage({ language, onAddToCart, onNavigate }) {
  const [recentlyAdded, setRecentlyAdded] = useState(null)
  const content = copy[language]
  const offers = menuItems.filter((item) => item.offer?.active)

  const addItem = (item) => {
    onAddToCart(item)
    setRecentlyAdded(item.id)
    window.setTimeout(() => setRecentlyAdded(null), 900)
  }

  return (
    <main className="menu-page offers-page">
      {offers.length > 0 ? (
        <section className="menu-grid offers-grid">
          {offers.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card-image">
                <img src={item.image} alt={item.name[language]} />
                <span className="offer-badge">
                  -{item.offer.discountPercent}%
                </span>
              </div>
              <div className="menu-card-body">
                <div className="item-heading">
                  <h2>{item.name[language]}</h2>
                  <div className="offer-price">
                    <del>{formatPrice(item.price)}</del>
                    <strong>{formatPrice(item.offer.price)}</strong>
                  </div>
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
      ) : (
        <section className="offers-empty">
          <div className="offers-empty-icon"><TagIcon /></div>
          <h2>{content.emptyTitle}</h2>
          <p>{content.emptyText}</p>
        </section>
      )}

      <Footer language={language} onNavigate={onNavigate} />
    </main>
  )
}

export default OffersPage

import { useState } from 'react'
import menuItems from '../data/menuItems'
import { formatPrice } from '../utils/currency'
import Footer from './Footer'
import './MenuPage.css'
import './OffersPage.css'

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

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5H18a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  )
}

function OfferIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 13 12 21l-9-9V4h8l9 9Z" />
      <circle cx="8" cy="9" r="1.25" />
    </svg>
  )
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
          <div className="offers-empty-icon"><OfferIcon /></div>
          <h2>{content.emptyTitle}</h2>
          <p>{content.emptyText}</p>
        </section>
      )}

      <Footer language={language} onNavigate={onNavigate} />
    </main>
  )
}

export default OffersPage

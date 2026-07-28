import { useEffect, useMemo, useRef, useState } from 'react'
import menuItems from '../data/menuItems'
import Footer from './Footer'
import { formatPrice } from '../utils/currency'
import { COMBO_CATEGORIES, COMBO_EXTRA, getItemPrice } from '../utils/cart'
import './MenuPage.css'

const copy = {
  en: {
       categories: {
      all: 'All',
      'chicken-sandwiches': 'Chicken Sandwiches',
      'beef-sandwiches': 'Beef Sandwiches',
      vegetarian: 'Vegetarian',
      'chicken-burgers': 'Chicken Burgers',
      'beef-burgers': 'Beef Burgers',
      appetizers: 'Appetizers',
      dips: 'Dips',
      drinks: 'Beverages',
    },
    add: 'Add to Cart',
    added: 'Added!',
    close: 'Close',
    customize: 'Customize your order',
    extrasNone: 'No extras selected',
    extrasOne: '1 extra selected',
    currentTotal: 'Current total',
    comboBadge: 'Combo',
    chooseOne: 'Choose one',
    subtotal: 'Subtotal',
    cancel: 'Cancel',
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
      dips: 'الصوصات',
      drinks: 'المشروبات',
    },
    add: 'أضف إلى السلة',
    added: 'تمت الإضافة!',
    close: 'إغلاق',
    customize: 'خصص طلبك',
    extrasNone: 'لا إضافات محددة',
    extrasOne: 'إضافة واحدة محددة',
    currentTotal: 'المجموع الحالي',
    comboBadge: 'وجبة',
    chooseOne: 'اختر واحدة',
    subtotal: 'المجموع الفرعي',
    cancel: 'إلغاء',
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

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

function MenuPage({ language, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [isCombo, setIsCombo] = useState(false)
  const [recentlyAdded, setRecentlyAdded] = useState(null)
  const listRef = useRef(null)
  const isFirstRender = useRef(true)
  const content = copy[language]

  const visibleItems = useMemo(
    () => activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [activeCategory])

  useEffect(() => {
    if (!selectedItem) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedItem])

  const openItem = (item) => {
    setSelectedItem(item)
    setIsCombo(false)
  }

  const addItem = (item, combo) => {
    onAddToCart({ ...item, combo })
    setRecentlyAdded(item.id)
    window.setTimeout(() => setRecentlyAdded(null), 900)
  }

  const addFromModal = (item, combo) => {
    addItem(item, combo)
    window.setTimeout(() => setSelectedItem(null), 500)
  }

  return (
    <main className="menu-page">
      <header className="menu-hero">

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

      <section className="menu-list" ref={listRef}>
        {visibleItems.map((item) => (
          <div
            className="menu-row"
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => openItem(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                openItem(item)
              }
            }}
          >
            <span className="menu-row-image">
              <img src={item.image} alt={item.name[language]} />
            </span>
            <span className="menu-row-info">
              <strong>{item.name[language]}</strong>
              <small>{content.categories[item.category]}</small>
              <em>{formatPrice(getItemPrice(item))}</em>
            </span>
            <button
              className={`menu-row-add${recentlyAdded === item.id ? ' added' : ''}`}
              type="button"
              aria-label={content.add}
              onClick={(event) => {
                event.stopPropagation()
                addItem(item, false)
              }}
            >
              <CartIcon />
            </button>
          </div>
        ))}
      </section>

      {selectedItem && (
        <div className="item-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="item-modal" onClick={(event) => event.stopPropagation()}>
            <div className="item-modal-handle-bar">
              <span className="item-modal-handle" />
            </div>
            <button
              className="item-modal-close"
              type="button"
              aria-label={content.close}
              onClick={() => setSelectedItem(null)}
            >
              <CloseIcon />
            </button>

            <img
              className="item-modal-image"
              src={selectedItem.image}
              alt={selectedItem.name[language]}
            />

            <div className="item-modal-content">
              <div className="item-modal-summary">
                <h2>{selectedItem.name[language]}</h2>
                <p>{selectedItem.description[language]}</p>
                <strong>{formatPrice(selectedItem.price)}</strong>
              </div>

              {COMBO_CATEGORIES.has(selectedItem.category) && (
                <div className="item-modal-customize">
                  <div className="item-modal-customize-heading">
                    <div>
                      <h3>{content.customize}</h3>
                      <span>{isCombo ? content.extrasOne : content.extrasNone}</span>
                    </div>
                    <div className="current-total">
                      <small>{content.currentTotal}</small>
                      <strong>
                        {formatPrice(getItemPrice({ ...selectedItem, combo: isCombo }))}
                      </strong>
                    </div>
                  </div>

                  <div className="combo-section">
                    <div className="combo-section-heading">
                      <span>{content.comboBadge}</span>
                      <small>{content.chooseOne}</small>
                    </div>
                    <button
                      type="button"
                      className={`combo-option${isCombo ? ' selected' : ''}`}
                      onClick={() => setIsCombo((value) => !value)}
                    >
                      <span className="combo-option-radio" />
                      {content.comboBadge}
                      <em>+{formatPrice(COMBO_EXTRA)}</em>
                    </button>
                  </div>
                </div>
              )}

              <div className="item-modal-footer">
                <div className="item-modal-subtotal">
                  <small>{content.subtotal}</small>
                  <strong>
                    {formatPrice(getItemPrice({ ...selectedItem, combo: isCombo }))}
                  </strong>
                </div>
                <div className="item-modal-actions">
                  <button
                    className="item-modal-cancel"
                    type="button"
                    onClick={() => setSelectedItem(null)}
                  >
                    {content.cancel}
                  </button>
                  <button
                    className={`item-modal-add${recentlyAdded === selectedItem.id ? ' added' : ''}`}
                    type="button"
                    onClick={() => addFromModal(selectedItem, isCombo)}
                  >
                    {recentlyAdded === selectedItem.id ? content.added : content.add}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer language={language} />
    </main>
  )
}

export default MenuPage
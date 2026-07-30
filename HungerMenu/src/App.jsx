import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import OffersPage from './components/OffersPage'
import OrderPage from './components/OrderPage'
import SplashScreen from './components/SplashScreen'
import Toast from './components/Toast'
import { getCartKey } from './utils/cart'
import './App.css'

const TOAST_VISIBLE_MS = 2200
const TOAST_EXIT_MS = 250

const pageCopy = {
  en: {
    eyebrow: 'Fresh from the flame',
    intro: 'The Hungers menu is coming together. Pick a section to begin.',
    pages: { Home: 'Home', Menu: 'Menu', Offers: 'Offers', Cart: 'Cart' },
  },
  ar: {
    eyebrow: 'طازج من اللهب',
    intro: 'قائمة هنغرز قيد التحضير. اختر قسماً للبدء.',
    pages: { Home: 'الرئيسية', Menu: 'القائمة', Offers: 'العروض', Cart: 'السلة' },
  },
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [activePage, setActivePage] = useState('Home')
  const [language, setLanguage] = useState('en')
  const [cartItems, setCartItems] = useState([])
  const [toast, setToast] = useState(null)
  const toastTimers = useRef({ hide: null, remove: null })
  const copy = pageCopy[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  useEffect(() => () => {
    window.clearTimeout(toastTimers.current.hide)
    window.clearTimeout(toastTimers.current.remove)
  }, [])

  const dismissToast = () => {
    window.clearTimeout(toastTimers.current.hide)
    window.clearTimeout(toastTimers.current.remove)
    setToast(null)
  }

  const presentToast = (kind, item) => {
    window.clearTimeout(toastTimers.current.hide)
    window.clearTimeout(toastTimers.current.remove)
    setToast({ kind, item, leaving: false })
    toastTimers.current.hide = window.setTimeout(() => {
      setToast((current) => (current ? { ...current, leaving: true } : current))
      toastTimers.current.remove = window.setTimeout(() => setToast(null), TOAST_EXIT_MS)
    }, TOAST_VISIBLE_MS)
  }

  const showAddToast = (item) => presentToast('add', item)
  const showRemoveToast = (item) => presentToast('remove', item)
  const showClearToast = () => presentToast('clear', null)

  const addToCart = (item) => {
    setCartItems((items) => [...items, item])
    showAddToast(item)
  }

  const finishSplash = () => {
    setActivePage('Home')
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={finishSplash} />
  }

  return (
    <div className="site-reveal">
      {toast && (
        <Toast
          kind={toast.kind}
          item={toast.item}
          leaving={toast.leaving}
          language={language}
          onViewCart={() => {
            dismissToast()
            setActivePage('Cart')
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
          }}
        />
      )}
      <div className="app-shell">
        <Navbar
          activePage={activePage}
          onNavigate={setActivePage}
          cartCount={cartItems.length}
          language={language}
          onLanguageChange={setLanguage}
        />

        {activePage === 'Home' ? (
          <HomePage language={language} onNavigate={setActivePage} />
        ) : activePage === 'Menu' ? (
          <MenuPage
            language={language}
            onNavigate={setActivePage}
            onAddToCart={addToCart}
          />
        ) : activePage === 'Offers' ? (
          <OffersPage
            language={language}
            onNavigate={setActivePage}
            onAddToCart={addToCart}
          />
        ) : activePage === 'Cart' ? (
          <OrderPage
            language={language}
            onNavigate={setActivePage}
            cartItems={cartItems}
            onIncrease={(item) => {
              setCartItems((items) => [...items, item])
              if (item.combo) showAddToast(item)
            }}
            onDecrease={(cartKey) => setCartItems((items) => {
              const itemIndex = items.findIndex((item) => getCartKey(item) === cartKey)
              return itemIndex === -1
                ? items
                : items.filter((_, index) => index !== itemIndex)
            })}
            onRemove={(item) => {
              setCartItems((items) => items.filter((cartItem) => cartItem.id !== item.id))
              showRemoveToast(item)
            }}
            onConvertCombo={(sourceItem, toCombo) => {
              setCartItems((items) => {
                const index = items.findIndex(
                  (item) => item.id === sourceItem.id && item.combo === !toCombo,
                )
                return index === -1
                  ? items
                  : items.map((item, i) => (i === index ? { ...item, combo: toCombo } : item))
              })
              if (toCombo) showAddToast({ ...sourceItem, combo: true })
            }}
            onClearCart={() => {
              setCartItems([])
              showClearToast()
            }}
            onBrowseMenu={() => setActivePage('Menu')}
          />
        ) : (
          <main className="page-content">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.pages[activePage]}</h1>
            <p className="page-intro">{copy.intro}</p>
          </main>
        )}
      </div>
    </div>
  )
}

export default App

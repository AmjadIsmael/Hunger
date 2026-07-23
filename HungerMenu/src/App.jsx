import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import OffersPage from './components/OffersPage'
import OrderPage from './components/OrderPage'
import SplashScreen from './components/SplashScreen'
import './App.css'

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
  const copy = pageCopy[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const finishSplash = () => {
    setActivePage('Home')
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={finishSplash} />
  }

  return (
    <div className="site-reveal">
      <div className="app-shell">
        <Navbar
          activePage={activePage}
          onNavigate={setActivePage}
          cartCount={cartItems.length}
          language={language}
          onLanguageChange={setLanguage}
        />

        {activePage === 'Home' ? (
          <HomePage language={language} />
        ) : activePage === 'Menu' ? (
          <MenuPage
            language={language}
            onAddToCart={(item) => setCartItems((items) => [...items, item])}
          />
        ) : activePage === 'Offers' ? (
          <OffersPage
            language={language}
            onAddToCart={(item) => setCartItems((items) => [...items, item])}
          />
        ) : activePage === 'Cart' ? (
          <OrderPage
            language={language}
            cartItems={cartItems}
            onIncrease={(item) => setCartItems((items) => [...items, item])}
            onDecrease={(itemId) => setCartItems((items) => {
              const itemIndex = items.findIndex((item) => item.id === itemId)
              return itemIndex === -1
                ? items
                : items.filter((_, index) => index !== itemIndex)
            })}
            onRemove={(itemId) => setCartItems((items) =>
              items.filter((item) => item.id !== itemId))}
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

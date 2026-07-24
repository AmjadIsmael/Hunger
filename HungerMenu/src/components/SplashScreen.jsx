import { useEffect } from 'react'
import logo from '../assets/HungerLogo.webp'
import './SplashScreen.css'

const SPLASH_DURATION = 2800

function SplashScreen({ onComplete }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(onComplete, SPLASH_DURATION)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  return (
    <div className="splash-screen" role="status" aria-label="Loading HUNGERS">
      <img className="splash-logo" src={logo} alt="HUNGERS" />
    </div>
  )
}

export default SplashScreen

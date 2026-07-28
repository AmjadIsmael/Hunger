import { useEffect, useState } from 'react'
import burgerImage from '../assets/hero-burger-optimized.webp'
import chickenImage from '../assets/hero-crispy-chicken-optimized.webp'
import wrapImage from '../assets/hero-wrap-optimized.webp'
import menuItems from '../data/menuItems'
import Footer from './Footer'
import './HomePage.css'

const copy = {
  en: {
    slides: [
      {
        eyebrow: 'The Hungers signature',
        title: 'Big flavor. Zero compromise.',
        description: 'Double-smashed, flame-kissed, and stacked with everything you crave.',
      },
      {
        eyebrow: 'Golden & crispy',
        title: 'The crunch you crave.',
        description: 'Juicy chicken under a perfectly seasoned, extra-crispy golden coating.',
      },
      {
        eyebrow: 'Wrapped fresh',
        title: 'Big flavor, all wrapped up.',
        description: 'Grilled chicken, crisp vegetables, pickles, and creamy garlic sauce in every bite.',
      },
    ],
    delivery: 'Fast Delivery to Your Door',
    order: 'Order on WhatsApp',
    deliveryText: 'Your Hungers favorites, prepared fresh and delivered hot when the craving hits.',
    storyLabel: 'Our story',
    storyTitle: 'Born from a serious love of good food.',
    storyText:
      'Hungers started with one simple idea: comfort food should feel exciting. What began as late-night recipes shared with friends grew into a kitchen built around bold flavor, quality ingredients, and food made fresh for every order.',
    storyStatOne: 'Freshly made',
    storyStatTwo: 'Menu items',
    locationLabel: 'Find us',
    locationTitle: 'Come hungry. Leave happy.',
    address: 'Al Ain, Baalbeck ',
    hours: 'Open daily · 1:00 PM — 12:00 AM',
    directions: 'Get directions',
  },
  ar: {
    slides: [
      {
        eyebrow: 'توقيع هنغرز',
        title: 'نكهة كبيرة بلا تنازلات.',
        description: 'برغر مشوي على اللهب بطبقتين وكل الإضافات التي تحبها.',
      },
      {
        eyebrow: 'ذهبي ومقرمش',
        title: 'القرمشة التي تحبها.',
        description: 'دجاج طري تحت طبقة ذهبية مقرمشة ومتَبّلة بإتقان.',
      },
      {
        eyebrow: 'راب طازج',
        title: 'نكهة كبيرة في كل لفة.',
        description: 'دجاج مشوي وخضار طازجة ومخلل وصلصة الثوم الكريمية في كل لقمة.',
      },
    ],
    delivery: 'توصيل سريع إلى بابك',
    order: 'اطلب عبر واتساب',
    deliveryText: 'وجباتك المفضلة من هنغرز تُحضّر طازجة وتصل ساخنة عند الطلب.',
    storyLabel: 'قصتنا',
    storyTitle: 'بدأنا من حب حقيقي للطعام الشهي.',
    storyText:
      'بدأت هنغرز بفكرة بسيطة: الطعام المفضل يجب أن يكون مميزاً. ما بدأ كوصفات ليلية بين الأصدقاء أصبح مطبخاً يعتمد على النكهات الغنية والمكونات عالية الجودة وتحضير كل طلب طازجاً.',
    storyStatOne: 'طازج دائماً',
    storyStatTwo: 'أصناف القائمة',
    locationLabel: 'زورونا',
    locationTitle: 'تعال جائعاً وغادر سعيداً.',
    address: 'العين، بعلبك ',
    hours: 'يومياً · 1:00 ظهراً — 12:00 ليلاً',
    directions: 'الاتجاهات',
  },
}

const slideImages = [burgerImage, chickenImage, wrapImage]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.7 1.7c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.6 2.1 2.9 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.2.5.3.5.5 0 .2-.1 1.2-.7 1.8-.6.6-1.4.8-2.3.6-1-.2-2.4-.7-4-2.1-1.2-1.1-2.1-2.4-2.5-3.4-.4-1-.4-1.8-.1-2.5l.8-.9Z" />
    </svg>
  )
}

function HomePage({ language, onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const content = copy[language]
  const menuItemCount = String(menuItems.length).padStart(2, '0')

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((slide) => (slide + 1) % slideImages.length),
      6000,
    )
    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="home-page">
      <section className="hero-carousel" aria-roledescription="carousel">
        {content.slides.map((slide, index) => (
          <article
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            key={slide.title}
            aria-hidden={index !== activeSlide}
          >
            <img src={slideImages[index]} alt="" />
            <div className="hero-overlay" />
            <div className="hero-copy">
              <p className="hero-eyebrow">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
            </div>
          </article>
        ))}

        <div className="carousel-dots">
          {slideImages.map((_, index) => (
            <button
              className={index === activeSlide ? 'active' : ''}
              key={slideImages[index]}
              type="button"
              aria-label={`${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="section-heading">
          <p>{content.storyLabel}</p>
          <h2>{content.storyTitle}</h2>
        </div>
        <div className="story-body">
          <p>{content.storyText}</p>
          <div className="story-stats">
            <span><strong>100%</strong>{content.storyStatOne}</span>
            <span><strong>{menuItemCount}</strong>{content.storyStatTwo}</span>
          </div>
        </div>
      </section>

      <section className="delivery-section">
        <div className="delivery-icon"><WhatsAppIcon /></div>
        <div className="delivery-copy">
          <p>{content.delivery}</p>
          <h2>{content.order}</h2>
          <span>{content.deliveryText}</span>
        </div>
        <a
          className="whatsapp-button"
          href={`https://wa.me/96171230797?text=${encodeURIComponent(content.order)}`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          {content.order}
        </a>
      </section>

      <section className="location-section" id="location">
        <div className="location-card">
          <p className="section-label">{content.locationLabel}</p>
          <h2>{content.locationTitle}</h2>
          <div className="location-details">
            <p>{content.address}</p>
            <p>{content.hours}</p>
          </div>
          <a
            href="https://maps.app.goo.gl/AnViY961HT2uqv4J9?g_st=ic"
            target="_blank"
            rel="noreferrer"
          >
            {content.directions} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <iframe
          className="location-map"
          title={content.address}
          src="https://www.google.com/maps?q=69GC%2BQCR%20Al%20Ain%20Baalbeck%2C%20Qaa&output=embed"
          loading="lazy"
        />
      </section>

      <Footer language={language} onNavigate={onNavigate} />
    </main>
  )
}

export default HomePage

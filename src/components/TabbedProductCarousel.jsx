import { useState, useRef } from 'react'
import './ProductSection.css'

function TabbedProductCarousel({ id, tabs, productsByTab }) {
  const [activeTab, setActiveTab] = useState(tabs[0].key)
  const trackRef = useRef(null)

  const products = productsByTab[activeTab] ?? []

  const scroll = direction => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.product-card')
    const step = card ? card.offsetWidth + 16 : 300
    track.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth'
    })
  }

  return (
    <section id={id} className="product-section tabbed-carousel">
      <div className="product-section-header tabbed-carousel-header">
        <div className="tabbed-carousel-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={
                'tabbed-carousel-tab' +
                (tab.key === activeTab ? ' tabbed-carousel-tab--active' : '')
              }
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tabbed-carousel-body">
        <button
          type="button"
          className="carousel-arrow carousel-arrow--left"
          onClick={() => scroll('prev')}
        >
          ‹
        </button>

        <div className="product-carousel-track" ref={trackRef}>
          {products.map(p => (
            <article key={p.id} className="product-card product-card--carousel">
              <div className="product-image-wrapper">
                <img src={p.image} alt={p.name} />
              </div>

              <div className="product-body">
                {p.badge && (
                  <div className="product-badge-row">
                    {p.discount && (
                      <span className="product-discount-badge">
                        -{p.discount}%
                      </span>
                    )}
                    <span className="product-trending-badge">{p.badge}</span>
                  </div>
                )}

                <h3 className="product-name">{p.name}</h3>

                <div className="product-prices">
                  <span className="product-price-actual">
                    {p.price.toFixed(2)}€
                  </span>
                  {p.oldPrice && (
                    <span className="product-price-old">
                      {p.oldPrice.toFixed(2)}€
                    </span>
                  )}
                </div>


              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow--right"
          onClick={() => scroll('next')}
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default TabbedProductCarousel

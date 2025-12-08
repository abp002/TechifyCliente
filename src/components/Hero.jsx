import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const SLIDES = [
  {
    image: "/img/inicio/pixelSlider.png",
    title: "Descubre el nuevo Google Pixel 10",
    subtitle: "Potencia y fotografía avanzada al mejor precio.",
    link: "/productos/google-pixel-10",
    position: "left",          // texto a la izquierda
  },
  {
    image: "/img/inicio/computerBuilding.png",
    title: "Crea tu PC a medida",
    subtitle: "Elige cada componente y te ayudamos a montarlo paso a paso.",
    link: "/personalizador/pc",
    position: "right",         // texto a la derecha
  },
  {
    image: "/img/inicio/macbookFree.png",
    title: "Descubre el último MacBook M5",
    subtitle: "Rendimiento silencioso y batería para todo el día.",
    link: "/productos/macbook-m5",
    position: "top-center",    // texto centrado arriba
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex(prev => (prev + 1) % SLIDES.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const activeSlide = SLIDES[activeIndex];

  return (
    <section className="hero">
      <div className="hero-main">
        {/* Imágenes */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${
              index === activeIndex ? 'hero-slide--active' : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Texto dinámico */}
        <div className={`hero-content hero-content--${activeSlide.position}`}>
          <h1>{activeSlide.title}</h1>
          <p>{activeSlide.subtitle}</p>
          <button
            className="hero-button"
            onClick={() => navigate(activeSlide.link)}
          >
            Ver producto
          </button>
        </div>

        {/* Dots */}
        <div className="hero-dots">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                index === activeIndex ? 'hero-dot--active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-side-block hero-side-top">
          <img
      src="/img/inicio/alexa.png"
            alt="Alexa "
          />
        </div>
        <div className="hero-side-block hero-side-bottom">
          <img
src="/img/inicio/consola.png"            alt="Consola Gaming"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

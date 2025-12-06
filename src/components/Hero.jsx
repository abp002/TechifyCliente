import { useEffect, useState } from 'react';
import './Hero.css';

const SLIDES = [
  'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
  'https://images.pexels.com/photos/825258/pexels-photo-825258.jpeg',
  'https://images.pexels.com/photos/18104/pexels-photo.jpg',
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-main">
        {SLIDES.map((src, index) => (
          <div
            key={src}
            className={`hero-slide ${index === activeIndex ? 'hero-slide--active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-dots">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === activeIndex ? 'hero-dot--active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-side-block hero-side-top">
          <img
            src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
            alt="Promo superior"
          />
        </div>
        <div className="hero-side-block hero-side-bottom">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
            alt="Promo inferior"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import './PromoBanners.css';

const PROMOS = [
  {
    id: 'student',
    title: 'Descuento para Estudiantes',
    subtitle: '20% DTO. en tecnología seleccionada',
    note: 'Válido con carnet universitario',
    image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
    bg: 'linear-gradient(135deg, #0f172a, #1e293b)',
  },
  {
    id: 'senior',
    title: 'Descuento para la Tercera Edad',
    subtitle: 'Hasta un 15% en productos esenciales',
    note: 'Disponible para mayores de 65 años',
    image: 'https://images.pexels.com/photos/3779701/pexels-photo-3779701.jpeg',
    bg: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
  },
];

function PromoBanners() {
  return (
    <section className="promo-section">
      <div className="promo-grid">
        {PROMOS.map((promo) => (
          <article
            key={promo.id}
            className="promo-card"
            style={{ background: promo.bg }}
          >
            <div className="promo-text">
              <h4>Oferta destacada</h4>
              <h2>{promo.title}</h2>
              <p className="promo-subtitle">{promo.subtitle}</p>
              <p className="promo-note">{promo.note}</p>
              <button className="promo-btn">Ver detalles</button>
            </div>

            <div className="promo-img-wrapper">
              <img src={promo.image} alt={promo.title} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PromoBanners;

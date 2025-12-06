import './InfoStrip.css';

const ITEMS = [
  {
    id: 'shipping',
    title: 'Envío gratuito',
    text: 'En pedidos superiores a 50€',
    icon: '🚚',
  },
  {
    id: 'fast-delivery',
    title: 'Entrega en 24h',
    text: 'En productos seleccionados',
    icon: '📦',
  },
  {
    id: 'returns',
    title: 'Devoluciones gratuitas',
    text: 'Hasta 30 días',
    icon: '↩️',
  },
  {
    id: 'support',
    title: 'Soporte en 24h',
    text: 'Respuesta rápida a tus incidencias',
    icon: '🕒',
  },
];

function InfoStrip() {
  return (
    <section className="info-strip">
      <div className="info-strip-inner">
        {ITEMS.map((item) => (
          <div key={item.id} className="info-item">
            <div className="info-icon">
              <span>{item.icon}</span>
              {/* Cambia esto por <img src="..." /> si quieres iconos propios */}
            </div>
            <div className="info-text">
              <p className="info-title">{item.title}</p>
              <p className="info-sub">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoStrip;

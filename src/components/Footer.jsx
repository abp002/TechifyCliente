import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column footer-brand">
          <h3>Techify</h3>
          <p>
            Tu tienda de tecnología de confianza. Ofertas, novedades
            y asesoramiento para que compres sin complicarte.
          </p>
        </div>

        <div className="footer-column">
          <h4>Otros</h4>
          <ul>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quiénes somos</h4>
          <ul>
            <li><a href="#">Sobre Techify</a></li>
            <li><a href="#">Nuestro equipo</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contactar</h4>
          <ul>
            <li><a href="#">Formulario de contacto</a></li>
            <li><a href="#">Soporte técnico</a></li>
            <li><a href="#">Tiendas físicas</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Comunidad</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Redes sociales</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Techify. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

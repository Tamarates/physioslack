<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <strong>PHYSIOSLACK</strong>
        <p>Conciencia Corporal</p>
        <p class="footer__tagline">Recupera tu movimiento. Vive sin dolor.</p>
      </div>

      <div class="footer__col">
        <h4>Navegación</h4>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/sobre-nosotros">Sobre Nosotros</router-link></li>
          <li><router-link to="/servicios">Servicios</router-link></li>
          <li><a href="https://wa.me/593962870334" target="_blank" rel="noopener noreferrer">Contáctanos</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4>Contacto</h4>
        <ul>
          <li>Calle Guayas 9-40 y Remigio Crespo</li>
          <li>Edificio CTRES, Planta Baja — Cuenca</li>
          <li><a href="tel:+593962870334">+593 96 287 0334</a></li>
          <li><a href="mailto:physioslack@gmail.com">physioslack@gmail.com</a></li>
        </ul>
      </div>

      <div class="footer__col footer__col--map">
        <h4>Ubícanos</h4>
        <a
          class="footer__map"
          href="https://www.google.com/maps?q=Calle+Guayas+9-40+y+Remigio+Crespo,+Cuenca,+Ecuador"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver ubicación en Google Maps"
        >
          <iframe
            title="Ubicación Physioslack"
            src="https://www.google.com/maps?q=Calle+Guayas+9-40+y+Remigio+Crespo,+Cuenca,+Ecuador&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            tabindex="-1"
          ></iframe>
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>&copy; {{ year }} Physioslack — Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--color-navy);
  color: var(--color-mint-light);
  margin-top: 80px;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 24px 40px;
}

.footer__brand strong {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.footer__brand p {
  margin-top: 6px;
  color: var(--color-mint-light);
  opacity: 0.85;
  font-size: 0.9rem;
}

.footer__tagline {
  margin-top: 14px !important;
  max-width: 280px;
}

.footer h4 {
  color: var(--color-white);
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.footer ul li {
  margin-bottom: 10px;
  font-size: 0.9rem;
  opacity: 0.85;
}

.footer ul li a:hover {
  color: var(--color-mint);
  opacity: 1;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 18px 0;
}

.footer__bottom p {
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;
}

.footer__map {
  display: block;
  position: relative;
  border-radius: var(--radius-md, 8px);
  overflow: hidden;
  height: 140px;
}

.footer__map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
}

@media (max-width: 720px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 44px 20px 30px;
  }
}
</style>

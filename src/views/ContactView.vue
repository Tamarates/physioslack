<template>
  <div class="contact">
    <section class="section">
      <div class="container">
        <p class="section-label" style="text-align:center; display:block;">Contáctanos</p>
        <h1 class="section-title">Tu Camino Hacia el Alivio Empieza Aquí</h1>
        <p class="section-subtitle">
          Escríbenos y agenda tu evaluación fisioterapéutica en Cuenca.
        </p>

        <div class="contact__grid">
          <div class="contact__info">
            <h3>Ubicación y Contacto</h3>
            <ul>
              <li>
                <span class="contact__icon">📍</span>
                <span>Calle Guayas 9-40 y Remigio Crespo<br />Edificio CTRES, Planta Baja — Cuenca</span>
              </li>
              <li>
                <span class="contact__icon">📞</span>
                <a href="tel:+593962870334">+593 96 287 0334</a>
              </li>
              <li>
                <span class="contact__icon">✉️</span>
                <a href="mailto:physioslack@gmail.com">physioslack@gmail.com</a>
              </li>
              <li>
                <span class="contact__icon">💬</span>
                <a href="https://wa.me/593962870334" target="_blank" rel="noopener noreferrer">WhatsApp Directo</a>
              </li>
            </ul>

            <div class="contact__map">
              <iframe
                title="Ubicación Physioslack"
                src="https://www.google.com/maps?q=Calle+Guayas+9-40+y+Remigio+Crespo,+Cuenca,+Ecuador&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <form class="contact__form card" @submit.prevent="handleSubmit">
            <h3>Envíanos un mensaje</h3>

            <label>
              Nombre
              <input v-model="form.name" type="text" required placeholder="Tu nombre" />
            </label>

            <label>
              Correo
              <input v-model="form.email" type="email" required placeholder="tucorreo@ejemplo.com" />
            </label>

            <label>
              Contacto
              <input v-model="form.phone" type="tel" placeholder="Tu número de contacto" />
            </label>

            <label>
              Mensaje
              <textarea v-model="form.message" rows="4" required placeholder="Cuéntanos en qué podemos ayudarte"></textarea>
            </label>

            <button type="submit" class="btn btn-primary btn-block">Enviar</button>

            <p v-if="submitted" class="contact__success">
              ¡Gracias, {{ form.name }}! Tu cliente de correo se abrió con tu mensaje listo para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    handleSubmit() {
      const subject = encodeURIComponent(`Contacto desde la web — ${this.form.name}`)
      const body = encodeURIComponent(
        `Nombre: ${this.form.name}\nCorreo: ${this.form.email}\nContacto: ${this.form.phone}\n\nMensaje:\n${this.form.message}`
      )
      window.location.href = `mailto:physioslack@gmail.com?subject=${subject}&body=${body}`
      this.submitted = true
    }
  }
}
</script>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.contact__info h3,
.contact__form h3 {
  margin-bottom: 20px;
}

.contact__info ul li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  font-size: 0.94rem;
}

.contact__icon {
  font-size: 1.1rem;
}

.contact__map {
  margin-top: 24px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
}

.contact__map iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.contact__form {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact__form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-navy);
}

.contact__form input,
.contact__form textarea {
  font-family: var(--font-body);
  font-size: 0.94rem;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: var(--color-cream);
  color: var(--color-text);
  resize: vertical;
}

.contact__form input:focus,
.contact__form textarea:focus {
  outline: 2px solid var(--color-mint);
  outline-offset: 1px;
}

.contact__success {
  font-size: 0.85rem;
  color: var(--color-mint-dark);
  font-weight: 600;
}

@media (max-width: 860px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <p class="section-label">Physioslack · Cuenca</p>
          <h1 class="hero__title">RECUPERA TU MOVIMIENTO.<br />VIVE SIN DOLOR.</h1>
          <p class="hero__subtitle">Physioslack · Conciencia Corporal en Cuenca.</p>
          <a href="https://wa.me/593962870334" target="_blank" rel="noopener noreferrer" class="btn btn-mint">Agendar Evaluación</a>
        </div>
      </div>

      <div class="container hero__categories">
        <router-link
          v-for="cat in categories"
          :key="cat.slug"
          :to="{ path: '/servicios', hash: `#${cat.slug}` }"
          class="hero__category"
        >
          <span class="hero__category-icon" v-html="cat.icon"></span>
          <span>{{ cat.title }}</span>
        </router-link>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="container cta__box">
        <div>
          <h2>¿Listo para moverte sin dolor?</h2>
          <p>Agenda tu evaluación fisioterapéutica y empieza tu camino hacia la recuperación.</p>
        </div>
        <a href="https://wa.me/593962870334" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Contáctanos</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      categories: [
        {
          slug: 'terapia-clinica',
          title: 'Terapia Clínica y Agentes Físicos',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/></svg>'
        },
        {
          slug: 'terapia-manual',
          title: 'Terapia Manual y Alivio',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 11V6a2 2 0 1 1 4 0v5M11 11V4a2 2 0 1 1 4 0v7M15 11V6a2 2 0 1 1 4 0v6c0 4-2 8-7 8s-7-3-7-7v-2a2 2 0 1 1 4 0"/></svg>'
        },
        {
          slug: 'rendimiento-deportivo',
          title: 'Rendimiento Deportivo',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="13" cy="4" r="2"/><path d="m4 20 3-6 3 2 2-4 4 2 4 6M9.5 12 7 8"/></svg>'
        },
        {
          slug: 'especialidades',
          title: 'Especialidades',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 14.6 9H22l-5.8 4.3L18.6 21 12 16.6 5.4 21l2.4-7.7L2 9h7.4z"/></svg>'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: 64px;
  padding-bottom: 40px;
  background:
    radial-gradient(circle at 85% 10%, rgba(79, 184, 220, 0.55), transparent 55%),
    linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-dark) 70%);
  color: var(--color-white);
  overflow: hidden;
}

.hero__inner {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 48px;
}

.hero__text {
  max-width: 640px;
}

.hero__text .section-label {
  color: var(--color-mint);
}

.hero__title {
  color: var(--color-white);
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: 0.01em;
  margin-bottom: 18px;
}

.hero__subtitle {
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.05rem;
  margin-bottom: 32px;
}

.hero__categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.hero__category {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-md);
  padding: 22px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-white);
  transition: background 0.2s ease, transform 0.2s ease;
}

.hero__category:hover {
  background: var(--color-mint);
  color: var(--color-navy-dark);
  transform: translateY(-3px);
}

.hero__category-icon {
  width: 32px;
  height: 32px;
  display: inline-flex;
}

.hero__category-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.cta__box {
  background: var(--color-mint-light);
  border-radius: var(--radius-lg);
  padding: 44px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.cta__box h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.cta__box p {
  color: var(--color-text-light);
  max-width: 420px;
}

@media (max-width: 860px) {
  .hero__categories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cta__box {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }
}
</style>

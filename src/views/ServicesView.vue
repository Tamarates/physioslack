<template>
  <div class="services">
    <section class="section services__hero">
      <div class="container">
        <p class="section-label" style="text-align:center; display:block;">Servicios</p>
        <h1 class="section-title">Terapias y Tratamientos Integrales</h1>
        <p class="section-subtitle">
          Un enfoque completo de rehabilitación, combinando agentes físicos, terapia manual y
          entrenamiento especializado.
        </p>
      </div>
    </section>

    <section class="section services__body">
      <div class="container">
        <div class="services__tabs" role="tablist">
          <button
            v-for="cat in categories"
            :id="cat.slug"
            :key="cat.slug"
            type="button"
            role="tab"
            class="services__tab"
            :class="{ 'services__tab--active': activeSlug === cat.slug }"
            :aria-selected="activeSlug === cat.slug"
            @click="activeSlug = cat.slug"
          >
            <span class="services__tab-icon" v-html="cat.icon"></span>
            {{ cat.title }}
          </button>
        </div>

        <transition name="fade" mode="out-in">
          <div :key="activeSlug" class="services__panel">
            <p class="services__panel-desc">{{ activeCategory.description }}</p>
            <div class="services__items">
              <div v-for="item in activeCategory.items" :key="item.es" class="services__item">
                <span class="services__item-check">✓</span>
                <div class="services__item-text">
                  <strong>{{ item.es }}</strong>
                  <span>{{ item.en }}</span>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="section services__cta">
      <div class="container services__cta-box">
        <h2>¿No sabes qué terapia necesitas?</h2>
        <p>Agenda una evaluación fisioterapéutica y te guiamos hacia el tratamiento ideal.</p>
        <a href="https://wa.me/593962870334" target="_blank" rel="noopener noreferrer" class="btn btn-mint">Agendar Evaluación</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      activeSlug: 'terapia-clinica',
      categories: [
        {
          slug: 'terapia-clinica',
          title: 'Terapia Clínica y Agentes Físicos',
          description: 'Evaluaciones y agentes físicos para reducir el dolor, controlar la inflamación y acelerar la recuperación.',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/></svg>',
          items: [
            { es: 'Evaluación Fisioterapéutica', en: 'Physical Therapy Evaluation' },
            { es: 'Gimnasia Terapéutica', en: 'Therapeutic Gym' },
            { es: 'Terapia Láser', en: 'Laser Therapy' },
            { es: 'Ultrasonido', en: 'Ultrasound Therapy' },
            { es: 'Magnoterapia', en: 'Magnetotherapy' },
            { es: 'Electroestimulación', en: 'Electrostimulation' }
          ]
        },
        {
          slug: 'terapia-manual',
          title: 'Terapia Manual y Alivio',
          description: 'Técnicas manuales y de relajación para liberar tensión, mejorar la movilidad y aliviar el dolor.',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 11V6a2 2 0 1 1 4 0v5M11 11V4a2 2 0 1 1 4 0v7M15 11V6a2 2 0 1 1 4 0v6c0 4-2 8-7 8s-7-3-7-7v-2a2 2 0 1 1 4 0"/></svg>',
          items: [
            { es: 'Terapia Manual', en: 'Manual Therapy' },
            { es: 'Masaje Relajante', en: 'Relaxation Massage' },
            { es: 'Crioterapia', en: 'Cryotherapy' },
            { es: 'Termoterapia', en: 'Thermotherapy' },
            { es: 'Terapia de Estiramiento', en: 'Stretching Therapy' }
          ]
        },
        {
          slug: 'rendimiento-deportivo',
          title: 'Rendimiento Deportivo',
          description: 'Entrenamiento, recuperación y análisis pensados para deportistas de alto rendimiento.',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="13" cy="4" r="2"/><path d="m4 20 3-6 3 2 2-4 4 2 4 6M9.5 12 7 8"/></svg>',
          items: [
            { es: 'Masaje Deportivo', en: 'Sports Massage' },
            { es: 'Entrenamiento Personalizado', en: 'Personalized Training' },
            { es: 'Presoterapia', en: 'Pressotherapy' },
            { es: 'Análisis de Composición Corporal', en: 'Body Composition Analysis' }
          ]
        },
        {
          slug: 'especialidades',
          title: 'Especialidades',
          description: 'Tratamientos avanzados para casos específicos y procesos pre y post quirúrgicos.',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 14.6 9H22l-5.8 4.3L18.6 21 12 16.6 5.4 21l2.4-7.7L2 9h7.4z"/></svg>',
          items: [
            { es: 'Ondas de Choque', en: 'Shockwave Therapy' },
            { es: 'Terapia PRE y POST Operatoria', en: 'Pre- and Post-Operative Therapy' }
          ]
        }
      ]
    }
  },
  computed: {
    activeCategory() {
      return this.categories.find((c) => c.slug === this.activeSlug) || this.categories[0]
    }
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler(hash) {
        const slug = hash ? hash.replace('#', '') : ''
        if (this.categories.some((c) => c.slug === slug)) {
          this.activeSlug = slug
        }
      }
    }
  }
}
</script>

<style scoped>
.services__hero {
  padding-bottom: 24px;
}

.services__tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 36px;
  scroll-margin-top: 100px;
}

.services__tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 999px;
  background: var(--color-white);
  border: 1.5px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.88rem;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.services__tab:hover {
  border-color: var(--color-mint-dark);
  transform: translateY(-1px);
}

.services__tab-icon {
  width: 20px;
  height: 20px;
  display: inline-flex;
}

.services__tab-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.services__tab--active {
  background: var(--color-navy);
  border-color: var(--color-navy);
  color: var(--color-white);
}

.services__panel {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 40px clamp(20px, 5vw, 48px);
}

.services__panel-desc {
  text-align: center;
  color: var(--color-text-light);
  max-width: 560px;
  margin: 0 auto 32px;
}

.services__items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
}

.services__item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 18px;
  background: var(--color-mint-light);
  border-radius: var(--radius-md);
  transition: transform 0.2s ease, background 0.2s ease;
}

.services__item:hover {
  background: var(--color-mint);
  transform: translateY(-2px);
}

.services__item-check {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-navy);
  color: var(--color-white);
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.services__item-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.services__item-text strong {
  font-size: 0.92rem;
  color: var(--color-navy);
}

.services__item-text span {
  font-size: 0.76rem;
  color: var(--color-text-light);
  font-style: italic;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.services__cta-box {
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 48px;
  text-align: center;
}

.services__cta-box h2 {
  color: var(--color-white);
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.services__cta-box p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
}

@media (max-width: 600px) {
  .services__tabs {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 4px;
    margin-left: -18px;
    margin-right: -18px;
    padding-left: 18px;
    padding-right: 18px;
  }

  .services__tab {
    flex-shrink: 0;
  }

  .services__panel {
    padding: 28px 20px;
  }
}
</style>

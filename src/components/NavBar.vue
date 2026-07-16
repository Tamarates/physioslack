<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">
      <router-link to="/" class="navbar__brand" @click="closeMenu">
        <img :src="logo" alt="PhysioSlack - Conciencia Corporal" class="navbar__logo-img" />
      </router-link>

      <button class="navbar__toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Abrir menú">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>

      <nav class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <router-link to="/" class="navbar__link" active-class="navbar__link--active" @click="closeMenu">Inicio</router-link>
        <router-link to="/sobre-nosotros" class="navbar__link" active-class="navbar__link--active" @click="closeMenu">Sobre Nosotros</router-link>
        <router-link to="/servicios" class="navbar__link" active-class="navbar__link--active" @click="closeMenu">Servicios</router-link>
        <a href="https://wa.me/593962870334" target="_blank" rel="noopener noreferrer" class="navbar__link navbar__link--cta" @click="closeMenu">Contáctanos</a>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/images/logo.png'

export default {
  name: 'NavBar',
  data() {
    return {
      logo,
      menuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 12
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247, 250, 252, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid transparent;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}

.navbar--scrolled {
  box-shadow: 0 4px 20px rgba(14, 76, 111, 0.08);
  border-color: var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar__logo-img {
  height: 42px;
  width: auto;
  flex-shrink: 0;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.navbar__link {
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-navy);
  transition: background 0.2s ease, color 0.2s ease;
}

.navbar__link:hover {
  background: var(--color-mint-light);
}

.navbar__link--active {
  background: var(--color-navy);
  color: var(--color-white);
}

.navbar__link--cta {
  background: var(--color-mint);
}

.navbar__link--cta.navbar__link--active {
  background: var(--color-navy);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  padding: 8px;
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-navy);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.navbar__toggle span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__toggle span.open:nth-child(2) {
  opacity: 0;
}
.navbar__toggle span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 860px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--color-white);
    padding: 12px 20px 20px;
    gap: 8px;
    box-shadow: 0 12px 24px rgba(14, 76, 111, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .navbar__links--open {
    max-height: 320px;
  }

  .navbar__link {
    text-align: center;
  }
}
</style>

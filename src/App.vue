<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <SiteFooter />
  <WhatsAppButton />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: { NavBar, SiteFooter, WhatsAppButton }
}
</script>

<template>
  <div class="about">
    <section class="section philosophy">
      <div class="container philosophy__inner">
        <p class="section-label" style="text-align:center; display:block;">Sobre Nosotros</p>
        <h1 class="section-title">Nuestra Filosofía: el Arte del Movimiento</h1>
        <p class="philosophy__text">
          <strong>Conciencia Corporal</strong> es una evaluación fisioterapéutica minuciosa que reconoce tu
          movimiento y te acompaña hacia una recuperación consciente y sostenible en el tiempo. Trabajamos
          desde el análisis funcional del movimiento hasta la aplicación de técnicas basadas en evidencia,
          para que cada paciente entienda su cuerpo y prevenga futuras lesiones en su día a día.
        </p>
      </div>
    </section>

    <section class="section team">
      <div class="container">
        <h2 class="section-title">Nuestro Equipo</h2>
        <p class="section-subtitle">
          Profesionales de la salud especializados en rehabilitación integral.
        </p>
        <div class="team__grid">
          <TeamMemberCard
            name="Mgtr. Francisco Obando Y."
            role="Fisioterapeuta · CEO"
            :photo="franciscoPhoto"
            :specialties="[
              'Fisioterapia Neurológica',
              'Fisioterapia Traumatológica',
              'Fisioterapia Cardiorrespiratoria'
            ]"
            education="Lic. en Fisioterapia (UDLA) · Mgtr. en Administración de Instituciones de Salud"
            experience="Hospital Metropolitano, Hospital Padre Carollo y CAPAC Clínica de Lesiones Deportivas. CEO y fundador de Physioslack."
          />
          <TeamMemberCard
            name="Stefano Espinoza Cela"
            role="Fisioterapeuta"
            :photo="stefanoPhoto"
            :specialties="[
              'Terapia Traumatológica',
              'Terapia Respiratoria',
              'Acondicionamiento Físico Deportivo'
            ]"
            education="Lic. en Fisioterapia (UDLA)"
            experience="Hospital Metropolitano de Quito, Hospital Padre Carollo y gestión fisioterapéutica en carreras nacionales de triatlón, running y ciclismo."
          />
          <TeamMemberCard
            name="Michelle Salamea Ríos"
            role="Nutricionista"
            :photo="michellePhoto"
            :specialties="[
              'Nutrición Clínica',
              'Nutrición Deportiva',
              'Nutrición Pre y Post Operatoria'
            ]"
            education="Lic. en Nutrición y Dietética (Universidad de Cuenca) · Mgtr. en Nutrición y Dietética (UDLA)"
            experience="APROFE, Hospital Vicente Corral Moscoso y Mas Salud & Nutrición, con enfoque en nutrición clínica, deportiva y pre/post operatoria."
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import franciscoPhoto from '@/assets/images/DSC06622-avatar.jpg'
import stefanoPhoto from '@/assets/images/DSC06633-avatar.jpg'
import michellePhoto from '@/assets/images/DSC06702-avatar.jpg'

export default {
  name: 'AboutView',
  components: { TeamMemberCard },
  data() {
    return { franciscoPhoto, stefanoPhoto, michellePhoto }
  }
}
</script>

<style scoped>
.philosophy {
  background: var(--color-navy);
  color: var(--color-white);
  padding-bottom: 64px;
}

.philosophy .section-title {
  color: var(--color-white);
}

.philosophy .section-label {
  color: var(--color-mint);
}

.philosophy__inner {
  text-align: center;
}

.philosophy__text {
  max-width: 760px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  max-width: 1080px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .team__grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 640px;
  }
}

@media (max-width: 640px) {
  .team__grid {
    grid-template-columns: 1fr;
    max-width: 380px;
  }
}
</style>

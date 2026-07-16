<template>
  <article class="team-card card">
    <div class="team-card__photo">
      <img v-if="photo" :src="photo" :alt="name" />
      <span v-else class="team-card__initials">{{ initials }}</span>
    </div>
    <h3 class="team-card__name">{{ name }}</h3>
    <p class="team-card__role">{{ role }}</p>

    <ul class="team-card__chips">
      <li v-for="s in specialties" :key="s">{{ s }}</li>
    </ul>

    <dl v-if="education || experience" class="team-card__details">
      <div v-if="education" class="team-card__detail team-card__detail--education">
        <dt><span class="team-card__detail-icon">🎓</span>Formación</dt>
        <dd>{{ education }}</dd>
      </div>
      <div v-if="experience" class="team-card__detail">
        <dt><span class="team-card__detail-icon">💼</span>Experiencia</dt>
        <dd>{{ experience }}</dd>
      </div>
    </dl>
  </article>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    name: { type: String, required: true },
    role: { type: String, required: true },
    specialties: { type: Array, default: () => [] },
    photo: { type: String, default: '' },
    education: { type: String, default: '' },
    experience: { type: String, default: '' }
  },
  computed: {
    initials() {
      return this.name
        .split(' ')
        .filter((_, i, arr) => i === 0 || i === arr.length - 1)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    }
  }
}
</script>

<style scoped>
.team-card {
  padding: 30px 26px 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.team-card__photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--color-mint-light);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 14px;
  border: 3px solid var(--color-mint);
}

.team-card__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card__initials {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-navy);
}

.team-card__name {
  font-size: 1.05rem;
  font-weight: 700;
}

.team-card__role {
  font-size: 0.8rem;
  color: var(--color-mint-dark);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.team-card__chips {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  gap: 8px;
  min-height: 104px;
  margin-bottom: 20px;
}

.team-card__chips li {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-navy);
  background: var(--color-mint-light);
  padding: 6px 12px;
  border-radius: 999px;
}

.team-card__details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid var(--color-border);
}

.team-card__detail {
  text-align: left;
}

.team-card__detail dt {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-light);
  margin-bottom: 4px;
}

.team-card__detail-icon {
  font-size: 0.95rem;
}

.team-card__detail dd {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--color-text);
}

.team-card__detail--education dd {
  min-height: 3em;
}
</style>

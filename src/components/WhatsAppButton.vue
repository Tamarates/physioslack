<template>
  <a
    class="whatsapp-fab"
    href="https://wa.me/593962870334"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escríbenos por WhatsApp"
  >
    <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.55 1.78 6.43L4 29l7.73-1.72a11.9 11.9 0 0 0 4.29.8c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.64 3 16.02 3Zm0 21.94a9.8 9.8 0 0 1-5-1.37l-.36-.21-4.58 1.02 1.05-4.46-.24-.37a9.8 9.8 0 0 1-1.5-5.53c0-5.44 4.43-9.87 9.9-9.87 5.45 0 9.88 4.43 9.88 9.87 0 5.45-4.43 9.92-9.15 9.92Zm5.4-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton'
}
</script>

<style scoped>
.whatsapp-fab {
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.25);
  z-index: 200;
  transition: transform 0.2s ease;
}

.whatsapp-fab:hover {
  transform: scale(1.08);
}

.whatsapp-fab svg {
  width: 28px;
  height: 28px;
}

@media (max-width: 600px) {
  .whatsapp-fab {
    width: 50px;
    height: 50px;
    right: 16px;
    bottom: 16px;
  }
  .whatsapp-fab svg {
    width: 24px;
    height: 24px;
  }
}
</style>

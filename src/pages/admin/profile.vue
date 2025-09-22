<script setup lang="ts">
defineOptions({ name: 'ProfilePage' })
</script>

<template>
  <section class="container">
    <div class="avatar">Foto de perfil (placeholder)</div>
    <h2>Juan Jose</h2>
    <p>La libertad, santa tecla</p>

    <div class="menu">
      <RouterLink to="/logout" class="item">Cerrar sesión</RouterLink>
      <RouterLink to="/plants" class="item">Mis Plantas</RouterLink>
      <RouterLink to="/settings" class="item">Configuración</RouterLink>
      <RouterLink to="/privacy" class="item">Política de privacidad</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
  text-align: center;
}
.avatar {
  background: #e5e7eb;
  width: 120px;
  height: 120px;
  border-radius: 9999px;
  margin: 16px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.item {
  background: #f3f4f6;
  padding: 12px;
  border-radius: 12px;
  text-decoration: none;
  color: #111827;
}
</style>

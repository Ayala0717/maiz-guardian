<template>
  <section class="container">
    <div class="avatar">
      <img src="../../assets/person.jpeg" alt="avatar" />
    </div>
    <h2>Juan Jose</h2>
    <div class="info">
      <iconify-icon icon="gridicons:location" width="24" height="24" />
      <p>La libertad, santa tecla</p>
    </div>

    <div class="menu">
      <RouterLink to="/auth/login" class="item">
        <div class="item-icon">
          <iconify-icon icon="mdi:logout" width="24" height="24" />
          Cerrar sesión
        </div>
      </RouterLink>
      <RouterLink to="/admin/plants" class="item">
        <div class="item-icon">
          <iconify-icon icon="mdi:leaf" width="24" height="24" />
          Mis Plantas
        </div>
      </RouterLink>
      <RouterLink to="#" class="item">
        <div class="item-icon">
          <iconify-icon icon="bx:bx-cog" width="24" height="24" />
          Configuración
        </div>
      </RouterLink>
      <RouterLink to="#" class="item">
        <div class="item-icon">
          <iconify-icon icon="bx:bx-shield" width="24" height="24" /> Política
          de privacidad
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'ProfilePage',
}
</script>
<script setup lang="ts">
defineOptions({ name: 'ProfilePage' })
</script>

<style scoped>
.container {
  padding: 16px;
  text-align: center;

  .info {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #055b1d;
  }

  p {
    font-size: 16px;
    color: #055b1d;
  }
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

  img {
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    object-fit: cover;
    border: 4px solid #fff;
  }
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
  align-content: center;
  color: #111827;
}

.item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>

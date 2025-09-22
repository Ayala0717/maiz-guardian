<script setup lang="ts">
defineOptions({ name: 'PlantsListPage' })
</script>

<template>
  <section class="container">
    <h2>Mis Plantas</h2>
    <div class="grid">
      <div class="card">Tarjeta planta (placeholder)</div>
      <div class="card">Tarjeta planta (placeholder)</div>
      <div class="card">Tarjeta planta (placeholder)</div>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.card {
  background: #e8f5e9;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
}
</style>

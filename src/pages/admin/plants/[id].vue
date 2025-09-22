<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = String(route.params.id || '')

defineOptions({ name: 'PlantDetailPage' })
</script>

<template>
  <section class="container">
    <h2>Detalle de Planta {{ id }}</h2>
    <div class="header">Imagen de planta (placeholder)</div>
    <div class="card">
      Información, ubicación, fecha, descripción (placeholder)
    </div>
    <div class="actions">
      <button>Guardar</button>
      <button>Reintentar con IA</button>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
}
.header {
  background: #e5e7eb;
  height: 160px;
  border-radius: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
}
.actions {
  display: flex;
  gap: 12px;
}
</style>

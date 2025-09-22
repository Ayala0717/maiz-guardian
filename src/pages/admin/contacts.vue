<script setup lang="ts">
defineOptions({ name: 'ContactsPage' })
</script>

<template>
  <section class="container">
    <header class="header">
      <h2>Seleccionar Trabajadores</h2>
      <RouterLink to="/contacts/add" class="btn-sm">+ Agregar</RouterLink>
    </header>
    <input class="input" placeholder="Buscar contacto..." />
    <div class="list">Lista de contactos (placeholder)</div>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  margin-bottom: 12px;
}
.btn-sm {
  background: #065f46;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
}
.list {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 12px;
}
</style>

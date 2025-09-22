<script setup lang="ts">
defineOptions({ name: 'CameraNamePage' })
</script>

<template>
  <section class="container">
    <div class="preview">Imagen tomada (placeholder)</div>
    <label>Nombre</label>
    <input class="input" placeholder="Ingrese nombre..." />
    <button class="btn">Guardar para analizar luego</button>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
}
.preview {
  background: #e5e7eb;
  height: 180px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  margin: 8px 0 16px;
}
.btn {
  width: 100%;
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
}
</style>

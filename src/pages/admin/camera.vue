<script setup lang="ts">
defineOptions({ name: 'CameraCapturePage' })
</script>

<template>
  <section class="camera">
    <div class="viewport">Vista de cámara (placeholder)</div>
    <div class="controls">
      <RouterLink to="/camera/name" class="btn">Tomar foto</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.camera {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}
.viewport {
  flex: 1;
  background: #d1fae5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.controls {
  padding: 16px;
  text-align: center;
}
.btn {
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
}
</style>

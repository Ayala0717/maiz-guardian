<template>
  <div class="app-wrapper">
    <main class="page-content">
      <slot />
    </main>

    <nav class="bottom-nav">
      <RouterLink
        to="/admin/home"
        class="tab"
        :class="{ active: isActive('/home') }">
        <img src="../assets/home.svg" alt="Home" />
      </RouterLink>
      <RouterLink
        to="/admin/inspections"
        class="tab"
        :class="{ active: isActive('/inspections') }">
        <img src="../assets/lines.svg" alt="Inspections" />
      </RouterLink>
      <RouterLink
        to="/admin/camera"
        class="tab camera"
        :class="{ active: isActive('/camera') }">
        <img src="../assets/camera.svg" alt="Camera" />
      </RouterLink>
      <RouterLink
        to="/admin/plants"
        class="tab"
        :class="{ active: isActive('/plants') }">
        <img src="../assets/eye.svg" alt="Plants" />
      </RouterLink>
      <RouterLink
        to="/admin/profile"
        class="tab"
        :class="{ active: isActive('/profile') }">
        <img src="../assets/profile.svg" alt="Profile" />
      </RouterLink>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path = '') => route.path.startsWith(path)
</script>

<style scoped>
.page-content {
  flex: 1 1 auto;
  padding-bottom: 72px; /* reserve space for bottom nav */
}
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 50;
}
.tab {
  color: #065f46; /* dark green */
  text-decoration: none;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
}
.tab.active {
  color: #065f46;
  border-top: 3px solid #065f46;
  padding-top: 3px;
}
.camera {
  font-weight: 800;
  img {
    position: absolute;
    bottom: 1.5rem;
    right: 0;
    left: 0;
    margin: auto;
  }
}
</style>

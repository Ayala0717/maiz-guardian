<template>
  <div class="contact-info">
    <iconify-icon icon="qlementine-icons:user-16" width="32" height="32" />
    <div>
      <p>{{ props.name }}</p>
      <p>{{ props.phone }}</p>
    </div>
    <iconify-icon icon="mdi-light:phone" width="24" height="24" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactInfo',
}
</script>

<script setup lang="ts">
interface Props {
  id: number | string
  name: string
  phone: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.contact-info {
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: #f3f4f6;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    object-fit: cover;
  }
}
</style>

<template>
  <div class="plant-box-container" @click="handleClick">
    <img :src="props.img" alt="plant image" />
    <h3>{{ props.plantName }}</h3>
    <p>{{ props.status }}</p>
  </div>
</template>

<script lang="ts">
import type { PlantComponent as Props } from '~/types/models/plantComponent'

export default {
  name: 'PlantBox',
}
</script>

<script setup lang="ts">
const props = defineProps<Props>()

const emit = defineEmits(['handleClick'])

function handleClick() {
  const plantInfo = {
    id: props.id,
    img: props.img,
    plantName: props.plantName,
    location: props.location,
    date: props.date,
    contactName: props.contactName,
    contactRole: props.contactRole,
    status: props.status,
  }

  emit('handleClick', plantInfo)
}
</script>

<style scoped>
.plant-box-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-color: #055b1d;
  border-width: 2px;
  background-color: #e6f2e9;
  border-radius: 16px;
  cursor: pointer;

  img {
    width: 100%;
    height: 108px;
    object-fit: cover;
    border-radius: 12px;
  }

  h3,
  p {
    padding-left: 10px;
  }

  h3 {
    font-size: 20px;
    color: #141414;
  }

  p {
    font-size: 16px;
    color: #0e0e0e;
    padding-bottom: 12px;
  }
}
</style>

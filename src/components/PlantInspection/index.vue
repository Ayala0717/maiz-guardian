<template>
  <div class="plant-inspect-card" @click="handleClick">
    <img :src="props.img" alt="plant image" />
    <div class="plant-info">
      <div>
        <h4 class="plant-name">{{ props.plantName }}</h4>
        <p class="plant-location">{{ props.location }}</p>
      </div>
    </div>
    <div class="plant-info">
      <p class="plant-status">{{ props.status }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { PlantComponent as Props } from '~/types/models/plantComponent'

export default {
  name: 'PlantInspection',
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
.plant-inspect-card {
  background: #dce8d6;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  gap: 16px;
  justify-content: center;
  cursor: pointer;

  img {
    width: 94px;
    height: 104px;
    border-radius: 12px;
    object-fit: cover;
  }

  .plant-name {
    font-size: 14px;
    font-weight: 700;
    color: #002140;
  }

  .plant-location {
    font-size: 12px;
    color: #002140;
  }

  .plant-status {
    font-size: 16px;
    font-weight: 700;
    color: #002140;
  }
}

.plant-info {
  margin-top: 10px;
}
</style>

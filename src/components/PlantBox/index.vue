<template>
  <div class="plant-box-container">
    <div class="plant-box-info" @click="handleClick">
      <img :src="props.img" alt="plant image" />
      <h3>{{ props.plantName }}</h3>
      <p>{{ props.status }}</p>
    </div>
    <iconify-icon
      v-if="props.removeIcon"
      icon="mdi:delete"
      width="24"
      height="24"
      @click="handleRemoveClick" />
  </div>
</template>

<script lang="ts">
import { deletePlant } from '~/utils/database'
import type { PlantComponent as Props } from '~/types/models/plantComponent'
import { confirm } from '~/utils/alerts'

export default {
  name: 'PlantBox',
}
</script>

<script setup lang="ts">
const props = defineProps<Props>()

const emit = defineEmits(['handleClick', 'removedPlant'])

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

async function handleRemoveClick() {
  const alertConfirm = await confirm({
    title: 'Confirmación',
    text: '¿Estás seguro de que quieres eliminar esta planta?',
    icon: 'warning',
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  })

  if (!alertConfirm) return

  await deletePlant(props.id)

  emit('removedPlant', props.id)
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

  .plant-box-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

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
}
</style>

<template>
  <div class="card">
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
export default {
  name: 'PlantInspection',
}
</script>

<script setup lang="ts">
interface Props {
  img: string
  plantName: string
  location: string
  status: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.card {
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

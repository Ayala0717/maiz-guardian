<template>
  <div class="plant-box-container">
    <img :src="props.img" alt="plant image" />
    <h3>{{ props.plantName }}</h3>
    <p>{{ props.plantStatus }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PlantBox',
}
</script>

<script setup lang="ts">
interface Props {
  img: string
  plantName: string
  plantStatus: string
}

const props = defineProps<Props>()
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

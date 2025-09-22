<template>
  <section class="container">
    <h2>Mis Plantas</h2>
    <div class="grid">
      <PlantBox
        v-for="plant in state.plants"
        :id="plant.id"
        :key="plant.id"
        :img="plant.img"
        :plant-name="plant.plantName"
        :status="plant.status"
        :location="plant.location"
        :date="plant.date"
        :contact-name="plant.contactName"
        :contact-role="plant.contactRole"
        @handle-click="handleClick" />
    </div>
  </section>
</template>

<script lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { PlantComponent } from '~/types/models/plantComponent'
import { getAllPlants } from '~/utils/database'

export default {
  name: 'PlantsListPage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'PlantsListPage' })

const route = useRouter()

const state = reactive({
  plants: [] as PlantComponent[],
})

onMounted(() => {
  getPlants()
})

async function getPlants() {
  const respose = await getAllPlants()

  state.plants = respose
}

const handleClick = (plantInfo: PlantComponent) => {
  route.push({ name: 'plant-details', params: { id: plantInfo.id } })
}
</script>

<style scoped>
.container {
  padding: 16px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 36px;
}
.card {
  background: #e8f5e9;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
}
</style>

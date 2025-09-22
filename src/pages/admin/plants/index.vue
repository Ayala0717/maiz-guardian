<template>
  <section class="container">
    <h2>Mis Plantas</h2>
    <div class="grid">
      <PlantBox
        v-for="plant in plants"
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
import { useRouter } from 'vue-router'
import type { PlantComponent } from '~/types/models/plantComponent'

export default {
  name: 'PlantsListPage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'PlantsListPage' })

const route = useRouter()

const plants: PlantComponent[] = [
  {
    id: 'lemon',
    img: 'https://images.unsplash.com/photo-1682330681951-17b874c6b37a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    plantName: 'Árbol de Limón',
    status: 'Sick',
    location: 'Monserat Family',
    date: '2024/01/01',
    contactName: 'Jose Escobar',
    contactRole: 'Agricultor',
  },
  {
    id: 'mango-tree',
    img: 'https://images.unsplash.com/photo-1688492596644-b0e68aa86477?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    plantName: 'Árbol de Mango',
    status: 'Healthy',
    location: 'Monserat Family',
    date: '2024/12/04',
    contactName: 'Maria Gonzalez',
    contactRole: 'Agricultora',
  },
  {
    id: 'cactus',
    img: 'https://plus.unsplash.com/premium_photo-1681290358247-c160fc097bdb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    plantName: 'Cactus',
    status: 'Healthy',
    location: 'Monserat Family',
    date: '2024/01/01',
    contactName: 'Jose Escobar',
    contactRole: 'Agricultor',
  },
  {
    id: 'tomato',
    img: 'https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    plantName: 'Tomate',
    status: 'Sick',
    location: 'Monserat Family',
    date: '2024/12/04',
    contactName: 'Maria Gonzalez',
    contactRole: 'Agricultora',
  },
  {
    id: 'grapes',
    img: 'https://plus.unsplash.com/premium_photo-1692813664205-d567a6829a10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    plantName: 'Uvas',
    status: 'Healthy',
    location: 'Monserat Family',
    date: '2024/12/04',
    contactName: 'Maria Gonzalez',
    contactRole: 'Agricultora',
  },
]

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

<template>
  <section>
    <header class="hero">
      <div>
        <h2>Jose Escobar</h2>
        <p>San Jacinto</p>
      </div>
    </header>

    <div class="container">
      <h3>Last Inspection</h3>
      <div class="plant-container">
        <PlantInspection
          id="trigo"
          img="https://images.unsplash.com/photo-1529707481702-65fc20926103?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=640&s=b7d0d3e9f1c1f9d1d9a1e1a0e0a0"
          plant-name="Trigo"
          location="Monserat Family"
          status="Sick"
          date="2023/01/03"
          contact-name="Maria Gonzalez"
          contact-role="Agricultora"
          @handle-click="handleClick" />
        <PlantInspection
          id="mango"
          img="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          plant-name="Mango"
          location="Monserat Family"
          status="Healty"
          date="2023/01/02"
          contact-name="Josefa Guitierrez"
          contact-role="Agricultora"
          @handle-click="handleClick" />
        <PlantInspection
          id="cactus"
          img="https://images.unsplash.com/photo-1517025423291-770fb99ae547?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          plant-name="Cactus"
          location="Monserat Family"
          status="Healty"
          date="2025/01/10"
          contact-name="Jose Perez"
          contact-role="Agricultor"
          @handle-click="handleClick" />
      </div>

      <div class="my-plants">
        <h3>My plants</h3>
        <div class="my-plants-container">
          <PlantBox
            id="cactus"
            img="https://plus.unsplash.com/premium_photo-1681290358247-c160fc097bdb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            plant-name="Cactus"
            plant-status="Healthy"
            location="Monserat Family"
            date="2024/01/01"
            contact-name="Jose Escobar"
            contact-role="Agricultor"
            @handle-click="handleClick" />
          <PlantBox
            id="lemon-tree"
            img="https://images.unsplash.com/photo-1605185189315-fc269c231e41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            plant-name="Lemon tree"
            plant-status="Sick"
            location="Monserat Family"
            date="2024/12/04"
            contact-name="Maria Gonzalez"
            contact-role="Agricultora"
            @handle-click="handleClick" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { LOCAL_STORAGE_KEYS } from '~/contants/localStorage'
import type { PlantComponent } from '~/types/models/plantComponent'
import { setLocalStorage } from '~/utils/storage'

export default {
  name: 'HomePage',
}
</script>

<script lang="ts" setup>
defineOptions({ name: 'HomePage' })

const route = useRouter()

const handleClick = (plantInfo: PlantComponent) => {
  setLocalStorage(LOCAL_STORAGE_KEYS.PLANT, JSON.stringify(plantInfo))
  route.push({ name: 'plant-details', params: { id: plantInfo.id } })
}
</script>

<style scoped>
.container {
  padding: 24px;

  h3 {
    margin: 16px 0 8px;
    font-size: 18px;
    font-weight: 700;
  }
}
.hero {
  background: #0b5f2a;
  color: #fff;
  padding: 24px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 16px;
  height: auto;

  h2 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
  }
}
.plant-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.my-plants-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.my-plants {
  margin-top: 32px;
}

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
    object-fit: cover;
    border-radius: 12px;
  }
}
</style>

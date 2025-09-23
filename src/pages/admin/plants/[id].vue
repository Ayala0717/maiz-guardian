<template>
  <header class="hero">
    <div class="header-container">
      <span class="back-button" @click="router.back()"> &laquo; </span>
      <img :src="state.plantDetail.img" alt="plant image" />
    </div>
  </header>
  <section class="container">
    <div class="contact-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/709/709699.png"
        alt="user icon" />
      <div>
        <p class="contact-name">{{ state.plantDetail.contactName }}</p>
        <p class="contact-role">{{ state.plantDetail.contactRole }}</p>
      </div>

      <img
        src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png"
        alt="phone icon" />
    </div>
    <section class="plant-details">
      <h2>Detalle de Planta: {{ state.plantDetail.plantName }}</h2>
      <div class="card">
        <div class="plant-info">
          <iconify-icon icon="mdi:map-marker-outline" width="24" height="24" />
          <div>
            <h3>Ubicación</h3>
            <p>{{ state.plantDetail.location }}</p>
          </div>
        </div>
        <div class="plant-info">
          <iconify-icon icon="mdi:calendar-clock" width="24" height="24" />
          <div>
            <h3>Fecha</h3>
            <p>{{ state.plantDetail.date || 'Sin fecha' }}</p>
          </div>
        </div>
      </div>
      <section>
        <h2>Descripción</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nihil
          libero ex placeat.
        </p>
      </section>
      <div class="badge-container">
        <p>{{ state.plantDetail.status }}</p>
      </div>
      <div class="actions">
        <button>Guardar</button>
        <button>Reintentar con IA</button>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LOCAL_STORAGE_KEYS } from '~/contants/localStorage'
import { getPlant } from '~/utils/database'
import { getLocalStorage } from '~/utils/storage'
import type { PlantComponent } from '~/types/models/plantComponent'

export default {
  name: 'PlantDetailPage',
}
</script>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const routeId = route.params.id

const state = reactive({
  plantDetail: {} as PlantComponent,
})

async function getPlantDetail() {
  const response = await getPlant(String(routeId))

  if (response) state.plantDetail = response
  else state.plantDetail = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.PLANT))
}

onMounted(() => {
  getPlantDetail()
})

defineOptions({ name: 'PlantDetailPage' })
</script>

<style scoped>
.hero {
  background-color: #055b1d;
  border-radius: 0 0 50% 50%;
  height: 30vh;
  padding-bottom: 295px;

  .header-container {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    height: 100%;
  }

  .back-button {
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 352px;
    height: 217px;
    object-fit: cover;
    border-radius: 12px;
    border-color: #fff;
    border-width: 2px;
    margin: 0 auto;
  }
}
.container {
  padding: 16px;
  margin-top: 30px;
}
.contact-info {
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
  background-color: #dce8d6;
  border-radius: 12px;

  .contact-name {
    font-size: 14px;
    font-weight: 700;
  }

  .contact-role {
    font-size: 12px;
  }

  img {
    width: 32px;
    height: 32px;
    margin: 0 auto;
  }
}
.plant-details {
  margin-top: 36px;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  .card {
    background: #f3f4f6;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .plant-info {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      h3 {
        font-size: 14px;
        color: #055b1d;
      }

      p {
        font-size: 17px;
        color: #0e0e0e;
      }
    }
  }

  .badge-container {
    margin-top: 24px;
    background: #055b1d;
    border-radius: 10px;
    padding: 0 32px;
    width: fit-content;

    p {
      font-size: 16px;
      color: #fff;
    }
  }
}
.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 60px;

  button {
    height: 28px;
    background: #055b1d;
    color: #fff;
    border: none;
    border-radius: 10px;
  }
}
</style>

<route lang="yaml">
name: plant-details
</route>

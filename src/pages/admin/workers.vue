<template>
  <section class="container">
    <h2>Seleccionar un trabajador</h2>
    <section class="contact-container">
      <ContactInfo
        v-for="worker in state.workers"
        :id="worker.id ?? -1"
        :key="worker.id"
        :name="worker.name ?? 'Nombre no disponible'"
        :phone="worker.phoneNumber ?? 'Teléfono no disponible'" />
    </section>
  </section>
</template>

<script lang="ts">
import { onMounted, reactive } from 'vue'
import { getWorkersResponse } from '~/api/employee'
import type { Worker } from '~/types/models/employees'

export default {
  name: 'WorkersPage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'WorkersPage' })

onMounted(() => {
  getWorkers()
})

const state = reactive({
  workers: [] as Worker[],
})

async function getWorkers() {
  const response = await getWorkersResponse()

  if (response.success && response.response)
    state.workers = response.response.employees ?? []
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
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 36px;

  .contact-info {
    display: grid;
    grid-template-columns: 60px 1fr 40px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
    background: #f3f4f6;

    img {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      object-fit: cover;
    }
  }
}
</style>

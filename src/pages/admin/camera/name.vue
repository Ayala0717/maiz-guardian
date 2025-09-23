<template>
  <section class="container">
    <div class="preview">
      <img
        v-if="capturedImage"
        :src="capturedImage"
        alt="Captured image"
        class="captured-image" />
      <div v-else class="placeholder">Imagen tomada (placeholder)</div>
    </div>

    <label>Nombre del producto</label>
    <input
      v-model="productName"
      class="input"
      placeholder="Ingrese nombre del producto..." />

    <button class="success_button" @click="saveProduct">
      Guardar para analizar luego
    </button>

    <button class="success_button secondary" @click="router.back()">
      Volver a la cámara
    </button>
  </section>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { LOCAL_STORAGE_KEYS } from '~/contants/localStorage'
import { confirm } from '~/utils/alerts'
import { addPlant } from '~/utils/database'
import { getLocalStorage } from '~/utils/storage'

export default {
  name: 'CameraNamePage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'CameraNamePage' })

const router = useRouter()
const productName = ref('')
const capturedImage = ref('')

const saveProduct = () => {
  if (!productName.value.trim()) {
    confirm({
      title: 'Error',
      text: 'Por favor ingresa un nombre para el producto',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    })
    return
  }

  // Save product name to indexeddb
  addPlant({
    id: String(Math.round(Date.now() + Math.random())),
    img: capturedImage.value,
    plantName: productName.value,
    status: 'Healthy',
    location: 'Monserat Family',
    date: dayjs().format('YYYY/MM/DD'),
    contactName: 'Jose Escobar',
    contactRole: 'Agricultor',
  })

  // Navigate back to home or plants list
  router.push('/admin/plants')
}

onMounted(() => {
  // In a real app, you'd get this from a store or pass it as route params
  // For now, we'll use a placeholder
  const cameraImage = getLocalStorage(LOCAL_STORAGE_KEYS.CAPTURED_IMAGE)
  capturedImage.value = cameraImage
})
</script>

<style scoped>
.container {
  padding: 16px;
}

.preview {
  height: 200px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  overflow: hidden;
  background: #f3f4f6;
}

.captured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  color: #6b7280;
  text-align: center;
}

.input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  margin: 8px 0 16px;
  font-size: 16px;
}

.success_button {
  width: 100%;
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 8px;
}

.success_button.secondary {
  background: #6b7280;
}

.success_button:hover {
  opacity: 0.9;
}
</style>

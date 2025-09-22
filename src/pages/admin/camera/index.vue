<template>
  <section class="camera">
    <div class="viewport">
      <video
        ref="videoRef"
        v-show="isStreaming && !error"
        class="video-stream"
        autoplay
        muted
        playsinline />
      <canvas ref="canvasRef" style="display: none" />

      <div v-if="error" class="error-message">
        <p>{{ error }}</p>
        <button @click="startCamera" class="retry-btn">Reintentar</button>
      </div>

      <div v-if="!isStreaming && !error" class="loading">
        <p>Solicitando acceso a la cámara...</p>
      </div>
    </div>

    <div class="controls">
      <button @click="takePhoto" class="btn" :disabled="!isStreaming">
        Tomar foto
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { LOCAL_STORAGE_KEYS } from '~/contants/localStorage'
import { setLocalStorage } from '~/utils/storage'

export default {
  name: 'CameraCapturePage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'CameraCapturePage' })

const router = useRouter()
const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()
const stream = ref<MediaStream>()
const isStreaming = ref(false)
const error = ref('')
const capturedImage = ref('')

const startCamera = async () => {
  try {
    error.value = ''
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment', // Use back camera
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    })

    stream.value = mediaStream
    if (videoRef.value) {
      videoRef.value.srcObject = mediaStream
      videoRef.value.play()
      isStreaming.value = true
    }
  } catch (err) {
    error.value =
      'No se pudo acceder a la cámara. Por favor, permite el acceso a la cámara.'
    console.error('Camera access error:', err)
  }
}

const stopCamera = () => {
  if (stream.value) {
    stream.value.getTracks().forEach((track) => track.stop())
    stream.value = undefined
    isStreaming.value = false
  }
}

const takePhoto = () => {
  if (!videoRef.value || !canvasRef.value || !isStreaming.value) return

  const video = videoRef.value
  const canvas = canvasRef.value
  const context = canvas.getContext('2d')

  if (!context) return

  // Set canvas dimensions to match video
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight

  // Draw current video frame to canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height)

  // Convert to data URL
  capturedImage.value = canvas.toDataURL('image/jpeg', 0.8)

  // Stop camera and navigate to naming page
  stopCamera()
  setLocalStorage(LOCAL_STORAGE_KEYS.CAPTURED_IMAGE, capturedImage.value)
  router.push('/admin/camera/name')
}

onMounted(() => {
  startCamera()
})

onUnmounted(() => {
  stopCamera()
})
</script>

<style scoped>
.camera {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  background: #000;
}

.viewport {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-stream {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-message {
  text-align: center;
  color: #fff;
  padding: 20px;
}

.error-message p {
  margin-bottom: 16px;
}

.retry-btn {
  background: #065f46;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.loading {
  text-align: center;
  color: #fff;
  padding: 20px;
}

.controls {
  padding: 16px;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
}

.btn {
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  min-width: 120px;
}

.btn:disabled {
  background: #6b7280;
  cursor: not-allowed;
}

.btn:not(:disabled):hover {
  background: #047857;
}
</style>

<template>
  <section class="container">
    <h2>Check your email</h2>
    <p class="muted">
      We sent a reset link to contact@gmail.com. Ingresa el código de 5 dígitos.
    </p>

    <div class="code">
      <input v-model="state.firstInput" maxlength="1" inputmode="numeric" />
      <input v-model="state.secondInput" maxlength="1" inputmode="numeric" />
      <input v-model="state.thirdInput" maxlength="1" inputmode="numeric" />
      <input v-model="state.fourthInput" maxlength="1" inputmode="numeric" />
      <input v-model="state.fifthInput" maxlength="1" inputmode="numeric" />
      <input v-model="state.sixthInput" maxlength="1" inputmode="numeric" />
    </div>

    <button class="btn" @click="handleVerify">Continuar</button>

    <p class="muted">¿No te llegó el correo? <a href="#">Reenviar</a></p>
  </section>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { confirm } from '~/utils/alerts'

export default {
  name: 'VerifyCodePage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'VerifyCodePage' })

const router = useRouter()

const state = reactive({
  firstInput: '',
  secondInput: '',
  thirdInput: '',
  fourthInput: '',
  fifthInput: '',
  sixthInput: '',
})

function handleVerify() {
  if (
    !state.firstInput.trim() ||
    !state.secondInput.trim() ||
    !state.thirdInput.trim() ||
    !state.fourthInput.trim() ||
    !state.fifthInput.trim() ||
    !state.sixthInput.trim()
  ) {
    confirm({
      title: 'Error',
      text: 'Por favor ingresa un código válido',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    })

    return
  }

  // Send verification code to backend
  router.push('/auth/success')
}
</script>

<style scoped>
.container {
  padding: 16px;
  text-align: center;
}
.muted {
  color: #6b7280;
}
.code {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 16px 0;
}
.code input {
  width: 44px;
  height: 56px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  font-size: 20px;
}
.btn {
  width: 100%;
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 8px;
}
</style>

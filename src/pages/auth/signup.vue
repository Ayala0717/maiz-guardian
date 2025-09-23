<template>
  <section class="container">
    <div class="logo">MAIZGUARDIAN (logo)</div>
    <div class="tabs">
      <RouterLink to="/auth/login">Log in</RouterLink>
      <span class="active">Sign up</span>
    </div>

    <label>Tu Nombre</label>
    <input v-model="state.name" class="input" placeholder="Ingresa tu nombre" />

    <label>Tu Email</label>
    <input
      v-model="state.email"
      class="input"
      type="email"
      placeholder="ejemplo@ejemplo.com" />

    <label>Crea contraseña</label>
    <input
      v-model="state.password"
      class="input"
      type="password"
      placeholder="******" />

    <button class="btn" @click="handleSignup">Continuar</button>

    <div class="or"><span>Or</span></div>

    <button class="btn outline">Login con Google</button>

    <p class="muted">
      ¿Ya tienes cuenta? <RouterLink to="/auth/login">Log in</RouterLink>
    </p>
  </section>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { confirm } from '~/utils/alerts'
export default {
  name: 'SignupPage',
}
</script>

<script setup lang="ts">
defineOptions({ name: 'SignupPage' })

const router = useRouter()

const state = reactive({
  name: '',
  email: '',
  password: '',
})

function handleSignup() {
  if (!state.name.trim() || !state.email.trim() || !state.password.trim()) {
    confirm({
      title: 'Error',
      text: 'Por favor ingresa un nombre, email y una contraseña válidos',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    })
    return
  }

  router.push('/auth/verify')
}
</script>

<style scoped>
.container {
  padding: 16px;
}
.logo {
  text-align: center;
  margin: 24px 0;
}
.tabs {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 12px;
}
.tabs .active {
  color: #065f46;
  font-weight: 700;
  border-bottom: 2px solid #065f46;
}
.input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  margin: 6px 0 12px;
}
.btn {
  width: 100%;
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 12px;
}
.btn.outline {
  background: #fff;
  color: #065f46;
  border: 1px solid #065f46;
}
.or {
  text-align: center;
  margin: 12px 0;
  color: #9ca3af;
}
.muted {
  color: #9ca3af;
}
</style>

<script setup lang="ts">
defineOptions({ name: 'LoginPage' })
</script>

<template>
  <section class="container">
    <div class="logo">MAIZGUARDIAN (logo)</div>
    <div class="tabs">
      <span class="active">Log in</span>
      <RouterLink to="/auth/signup">Sign up</RouterLink>
    </div>

    <label>Tu Email</label>
    <input class="input" placeholder="contact@gmail.com" />

    <label>Contraseña</label>
    <input class="input" type="password" placeholder="••••••••" />

    <div class="row">
      <span class="muted">Wrong password</span>
      <RouterLink to="/auth/forgot">¿Olvidaste tu contraseña?</RouterLink>
    </div>

    <button class="btn">Continuar</button>

    <div class="or"><span>Or</span></div>

    <button class="btn outline">Login con Google</button>

    <p class="muted">
      ¿No tienes cuenta? <RouterLink to="/auth/signup">Sign up</RouterLink>
    </p>
  </section>
</template>

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
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
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

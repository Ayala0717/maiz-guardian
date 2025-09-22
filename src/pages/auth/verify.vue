<script setup lang="ts">
defineOptions({ name: 'VerifyCodePage' })
</script>

<template>
  <section class="container">
    <h2>Check your email</h2>
    <p class="muted">
      We sent a reset link to contact@gmail.com. Ingresa el código de 5 dígitos.
    </p>

    <div class="code">
      <input maxlength="1" />
      <input maxlength="1" />
      <input maxlength="1" />
      <input maxlength="1" />
      <input maxlength="1" />
    </div>

    <button class="btn">Verify Code</button>

    <p class="muted">¿No te llegó el correo? <a href="#">Reenviar</a></p>
  </section>
</template>

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

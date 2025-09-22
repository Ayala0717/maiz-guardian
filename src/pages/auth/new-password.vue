<script setup lang="ts">
defineOptions({ name: 'NewPasswordPage' })
</script>

<template>
  <section class="container">
    <h2>Set a new password</h2>
    <p class="muted">
      Create a new password. Ensure it differs from previous ones for security
    </p>

    <label>Password</label>
    <input class="input" type="password" placeholder="••••••••" />

    <label>Confirm password</label>
    <input class="input" type="password" placeholder="••••••••" />

    <button class="btn">Continuar</button>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
}
.muted {
  color: #6b7280;
  margin-bottom: 8px;
  display: block;
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
}
</style>

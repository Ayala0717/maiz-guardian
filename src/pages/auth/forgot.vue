<script setup lang="ts">
defineOptions({ name: 'ForgotPasswordPage' })
</script>

<template>
  <section class="container">
    <h2>Forgot password</h2>
    <p class="muted">Please enter your email to reset the password</p>

    <label>Tu Email</label>
    <input class="input" placeholder="contact@gmail.com" />

    <button class="btn">Reset Password</button>
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

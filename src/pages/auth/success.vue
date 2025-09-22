<script setup lang="ts">
defineOptions({ name: 'PasswordSuccessPage' })
</script>

<template>
  <section class="container">
    <div class="icon">✔</div>
    <h2>Successful</h2>
    <p class="muted">
      Congratulations! Your password has been changed. Click continue to login.
    </p>
    <RouterLink to="/auth/login" class="btn">Continuar</RouterLink>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;
  text-align: center;
}
.icon {
  width: 96px;
  height: 96px;
  border: 2px solid #10b981;
  color: #10b981;
  border-radius: 9999px;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}
.muted {
  color: #6b7280;
}
.btn {
  display: inline-block;
  margin-top: 16px;
  background: #065f46;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
}
</style>

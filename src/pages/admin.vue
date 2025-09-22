<script setup lang="ts">
defineOptions({ name: 'AdminRedirect' })
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<route lang="yaml">
redirect: /admin/home
</route>

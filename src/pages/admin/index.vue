<script setup lang="ts">
defineOptions({ name: 'AdminRedirect' })
</script>

<template>
  <RouterView />
</template>

<route lang="yaml">
meta:
redirect: /admin/home
</route>

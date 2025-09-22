<script setup lang="ts">
defineOptions({ name: 'RootRedirect' })
</script>

<template>
  <RouterView />
</template>

<route lang="yaml">
meta:
  layout: admin
redirect: /admin/home
</route>

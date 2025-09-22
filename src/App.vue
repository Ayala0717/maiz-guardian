<template>
  <RouterView />
</template>

<script lang="ts">
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
export default {
  name: 'App',
}
</script>

<script lang="ts" setup>
const { t } = useI18n()

useHead({
  title: t('titleApp'),
  meta: [
    {
      name: 'description',
      content: t('descriptionApp'),
    },
  ],
  htmlAttrs: {
    lang: 'es',
  },
})
</script>

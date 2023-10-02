<script setup lang="ts">
const { t } = useI18n();
const website = computed(() => t('html.title'));
const title = computed(() => t('page.index.title'));
useHead({
  meta: [{ property: 'og:title', content: `${website.value}：${title.value}` }],
});
</script>
<template>
  <div>
    {{ title }}
  </div>
</template>
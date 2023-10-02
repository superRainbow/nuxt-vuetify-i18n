<script setup lang="ts">
const { t } = useI18n();
const title = computed(() => t('page.apply.title'));
</script>

<template>
  <div>
    {{ title }}
  </div>
</template>
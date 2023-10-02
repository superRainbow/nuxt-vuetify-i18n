<script setup lang="ts">
const { t } = useI18n();
const renderKey = ['email', 'address', 'tel', 'copyright', 'tip'];
const translateWord = computed(() => renderKey.map((key: string) => t(`layout.footer.${key}`)));
</script>

<template>
  <v-footer class="bg-indigo-lighten-1 d-flex flex-column">
    <ul v-html="translateWord.map((word)=> `<li>${word}</li>`).join('')" />
  </v-footer>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
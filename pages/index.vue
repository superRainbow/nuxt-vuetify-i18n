<script setup lang="ts">
const { t } = useI18n();
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();

const website = computed(() => t('html.title'));
const title = computed(() => t('page.index.title'));
useHead({
  meta: [{ property: 'og:title', content: `${website.value}：${title.value}` }],
});
</script>
<template>
  <div>
    <v-carousel hide-delimiter-background
                show-arrows
                :height="mobile ? '200px': '500px'"
                color="white"
                touch>
      <template v-slot:prev="{ props }">
        <v-btn variant="elevated"
               icon="mdi-menu-left"
               aria-label="prev"
               @click="props.onClick" />
      </template>
      <template v-slot:next="{ props }">
        <v-btn variant="elevated"
               icon="mdi-menu-right"
               aria-label="next"
               @click="props.onClick" />
      </template>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                       lazy-src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                       alt="test"
                       cover></v-carousel-item>

      <v-carousel-item src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                       lazy-src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                       alt="test"
                       cover></v-carousel-item>

      <v-carousel-item src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
                       lazy-src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
                       alt="test"
                       cover></v-carousel-item>
    </v-carousel>
  </div>
</template>
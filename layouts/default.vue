<script setup lang="ts">
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
const title = computed(() => t('html.title'));
</script>

<template>
  <Html :lang="head?.htmlAttrs?.lang"
        :dir="head?.htmlAttrs?.dir">

  <Head>
    <Title>{{title}}</Title>
    <template v-for="link in head.link"
              :key="link.id">
      <Link :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta"
              :key="meta.id">
      <Meta :id="meta.id"
            :property="meta.property"
            :content="meta.content" />
    </template>
  </Head>

  <Body>
    <v-layout class="rounded rounded-md flex-column">
      <NuxtLayout name="header" />
      <v-main class="align-center justify-center">
        <v-container>
          <slot />
        </v-container>
      </v-main>
      <NuxtLayout name="footer" />
    </v-layout>
  </Body>

  </Html>
</template>

<style scoped lang="scss">
</style>
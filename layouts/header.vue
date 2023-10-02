<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useArrayFind } from '@vueuse/core';
const { mobile } = useDisplay();
const { t, locale, availableLocales, setLocale } = useI18n();

const links = ['news', 'apply'];
const drawer = ref(false);
const locales = computed(() =>
  availableLocales.map((locale: string) => ({
    value: locale,
    title: t(`layout.header.locales.list.${locale}`),
  }))
);
const currentLocale = computed(
  () => useArrayFind(locales, (data: any) => data.value === locale.value).value?.title
);

const changeLocale = (item: any) => {
  locale.value = item.value;
  setLocale(item.value);
};
</script>

<template>
  <v-app-bar :order="0"
             elevation="1"
             prominent>
    <v-container class="d-flex align-center justify-space-between">
      <v-app-bar-nav-icon class="d-sm-flex d-md-none"
                          variant="text"
                          :aria-label="t(`layout.header.menu.text`)"
                          @click.stop="drawer = !drawer" />
      <NuxtLink to="/"
                :class="`${mobile ? 'mobile logo': 'desktop logo'}`">
        <v-app-bar-title tag="h1"
                         :text="t('layout.header.logo.text')" />
      </NuxtLink>
      <v-spacer class="d-none d-sm-flex" />
      <v-list class="d-none d-sm-flex"
              color="indigo-lighten-1"
              base-color="grey-darken-4"
              aria-label="select_link"
              nav
              variant="plain">
        <v-list-item v-for="item in links"
                     :key="item"
                     :title="t(`page.${item}.title`)"
                     :to="item"
                     aria-labelledby="select_link"
                     :aria-label="t(`page.${item}.title`)"
                     role="option"
                     aria-selected="true" />
      </v-list>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props"
                 rounded-sm
                 border
                 :text="currentLocale" />
        </template>
        <v-list>
          <v-list-item v-for="item in locales"
                       :key="item.value"
                       @click="changeLocale(item)"
                       :title="item.title" />
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer"
                       location="top"
                       temporary>
    <v-list color="indigo-lighten-1"
            aria-label="select_link">
      <v-list-item v-for="item in links"
                   :key="item"
                   :title="t(`page.${item}.title`)"
                   :to="item"
                   aria-labelledby="select_link"
                   :aria-label="t(`page.${item}.title`)"
                   role="option"
                   aria-selected="true" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.logo {
  flex: 0 0;
  background: url(assets/img/logo.png) no-repeat center center;
  background-size: contain;
  font-size: revert;
  line-height: initial;
  text-indent: -999px;
  &.mobile {
    flex-basis: 205px;
    height: 30px;
  }
  &.desktop {
    flex-basis: 320px;
    height: 50px;
  }
}
</style>
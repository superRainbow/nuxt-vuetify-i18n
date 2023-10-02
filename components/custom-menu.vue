<script setup lang="ts">
import { useDisplay } from 'vuetify';
const { t } = useI18n();
const { mdAndUp } = useDisplay();

const links = ['news', 'apply'];
const drawer = ref(false);
</script>

<template>
  <v-list v-if="mdAndUp"
          class="d-flex nav"
          color="indigo-lighten-1"
          base-color="grey-darken-4"
          nav
          variant="plain">
    <v-list-item v-for="item in links"
                 :key="item"
                 :title="t(`page.${item}.title`)"
                 :to="item" />
  </v-list>
  <template v-else>
    <v-app-bar-nav-icon variant="text"
                        @click.stop="drawer = !drawer">
      <v-btn variant="text"
             icon="mdi-menu"></v-btn>
    </v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer"
                         temporary>
      <v-list color="indigo-lighten-1"
              nav>
        <v-list-item v-for="item in links"
                     :key="item"
                     :title="t(`page.${item}.title`)"
                     :to="item" />
      </v-list>
    </v-navigation-drawer>
  </template>
</template>

<style scoped lang="scss">
</style>
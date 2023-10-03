import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
      VSkeletonLoader,
    },
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});

<template>
  <v-app>
    <m-header/>
    <v-content>
      <router-view/>
    </v-content>
    <m-footer/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    MHeader: () => import('@/components/Core/MHeader.vue'),
    MFooter: () => import('@/components/Core/MFooter.vue'),
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = 'zh';
    },
  },
};
</script>

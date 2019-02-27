<template>
  <v-app>
    <m-header/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    MHeader: () => import('@/components/Core/MHeader.vue'),
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = 'zh';
    },
  },
};
</script>

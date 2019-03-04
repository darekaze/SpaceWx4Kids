<template>
  <v-app>
    <m-header/>
    <v-content>
      <space-bg><router-view/></space-bg>
    </v-content>
    <m-footer/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    MHeader: () => import('@/components/Core/MHeader.vue'),
    SpaceBg: () => import('@/components/Background.vue'),
    MFooter: () => import('@/components/Core/MFooter.vue'),
  },
};
</script>

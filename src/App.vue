<template>
  <v-app>
    <m-header/>
    <v-content>
      <space-bg>
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
      </space-bg>
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

<style>
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
</style>

<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Kids</span>
      <span class="font-weight-light">SpaceWx</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <LangSwitcher/>
    <v-btn flat @click="changeLocale()">
      <span class="mr-2">Menu</span>
      <v-icon>open_in_new</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher.vue';

export default {
  name: 'main-header',
  components: {
    LangSwitcher,
  },
};
</script>

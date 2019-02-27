<template>
  <v-toolbar app height="60" :absolute="atHome">
    <v-toolbar-title class="headline text-capitalize">
      <span>{{ $t('titleA') }}</span>
      <span class="font-weight-light">{{ $t('titleB') }}</span>
    </v-toolbar-title>
    <router-link :to="$i18nRoute({ name: 'home'})">
      <v-img contain
        alt="Dr.Tin Logo"
        :src="require('@/assets/tin.png')"
        transition="scale-transition"
        height="60px" width="52px"/>
    </router-link>
    <v-spacer/>
    <lang-switcher/>
    <burger-menu/>
  </v-toolbar>
</template>

<script>
import LangSwitcher from '@/components/Core/LangSwitcher.vue';
import BurgerMenu from '@/components/Core/BurgerMenu.vue';

export default {
  name: 'main-header',
  components: {
    LangSwitcher,
    BurgerMenu,
  },
  computed: {
    atHome() {
      return /^\/\w+\/?$/.test(this.$route.path); // match locale route
    },
  },
};
</script>

<i18n>
{
  "en": {
    "titleA": "Space",
    "titleB": "Weather"
  },
  "zh": {
    "titleA": "太空",
    "titleB": "天氣"
  }
}
</i18n>

<template>
  <v-toolbar app height="60" :absolute="atHome">
    <v-toolbar-title
      class="headline text-capitalize c-ptr hidden-xs-only"
      @click.stop="goHome">
      <span>{{ $t('titleA') }}</span>
      <span class="font-weight-light">{{ $t('titleB') }}</span>
    </v-toolbar-title>
    <router-link :to="$i18nRoute({ name: 'home'})">
      <v-img contain
        alt="Dr.Tin Logo"
        :src="require('@/assets/icons/tin.png')"
        transition="scale-transition"
        height="60px" width="52px"/>
    </router-link>
    <div class="pt-4 font-weight-medium">({{ $t('beta') }})</div>
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
  methods: {
    goHome() { this.$router.push(this.$i18nRoute({ name: 'home' })); },
  },
};
</script>

<style lang="scss" scoped>
.c-ptr {
  cursor: pointer;
}
</style>

<i18n>
{
  "en": {
    "titleA": "Space",
    "titleB": "Weather",
    "beta": "Beta"
  },
  "zh": {
    "titleA": "太空",
    "titleB": "天氣",
    "beta": "試測版"
  }
}
</i18n>

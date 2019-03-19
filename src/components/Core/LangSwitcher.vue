<template>
  <v-btn
    outline
    color="indigo"
    class="p-relative text-capitalize"
    :class="{ scales: $vuetify.breakpoint.xsOnly }"
    @click="changeLanguage()">
    {{ $t('switchLang') }}
    <v-img
      alt="Sunny Logo"
      :src="require(`@/assets/icons/${$t('logo')}.svg`)"
      transition="scale-transition"
      width="30px" height="36px"
      class="p-abs"/>
  </v-btn>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  methods: {
    changeLanguage() {
      const lang = Trans.currentLanguage === 'en' ? 'zh' : 'en'; // HACK
      const to = this.$router.resolve({ params: { lang } });
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.p-relative {
  position: relative;
  .p-abs {
    top: -8px;
    right: -6px;
  }
}
.scales {
  transform: scale(0.9, 0.9);
}
</style>

<i18n>
{
  "en": {
    "switchLang": "中文",
    "logo": "sunny"
  },
  "zh": {
    "switchLang": "English",
    "logo": "break"
  }
}
</i18n>

<template>
  <sub-page :title="$t('phenomena')" icon="icons/ph_icon.png">
    <v-fade-transition mode="out-in">
      <router-view/>
    </v-fade-transition>
  </sub-page>
</template>

<script>
export default {
  name: 'phenomena-page',
  components: {
    SubPage: () => import('@/components/Template/SubPage.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "phenomena": "Phenomena"
  },
  "zh": {
    "phenomena": "現象"
  }
}
</i18n>

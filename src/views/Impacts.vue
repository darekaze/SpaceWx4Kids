<template>
  <sub-page :title="$t('impacts')" icon="icons/impact_icon.png">
    <v-fade-transition mode="out-in">
      <router-view/>
    </v-fade-transition>
  </sub-page>
</template>

<script>
export default {
  name: 'impacts-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "impacts": "Impacts"
  },
  "zh": {
    "impacts": "影響"
  }
}
</i18n>

<template>
  <sub-page :title="$t('historical-events')" icon="icons/event_icon.png">
    <v-fade-transition mode="out-in">
      <router-view/>
    </v-fade-transition>
  </sub-page>
</template>

<script>
export default {
  name: 'historical-events-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "historical-events": "Historical Events"
  },
  "zh": {
    "historical-events": "歷史事件"
  }
}
</i18n>

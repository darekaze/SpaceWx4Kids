<template>
  <sub-page :title="$t('monitor')" icon="icons/nh_monitor.png">
    <Article/>
  </sub-page>
</template>

<script>
export default {
  name: 'monitor-page',
  components: {
    SubPage: () => import('@/components/Template/SubPage.vue'),
    Article: () => import('@/views/Article.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "monitor": "Monitor"
  },
  "zh": {
    "monitor": "監測"
  }
}
</i18n>

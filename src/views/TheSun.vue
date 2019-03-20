<template>
  <sub-page :title="$t('sun')" icon="icons/nh_sun.png">
    <Article/>
  </sub-page>
</template>

<script>
export default {
  name: 'earth-page',
  components: {
    SubPage: () => import('@/components/Template/SubPage.vue'),
    Article: () => import('@/views/Article.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "sun": "Sun"
  },
  "zh": {
    "sun": "太陽"
  }
}
</i18n>

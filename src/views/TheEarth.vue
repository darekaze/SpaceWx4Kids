<template>
  <sub-page :title="$t('earth')" icon="icons/nh_earth.png">
    <Article/>
  </sub-page>
</template>

<script>
export default {
  name: 'earth-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
    Article: () => import('@/views/Article.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "earth": "Earth"
  },
  "zh": {
    "earth": "地球"
  }
}
</i18n>

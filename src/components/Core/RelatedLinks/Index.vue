<template>
  <v-menu light
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    :nudge-top="6"
    top offset-y>
    <template v-slot:activator="{ on }">
      <v-btn flat large
        class="text-capitalize px-3 mx-1"
        v-on="on">
        {{ $t('related-links') }}
      </v-btn>
    </template>
    <Links/>
  </v-menu>
</template>

<script>
export default {
  components: {
    Links: () => import('@/components/Core/RelatedLinks/Links.vue'),
  },
  data: () => ({
    menu: false,
  }),
};
</script>

<i18n>
{
  "en": {
    "related-links": "Related Links"
  },
  "zh": {
    "related-links": "相關鏈接"
  }
}
</i18n>

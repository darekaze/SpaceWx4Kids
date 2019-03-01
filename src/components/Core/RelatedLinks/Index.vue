<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y>
    <template v-slot:activator="{ on }">
      <v-btn
        light flat large
        class="text-capitalize px-3 mx-1"
        v-on="on">
        {{ $t('links') }}
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
    "links": "Related Links"
  },
  "zh": {
    "links": "相關鏈接"
  }
}
</i18n>

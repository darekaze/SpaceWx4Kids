<template>
  <sub-page :title="$t('games')" icon="icons/ph_icon.svg">
    <v-container grid-list-md fill-height pt-3>
      <div class="white--text display-1">Under Development, Coming Soon...</div>
    </v-container>
  </sub-page>
</template>

<script>
export default {
  name: 'games-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "games": "Minigames"
  },
  "zh": {
    "games": "小遊戲"
  }
}
</i18n>

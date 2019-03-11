<template>
  <sub-page :title="$t('games')" icon="icons/ph_icon.svg">
    <v-container grid-list-md fill-height pt-3>
      <div class="white--text display-1">Under Development, Beta version: </div>
      <!-- TODO: Add games and unity loader -->
      <v-btn dark color="blue"
        :to="$i18nRoute({ name: 'gameplay', params: { game: 'xxx' } })">
        Go to game
      </v-btn>
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

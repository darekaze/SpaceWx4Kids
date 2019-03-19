<template>
  <sub-page :title="$t('games')" icon="icons/game_icon.png">
    <v-container grid-list-md pt-3 px-5>
      <v-layout row wrap justify-center v-if="$vuetify.breakpoint.smAndUp">
        <v-flex xs12 sm6
          class="pa-2"
          v-for="value in gamesInfo" :key="value.link">
          <game-card :info="value"/>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center v-else>
        <v-flex xs12>
          Sorry
        </v-flex>
      </v-layout>
    </v-container>
  </sub-page>
</template>

<script>
import gamesInfo from '@/data/games.json';

export default {
  name: 'games-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
    GameCard: () => import('@/components/Cards/GameCard.vue'),
  },
  data: () => ({
    gamesInfo,
  }),
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

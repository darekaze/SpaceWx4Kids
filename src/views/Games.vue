<template>
  <sub-page :title="$t('games')" icon="icons/game_icon.png">
    <v-container grid-list-md pt-3 px-5>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6
          class="pa-2"
          v-for="value in gamesInfo" :key="value.link">
          <game-card :info="value"/>
        </v-flex>
        <v-flex xs12 pt-4>
          <GameInfo/>
        </v-flex>
      </v-layout>
    </v-container>
  </sub-page>
</template>

<script>
import gamesInfo from '@/data/game/games.json';

export default {
  name: 'games-page',
  components: {
    SubPage: () => import('@/components/Template/SubPage.vue'),
    GameCard: () => import('@/components/Cards/GameCard.vue'),
    GameInfo: () => import('@/components/WebGL/Info.vue'),
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

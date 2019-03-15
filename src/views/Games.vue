<template>
  <sub-page :title="$t('games')" icon="icons/game_icon.png">
    <v-scale-transition mode="out-in">
      <router-view/>
    </v-scale-transition>
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

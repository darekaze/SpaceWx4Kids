<template>
  <v-container grid-list-md pt-3>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm4
        v-for="(value, key) in impacts" :key="key">
        <impact-card :title="$t(key)" :content="value" :ratio="ratio"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import impacts from '@/data/impacts-topic/impacts.json';

export default {
  name: 'impacts-index-page',
  components: {
    ImpactCard: () => import('@/components/Cards/ImpactCard.vue'),
  },
  data: () => ({
    impacts,
  }),
  computed: {
    ratio() {
      return this.$vuetify.breakpoint.xsOnly ? 1.6 : 0.94;
    },
  },
};
</script>

<i18n>
{
  "en": {
    "electric-power": "Electric Power",
    "navigation-system": "Navigation System",
    "communication": "Communication",
    "aviation": "Aviation",
    "human-space-exploration": "Human Space Exploration",
    "satellite": "Satellite"
  },
  "zh": {
    "electric-power": "電力",
    "navigation-system": "導航及定位系統",
    "communication": "通訊",
    "aviation": "航空",
    "human-space-exploration": "人類太空探索",
    "satellite": "人造衞星"
  }
}
</i18n>

<template>
  <sub-page :title="$t('impacts')" icon="icons/impact_icon.png">
    <v-container grid-list-md pt-3>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm4
          v-for="(value, key) in impacts" :key="key">
          <simple-card :title="$t(key)" :content="value" :ratio="ratio"/>
        </v-flex>
      </v-layout>
    </v-container>
  </sub-page>
</template>

<script>
import impacts from '@/data/impacts/impacts.json';

export default {
  name: 'impacts-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
    SimpleCard: () => import('@/components/Cards/SimpleCard.vue'),
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
    "impacts": "Impacts",
    "electric-power": "Electric Power",
    "navigation-system": "Navigation System",
    "communication": "Communication",
    "aviation": "Aviation",
    "human-space-exploration": "Human Space Exploration",
    "satellite": "Satellite"
  },
  "zh": {
    "impacts": "影響",
    "electric-power": "電力",
    "navigation-system": "導航及定位系統",
    "communication": "通訊",
    "aviation": "航空",
    "human-space-exploration": "人類太空探索",
    "satellite": "人造衞星"
  }
}
</i18n>

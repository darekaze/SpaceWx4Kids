<template>
  <v-container grid-list-md pt-3>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 lg4 xl3
        class="pa-2"
        v-for="(value, key) in phenomena" :key="key">
        <ph-card :title="$t(key)" :content="value" :ratio="16/10"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import phenomena from '@/data/phenomena/phenomena.json';

export default {
  name: 'phenomena-index-page',
  components: {
    PhCard: () => import('@/components/Cards/PhCard.vue'),
  },
  data: () => ({
    phenomena,
  }),
};
</script>

<i18n>
{
  "en": {
    "aurora": "Aurora",
    "solar-wind": "Solar Wind",
    "sunspots": "Sunspots & Solar Cycle",
    "solar-flare": "Solar flare",
    "cme": "Coronal Mass Ejections",
    "magnetosphere": "Earth's Magnetosphere",
    "geomagnetic-storm": "Geomagnetic Storm",
    "ionosphere": "Ionosphere",
    "radiation-belt": "Radiation Belt",
    "radio-blackouts": "Radio Blackouts",
    "solar-radiation-storms": "Solar Radiation Storm"
  },
  "zh": {
    "aurora": "極光",
    "solar-wind": "太陽風",
    "sunspots": "太陽黑子/太陽周期",
    "solar-flare": "太陽耀斑",
    "cme": "日冕物質拋射",
    "magnetosphere": "地球磁層",
    "geomagnetic-storm": "地磁暴",
    "ionosphere": "電離層",
    "radiation-belt": "輻射帶",
    "radio-blackouts": "無線電通訊中斷",
    "solar-radiation-storms": "太陽輻射風暴"
  }
}
</i18n>

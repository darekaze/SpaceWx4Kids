<template>
  <div id="home">
    <v-container pb-0>
      <v-layout row justify-start>
        <v-flex xs12 sm7>
          <v-img contain
            :src="require(`@/assets/icons/${$t('logo')}.png`)"
            transition="scale-transition"
            max-width="460"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container pt-0>
      <v-layout row fill-height justify-space-around>
        <v-flex xs4>
          <v-layout column fill-height justify-center>
            <topic-card :title="$t('alerts')" img="nh_alert" to="alerts"/>
            <topic-card :title="$t('monitor')" img="nh_monitor" to="monitor" class="pt-4"/>
          </v-layout>
        </v-flex>
        <v-flex xs4>
          <v-layout column fill-height justify-center>
            <topic-card :title="$t('phenomena')" img="nh_ph" to="phenomena"/>
            <topic-card class="pt-4"
              :title="$t('sun')" img="nh_sun" to="sun"/>
            <topic-card class="pt-4"
              :title="$t('historical-events')" img="nh_event" to="historical-events" />
          </v-layout>
        </v-flex>
        <v-flex xs4>
          <v-layout column fill-height justify-center>
            <topic-card :title="$t('impacts')" img="nh_impact" to="impacts"/>
            <topic-card :title="$t('earth')" img="nh_earth" to="earth" class="pt-4"/>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    TopicCard: () => import('@/components/Cards/TopicCard.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "logo": "logo_en",
    "phenomena": "Phenomena",
    "impacts": "Impacts",
    "historical-events": "Historical Events",
    "alerts": "Forecast & Alert",
    "monitor": "Monitor",
    "sun": "Sun",
    "earth": "Earth"
  },
  "zh": {
    "logo": "logo_zh",
    "phenomena": "現象",
    "impacts": "影響",
    "historical-events": "歷史事件",
    "alerts": "預測與警報",
    "monitor": "監測",
    "sun": "太陽",
    "earth": "地球"
  }
}
</i18n>

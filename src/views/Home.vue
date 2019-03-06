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
    <v-container py-0 fill-height>
      <v-layout row fill-height justify-space-around>
        <v-layout column justify-center>
          <topic-card :title="$t('alerts')" img="nh_alert" to="alerts"/>
        </v-layout>
        <v-flex xs4>
          <v-layout column justify-center>
            <topic-card :title="$t('phenomena')" img="nh_ph" to="phenomena"/>
            <topic-card :title="$t('historical-events')" img="nh_event" to="historical-events"/>
          </v-layout>
        </v-flex>
        <v-layout column justify-center>
          <topic-card :title="$t('impacts')" img="nh_impact" to="impacts"/>
        </v-layout>
      </v-layout>
    </v-container>
    <v-container pa-0 fill-height>
      <v-layout row justify-space-around>
        <v-flex xs5>
          <topic-card :title="$t('earth')" img="nh_earth" to="earth"/>
        </v-flex>
        <v-flex xs3>
          <topic-card :title="$t('sun')" img="nh_sun" to="sun"/>
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
    "alerts": "Alerts",
    "sun": "Sun",
    "earth": "Earth"
  },
  "zh": {
    "logo": "logo_zh",
    "phenomena": "現象",
    "impacts": "影響",
    "historical-events": "有趣的歷史事件",
    "alerts": "警報",
    "sun": "太陽",
    "earth": "地球"
  }
}
</i18n>

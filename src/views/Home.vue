<template>
  <div id="home">
    <v-container pb-0>
      <v-layout row justify-space-between>
        <v-flex xs12 sm6>
          <v-img contain
            :src="require(`@/assets/icons/${$t('logo')}.png`)"
            transition="scale-transition"
            max-width="460"/>
        </v-flex>
        <v-flex v-if="!mobile">
          <!-- desktop sun here -->
        </v-flex>
      </v-layout>
    </v-container>
    <v-container py-0 fill-height>
      <v-layout row fill-height justify-space-around>
        <v-layout column justify-center>
          <topic-card :title="$t('alerts')" img="home_alert" to="alerts"/>
        </v-layout>
        <v-flex xs4>
          <v-layout column justify-center>
            <topic-card :title="$t('phenomena')" img="home_ph" to="phenomena"/>
            <topic-card :title="$t('historical-events')" img="home_event" to="historical-events"/>
          </v-layout>
        </v-flex>
        <v-layout column justify-center>
          <topic-card :title="$t('impacts')" img="home_impact" to="impacts"/>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    TopicCard: () => import('@/components/Home/Topic.vue'),
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
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
    "alerts": "Alerts"
  },
  "zh": {
    "logo": "logo_zh",
    "phenomena": "現象",
    "impacts": "影響",
    "historical-events": "有趣的歷史事件",
    "alerts": "警報"
  }
}
</i18n>

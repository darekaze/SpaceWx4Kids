<template>
  <div id="alerts-page">
    <v-layout justify-center pt-4>
      <img class="img-valign" :src="require('@/assets/alert_icon.png')" alt="" />
      <span class="white--text font-weight-light titl">Alerts</span>
    </v-layout>
    <v-container v-if="isInit">
      <v-layout column fill-height justify-center>
        <v-flex xs12 py-2
          v-for="(value, key) in $t('alertsInfo')" :key="key">
          <alert-card
            :info="value"
            :condition="getConditionInfo(key)"/>
        </v-flex>
      </v-layout>
      <div class="white--text text-xs-right">
        <div class="subheading">
          Updated at {{ dateTime }}
        </div>
        <div class="font-italic">
          (Source: Space Weather Prediction Center)
        </div>
      </div>
    </v-container>
  </div>
</template>

<script> /* eslint-disable max-len */
import { mapGetters } from 'vuex';

export default {
  name: 'alerts-page',
  components: {
    AlertCard: () => import('@/components/Alerts/AlertCard.vue'),
  },
  computed: {
    ...mapGetters([
      'isInit',
      'getCurrentDataByCode',
      'getDate',
    ]),
    dateTime() {
      const { DateStamp, TimeStamp } = this.getDate(0);
      return `
        ${DateStamp}, ${TimeStamp.substr(0, TimeStamp.length - 3)} (UTC)
      `;
    },
  },
  methods: {
    getConditionInfo(code) {
      const { Scale, Text } = this.getCurrentDataByCode(code);
      const sc = parseInt(Scale, 10);
      return {
        scale: sc,
        message: sc ? `${code}${sc} / ${Text}` : 'No Alert',
      };
    },
  },
  async beforeMount() {
    await this.$store.dispatch('loadConditions');
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch('loadConditions');
    }, 30 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.img-valign {
  height: 75px;
  vertical-align: middle;
  margin-right: 12px;
}
.titl {
  font-size: 56px !important;
}

@media only screen and (max-width: 600px) {
  .img-valign {
    height: 55px;
  }
  .titl {
    font-size: 40px !important;
  }
}

// TODO: Locale i18n
</style>

<i18n>
{
  "en": {
    "alertsInfo": {
      "R": {
        "name": "Radio Blackout",
        "description": "Intense X-rays with ionizing power upset the Earth's ionosphere, producing signal scintillations and disrupting radio communication.",
        "image": "radio_blackout.jpg"
      },
      "S": {
        "name": "Solar Radiation Storm",
        "description": "Streams of energetic particles and plasma pose threats to astronauts in space and to passengers and crews on polar flights.",
        "image": "solar_radiation_storm.jpg"
      },
      "G": {
        "name": "Geomagnetic Storm",
        "description": "Through electromagnetic induction, transient electric surges can damage transformers, electronic instruments and navigation equipment.",
        "image": "geomagnetic_storm.jpg"
      }
    }
  },
  "zh": {
    "alertsInfo": {
      "R": {
        "name": "Radio Blackout",
        "description": "",
        "image": "radio_blackout.jpg"
      },
      "S": {
        "name": "Solar Radiation Storm",
        "description": "",
        "image": "solar_radiation_storm.jpg"
      },
      "G": {
        "name": "Geomagnetic Storm",
        "description": "",
        "image": "geomagnetic_storm.jpg"
      }
    }
  }
}
</i18n>

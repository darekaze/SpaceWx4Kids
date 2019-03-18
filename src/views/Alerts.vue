<template>
  <sub-page :title="$t('alerts')" icon="icons/alert_icon.png">
    <v-container v-if="isInit">
      <v-layout py-2>
        <v-flex>
          <ChinaLink />
        </v-flex>
      </v-layout>
      <v-layout py-2
        v-for="(value, key) in $t('alertsInfo')" :key="key">
        <v-flex>
          <alert-card
            :info="value"
            :condition="getConditionInfo(key)"/>
        </v-flex>
      </v-layout>
      <div class="white--text text-xs-right">
        <div class="subheading">
          {{ `${$t('updated')} ${dateTime}` }}
        </div>
      </div>
    </v-container>
  </sub-page>
</template>

<script> /* eslint-disable max-len */
import { mapGetters } from 'vuex';

export default {
  name: 'alerts-page',
  components: {
    SubPage: () => import('@/components/SubPageTemplate.vue'),
    ChinaLink: () => import('@/components/Alerts/ChinaLink.vue'),
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
      const scale = parseInt(this.getCurrentDataByCode(code).Scale, 10);
      const message = scale
        ? `${code}${scale} ${this.$t('alert-msg')[code]}`
        : this.$t('no-alert');
      return { scale, message };
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

<i18n>
{
  "en": {
    "alerts": "Alerts",
    "updated": "Updated at",
    "no-alert": "No Alert",
    "alert-msg": {
      "R": "Radio Blackout in force",
      "S": "Solar Radiation Storm in force",
      "G": "Geomagnetic Storm in force"
    },
    "alertsInfo": {
      "G": {
        "name": "Geomagnetic Storm",
        "description": "The Earth's geomagnetic field is distorted due to the strong solar wind. Through electromagnetic induction, transient electric surges can damage transformers, electronic instruments and navigation equipment.",
        "image": "geomagnetic_storm.jpg",
        "code": "G",
        "link": "geomagnetic-storms"
      },
      "S": {
        "name": "Solar Radiation Storm",
        "description": "Streams of energetic particles and plasma pose threats to astronauts in space and to passengers and crews on polar flights.",
        "image": "solar_radiation_storm.jpg",
        "code": "S",
        "link": "solar-radiation-storms"
      },
      "R": {
        "name": "Radio Blackout",
        "description": "Intense X-rays with ionizing power upset the Earth's ionosphere, producing signal scintillations (which mean noise, distortion and attenuation) and disrupting radio communication.",
        "image": "radio_blackout.jpg",
        "code": "R",
        "link": "radio-blackouts"
      }
    }
  },
  "zh": {
    "alerts": "警報",
    "updated": "更新時間：",
    "no-alert": "無警報",
    "alert-msg": {
      "R": "級別無綫電通訊中斷正在生效",
      "S": "級別太陽輻射風暴正在生效",
      "G": "級別地磁風暴正在生效"
    },
    "alertsInfo": {
      "G": {
        "name": "地磁風暴",
        "description": "強烈的太陽風扭曲地球磁場。由於電磁感應產生瞬間電流猛烈波動，能損毀變壓器、電子儀器和導航設備。",
        "image": "geomagnetic_storm.jpg",
        "code": "G",
        "link": "geomagnetic-storms"
      },
      "S": {
        "name": "太陽輻射風暴",
        "description": "高能粒子和等離子流對太空人、極地航班的乘客和機組人員造成威脅。",
        "image": "solar_radiation_storm.jpg",
        "code": "S",
        "link": "solar-radiation-storms"
      },
      "R": {
        "name": "無線電通信中斷",
        "description": "強烈X射線的電離作用擾亂地球的電離層，產生訊號閃爍（意即噪音、畸變失真和衰減），干擾無線電通訊。",
        "image": "radio_blackout.jpg",
        "code": "R",
        "link": "radio-blackouts"
      }
    }
  }
}
</i18n>

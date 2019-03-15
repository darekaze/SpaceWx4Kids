<template>
  <sub-page :title="$t('alerts')" icon="icons/alert_icon.png">
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
          {{ `${$t('updated')} ${dateTime}` }}
        </div>
        <div class="font-italic">
          ({{ $t('source') }})
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
    "source": "Source: Space Weather Prediction Center",
    "no-alert": "No Alert",
    "alert-msg": {
      "R": "Radio Blackout in force",
      "S": "Solar Radiation Storm in force",
      "G": "Geomagnetic Storm in force"
    },
    "alertsInfo": {
      "R": {
        "name": "Radio Blackout",
        "description": "X-ray and Extreme Ultra Violet radiation from the sun would ionize the sunlit side of Earth, leading to large amount of energy lost as radio waves pass through this region,and cause radio blackout. ",
        "image": "radio_blackout.jpg",
        "code": "R",
        "link": "radio-blackouts"
      },
      "S": {
        "name": "Solar Radiation Storm",
        "description": "When the influx of radiation particle is so intense that it overwhelms the magnetosphere, the charged particles are able to reach deeper down into the atmosphere at the poles, posing threats to astronauts in space, passengers and crews on polar flights and damage electronics on satellites and spacecrafts on the way.",
        "image": "solar_radiation_storm.jpg",
        "code": "S",
        "link": "solar-radiation-storms"
      },
      "G": {
        "name": "Geomagnetic Storm",
        "description": "Coronal mass ejections deposit energy and result in intense currents in the Earth’s magnetosphere. The density of the atmosphere would be inceased. It could cause extra drag on satellites in low-earth orbit, modify the radio signals path or affect the performance of GPS systems.",
        "image": "geomagnetic_storm.jpg",
        "code": "G",
        "link": "geomagnetic-storms"
      }
    }
  },
  "zh": {
    "alerts": "警報",
    "updated": "更新時間：",
    "source": "資料來源：美國太空天氣預報中心",
    "no-alert": "無警報",
    "alert-msg": {
      "R": "級別無綫電通訊中斷正在生效",
      "S": "級別太陽輻射風暴正在生效",
      "G": "級別地磁風暴正在生效"
    },
    "alertsInfo": {
      "R": {
        "name": "無線電通信中斷",
        "description": "太陽釋放出來的紫外線輻射和X-射線會把地球上被陽光照射的一面離子化，以至當無線電波通過該區域時，產生大量的能量損失並擾亂地球的電離層，導致無線電通信中斷。",
        "image": "radio_blackout.jpg",
        "code": "R",
        "link": "radio-blackouts"
      },
      "S": {
        "name": "太陽輻射風暴",
        "description": "當大量來自太陽的高能量質子輻射流入磁力圈，到磁力圈不能承受時，圈內帶電荷粒子便能進入大氣兩極，途中對衛星、太空人、極地航班的乘客和機組人員或太空船的電子組件等造成影響。",
        "image": "solar_radiation_storm.jpg",
        "code": "S",
        "link": "solar-radiation-storms"
      },
      "G": {
        "name": "地磁風暴",
        "description": "日冕物質拋射的等離子體在地球磁層中產生強烈的電流，扭曲地球磁場，令大氣的密度會增加，影響低地球軌道上的衛星軌道、無線電信號路徑或GPS系統的性能。",
        "image": "geomagnetic_storm.jpg",
        "code": "G",
        "link": "geomagnetic-storms"
      }
    }
  }
}
</i18n>

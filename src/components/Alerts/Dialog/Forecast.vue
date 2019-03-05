<template>
  <v-layout pt-2 row wrap>
    <v-flex xs12>
      <v-layout row align-center justify-space-between>
        <div class="title font-weight-bold pl-1">
          {{ $t('three-day-forecast') }}
        </div>
        <v-btn
          flat
          color="green darken-1"
          class="mx-0 pr-2"
          @click.stop="toogleLegend()">
          {{ $t('legend') }}<v-icon dark>keyboard_arrow_down</v-icon>
        </v-btn>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm4
      v-for="item in getForecast" :key="item.DateStamp">
      <v-card tile>
        <v-card-title>
          <v-layout row wrap>
            <v-flex xs12>
              <h2 class="subheading indigo--text font-weight-bold">
                {{ formatDate(item.DateStamp) }}
              </h2>
              <div class="grey--text text--darken-1 body-1">
                {{ isG ? $t('max-scale') : $t('chance') }}
              </div>
            </v-flex>
            <v-flex @click.stop="toogleLegend()">
              <div
                class="text-xs-center rate py-1"
                v-for="(value, key) in getAttr(item)" :key="key">
                <h4>
                  <indicator :scale="getLevel(value)" :msg="$t('msg')[key]"/>
                </h4>
                <span class="subheading pl-4">
                  {{ `${value}${isG ? '' : '%'}` }}
                </span>
              </div>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <legends ref="legend" :code="code" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import _identity from 'lodash/identity';
import _pickBy from 'lodash/pickBy';
import { Trans } from '@/plugins/i18n';

export default {
  props: { code: String },
  components: {
    Indicator: () => import('@/components/Alerts/Indicator.vue'),
    Legends: () => import('@/components/Alerts/Dialog/Legend.vue'),
  },
  computed: {
    ...mapGetters(['getForecast']),
    isG() { return this.code === 'G'; },
    formatDate() {
      return (day) => {
        const date = new Date(day);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString(Trans.currentLanguage, options);
      };
    },

  },
  methods: {
    _pickBy,
    _identity,
    toogleLegend() {
      this.$refs.legend.display();
    },
    getLevel(value) {
      const v = parseInt(value, 10);
      return this.isG ? v : v / 100 * 5;
    },
    getAttr(item) {
      return _pickBy(item[this.code], el => !!_identity(el) && el.length < 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.rate { cursor: pointer; }
</style>

<i18n>
{
  "en": {
    "three-day-forecast": "3-Day Forecast",
    "legend": "Legend",
    "chance": "Chance of Occurance",
    "max-scale": "Maximum Scale",
    "msg": {
      "MinorProb": "R1-R2",
      "MajorProb": "R3-R5",
      "Prob": "S1 or greater",
      "Scale": "G-Scale"
    }
  },
  "zh": {
    "three-day-forecast": "三日預報",
    "legend": "顏色標簽",
    "chance": "發生幾率",
    "max-scale": "最高級別",
    "msg": {
      "MinorProb": "R1-R2",
      "MajorProb": "R3-R5",
      "Prob": "S1或以上",
      "Scale": "G級別"
    }
  }
}
</i18n>

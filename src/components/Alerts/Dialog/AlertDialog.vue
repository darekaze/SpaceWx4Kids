<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    scrollable>
    <v-card>
      <v-img
        :src="require(`@/assets/images/${info.image}`)"
        height="120"
        gradient="to top, rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.05)">
        <v-layout
          align-center justify-center
          fill-height pa-1 mt-3>
          <v-flex xs12 class="text-xs-center white--text">
            <h2 class="headline font-weight-medium">
              {{ info.name }}
            </h2>
            <indicator :scale="condition.scale" :msg="condition.message"/>
          </v-flex>
        </v-layout>
      </v-img>
      <v-card-text>
        <v-layout column fill-height px-3>
          <!-- TODO: apply alert content and separate as component -->
          <v-alert
            :value="false"
            icon="priority_high"
            :color="getColor(condition.scale)"
            class="border-lint mt-3">
            {{ condition.message }}
          </v-alert>
          <!-- Forecast panel and legend HACK -->
          <forecast-panel :code="info.name[0]"/>
        </v-layout>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="green darken-1" @click.stop="dialog = false">
          {{ $t('close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import getColor from '@/helpers/indicatorColor';

export default {
  components: {
    Indicator: () => import('@/components/Alerts/Indicator.vue'),
    ForecastPanel: () => import('@/components/Alerts/Dialog/Forecast.vue'),
  },
  props: {
    info: Object,
    condition: Object,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    getColor,
    display() {
      this.dialog = !this.dialog;
    },
  },
  computed: {
    isMobile() { return this.$vuetify.breakpoint.xsOnly; },
  },
};
</script>

<style lang="scss" scoped>
.border-lint {
  border-color: rgba(0,0,0,0.18) !important; // HACK: Workaround
}
</style>

<i18n>
{
  "en": {
    "close": "Close"
  },
  "zh": {
    "close": "關閉"
  }
}
</i18n>

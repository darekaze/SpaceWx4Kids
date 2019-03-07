<template>
  <v-card>
    <v-layout row wrap>
      <v-flex xs12 sm5>
        <v-img
          :src="require(`@/assets/images/${info.image}`)"
          :height="$vuetify.breakpoint.xsOnly ? 180 : 220">
          <v-layout fill-height align-end justify-end>
            <div @click.stop="toogleDialog()">
              <indicator
                :scale="condition.scale"
                :msg="condition.message"
                class="pb-2 pr-3 grey--text text--lighten-3 subheading ctx-click"/>
            </div>
          </v-layout>
        </v-img>
      </v-flex>
      <v-flex xs12 sm7>
        <v-container fill-height pb-0>
          <v-layout wrap ma-0>
            <v-flex xs12>
              <h3 class="title indigo--text font-weight-bold mb-2">
                {{ info.name }}
              </h3>
              <div class="body-1">
                {{ info.description }}
              </div>
            </v-flex>
            <v-flex align-self-end>
              <v-card-actions class="px-0">
                <v-tooltip right open-delay="100">
                  <template #activator="hint">
                    <v-btn
                      flat icon
                      v-on="hint.on"
                      @click.stop="toogleDialog()"
                      :color="getColor(condition.scale)">
                      <v-icon>{{ alertIcon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t('show-details') }}</span>
                </v-tooltip>
                <v-spacer/>
                <v-btn
                  flat color="indigo"
                  :to="$i18nRoute({ name: 'phenomena-topic', params: { topic: info.link } })">
                  {{ $t('learn-more') }}
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <alert-dialog
      ref="alertDialog" :info="info" :condition="condition"/>
  </v-card>
</template>

<script>
import getColor from '@/helpers/indicatorColor';

export default {
  components: {
    Indicator: () => import('@/components/Alerts/Indicator.vue'),
    AlertDialog: () => import('@/components/Alerts/Dialog/AlertDialog.vue'),
  },
  props: {
    info: Object,
    condition: Object,
  },
  methods: {
    getColor,
    toogleDialog() {
      this.$refs.alertDialog.display();
    },
  },
  computed: {
    alertIcon() {
      return this.condition.scale ? 'notifications_active' : 'notifications';
    },
  },
};
</script>

<style lang="scss" scoped>
.ctx-click {
  cursor: pointer;
  user-select: none;
}
</style>

<i18n>
{
  "en": {
    "show-details": "Show Details",
    "learn-more": "Learn More"
  },
  "zh": {
    "show-details": "顯示細節",
    "learn-more": "瞭解更多"
  }
}
</i18n>

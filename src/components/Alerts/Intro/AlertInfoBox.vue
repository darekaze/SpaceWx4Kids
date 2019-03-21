<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    scrollable>
    <v-card>
      <v-img
        :src="require('@/assets/images/phenomena/cme@JanRobbe.jpg')"
        height="120"
        gradient="to top, rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.05)">
        <v-layout
          align-center justify-center
          fill-height pa-1 mt-3>
          <div class="white--text">
            <h2 class="headline font-weight-medium">
              {{ $t('about-alerts') }}
            </h2>
          </div>
        </v-layout>
      </v-img>
      <v-card-text class="subheading px-4">
        <p>{{ $t('p1') }}</p>
        <p>{{ $t('p2') }}</p>
        <p>{{ $t('p3') }}</p>
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

<script> /* eslint-disable max-len */
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    display() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<i18n>
{
  "en": {
    "about-alerts": "About Alerts",
    "p1": "The Space Weather Prediction Center (SWPC) of the US National Oceanic and Atmospheric Administration (NOAA) categorizes the effects of solar storms into three main types, namely geomagnetic storm, solar radiation storm and radio blackout.",
    "p2": "Each type has an intensity scale ranging from level 1 (minor), 2 (moderate), 3 (strong), 4 (severe) to level 5 (extreme) depending on the scales of impacts.",
    "p3": "In general, geomagnetic storms affect the people on Earth most. Solar radiation storms pose threats mainly to those flying in space and high altitudes, while radio blackouts mainly affect those operations involving navigation or radio communications."
  },
  "zh": {
    "about-alerts": "關於警報",
    "p1": "美國國家海洋及大氣管理局 (NOAA) 的太空天氣預報中心 (SWPC) 把太陽風暴的影響可分成三大類: 地磁風暴、太陽輻射風暴和無線電通訊中斷。",
    "p2": "每一類的強度分為五個等級，分別由 1級(細小)、2級(溫和)、3級(強大)、4級(激烈)至5級(極端)，以反映不同程度的影響。",
    "p3": "一般來說，地磁風暴影響地球上的人類活動最大。太陽輻射風暴則主要對太空及高緯度航行構成威脅，而無線電通訊中斷主要影響與航運或無線電通訊有關的業務。"
  }
}
</i18n>

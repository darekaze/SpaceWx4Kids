<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      @click.stop="toogleInfoBox()"
      :class="`elevation-${hover ? 4 : 0}`"
      class="round ctx-click">
      <v-img
        :src="require('@/assets/images/phenomena/cme@JanRobbe.jpg')"
        gradient="to top, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.10)"
        height="160">
        <v-layout
          fill-height px-3 py-4
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center">
            {{ $t('about-alerts') }}
          </span>
        </v-layout>
      </v-img>
      <alert-info-box ref="alertInfoBox"/>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  components: {
    AlertInfoBox: () => import('@/components/Alerts/Intro/AlertInfoBox.vue'),
  },
  methods: {
    toogleInfoBox() {
      this.$refs.alertInfoBox.display();
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
    "about-alerts": "About Alerts"
  },
  "zh": {
    "about-alerts": "關於警報"
  }
}
</i18n>

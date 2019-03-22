<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      @click.stop="toogleInfoBox()"
      :class="`elevation-${hover ? 4 : 0}`"
      class="round ctx-click">
      <v-img
        :src="require('@/assets/images/historical-events/1859@Univ_of_Alaska.jpg')"
        gradient="to top, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.10)"
        :height="$vuetify.breakpoint.xsOnly ? 180 : 120">
        <v-layout
          fill-height px-3 py-4
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center" v-html="$t('about')"/>
        </v-layout>
      </v-img>
      <info-dialog ref="infoDialog"/>
    </v-card>
  </v-hover>
</template>

<script> /* eslint-disable max-len */
export default {
  components: {
    InfoDialog: () => import('@/components/WebGL/InfoDialog.vue'),
  },
  methods: {
    toogleInfoBox() {
      this.$refs.infoDialog.display();
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
    "about": "Both PC and mobile are supported (PC is recommended)<br>WebGL is required, check how to enable WebGL"
  },
  "zh": {
    "about": "支援PC和移動平臺 (推薦使用桌面瀏覽器遊玩)<br>需啓用WebGL，瀏覽如何啓用WebGL"
  }
}
</i18n>

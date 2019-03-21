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
        height="120">
        <v-layout
          fill-height px-3 py-4
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center">
            {{ $t('about') }}
          </span>
        </v-layout>
      </v-img>
      <info-dialog ref="infoDialog"/>
    </v-card>
  </v-hover>
</template>

<script>
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
    "about": "Check How to Enable WebGL in Your Browser"
  },
  "zh": {
    "about": "如何在瀏覽器裏啓用WebGL"
  }
}
</i18n>

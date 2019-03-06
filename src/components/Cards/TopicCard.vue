<template>
  <v-card
    dark flat color="transparent"
    :class="`pb-${cardGap}`"
    :to="$i18nRoute({ name: to })">
    <v-img contain
      :src="require(`@/assets/icons/${img}.png`)"
      transition="scale-transition"
      max-height="270"/>
    <v-card-text
      class="text-xs-center grey--text text--lighten-3"
      :class="{
        headline: $vuetify.breakpoint.smAndUp,
        subheading: $vuetify.breakpoint.xsOnly,
        'py-2': this.mobile,
        'py-3': !this.mobile,
      }">
      <div class="text-xs-center">
        <span class="tint-black">{{ title }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
    to: String,
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    cardGap() {
      return this.mobile ? 2 : 4;
    },
  },
};
</script>

<style lang="scss" scoped>
.tint-black {
  background: #2f4e5a80;
  border-radius: 4px;
}
</style>

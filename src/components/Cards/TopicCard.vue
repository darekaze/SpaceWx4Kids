<template>
  <v-card
    dark flat color="transparent"
    class="pb-4"
    :to="$i18nRoute({ name: to })">
    <v-img contain
      :src="require(`@/assets/icons/${img}.png`)"
      transition="scale-transition"
      max-height="270"/>
    <v-card-text
      class="py-3 text-xs-center grey--text text--lighten-3"
      :class="{
        headline: $vuetify.breakpoint.smAndUp,
        subheading: $vuetify.breakpoint.xsOnly,
      }">
      <div>
        <span class="tint-black px-2">{{ title }}</span>
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
};
</script>

<style lang="scss" scoped>
.tint-black {
  background: #2f4e5a80;
  border-radius: 4px;
}
</style>

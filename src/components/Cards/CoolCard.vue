<template>
  <!-- TODO: add route with params -->
  <v-card
    dark flat color="transparent"
    to="#">
    <v-img
      class="grey darken-1"
      :src="require(`@/assets/images/phenomena/${content.image}`)"
      :aspect-ratio="ratio">
      <div class="fill-height gradient-effect"/>
    </v-img>
    <v-card-text class="py-2 headline text-xs-center">
      <div>{{ title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    content: Object,
    ratio: Number,
  },
};
</script>

<style lang="scss" scoped>
.gradient-effect {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05));
  transition: 0.2s;

  &:hover {
    background-color: rgba(28, 251, 195, 0.15);
  }
}
</style>

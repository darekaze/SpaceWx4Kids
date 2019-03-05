<template>
  <!-- TODO: add route with params -->
  <v-card
    dark flat color="transparent"
    class="round"
    to="#">
    <v-img
      class="grey darken-1 round"
      :src="require(`@/assets/images/phenomena/${content.image}`)"
      :aspect-ratio="ratio">
      <div class="fill-height gradient-effect"/>
    </v-img>
    <v-card-text class="py-2 headline text-xs-center grey--text text--lighten-3">
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
.round {
  border-radius: 4px;
}

.tint-black {
  background: #30505c62;
}
</style>

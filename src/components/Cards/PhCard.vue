<template>
  <v-card
    dark flat color="transparent"
    class="round"
    :to="$i18nRoute({ name: 'phenomena-topic', params: { topic: content.link } })">
    <v-img
      class="grey darken-1 round"
      :src="require(`@/assets/images/phenomena/${content.image}`)"
      :aspect-ratio="ratio">
      <div class="fill-height gradient-effect"/>
    </v-img>
    <v-card-text class="py-2 display-1 text-xs-center grey--text text--lighten-3">
      <div>
        <span class="custom-title px-2">{{ title }}</span>
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
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

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
.custom-title {
  font-family: 'Indie Flower', 'Noto Sans TC', cursive !important;
  background: #30505c60;
  border-radius: 4px;
}
</style>

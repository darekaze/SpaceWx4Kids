<template>
  <v-card
    dark flat color="transparent"
    class="round"
    :to="$i18nRoute({ name: 'historical-events-topic', params: { topic: content.name } })">
    <v-img
      class="grey darken-1 round"
      :src="require(`@/assets/images/historical-events/${content.image}`)"
      :aspect-ratio="ratio">
      <div class="fill-height gradient-effect">
        <v-container fluid fill-height>
          <v-layout column fill-height align-start justify-space-between>
            <div>
              <span
                v-if="$vuetify.breakpoint.xsOnly"
                :class="`subheading font-weight-bold ${content.color}--text`">
                {{ content.year }}
              </span>
            </div>
            <h3 class="title font-weight-medium">
              {{ title }}
            </h3>
          </v-layout>
        </v-container>
      </div>
    </v-img>
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
    background-color: rgba(28, 225, 251, 0.15);
  }
}
.round {
  border-radius: 4px;
}
</style>

<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :to="$i18nRoute({ name: 'impacts-topic', params: { topic: content.link } })"
      :class="`elevation-${hover ? 8 : 0}`"
      class="round">
      <v-img
        class="grey darken-1 round"
        :src="require(`@/assets/images/impacts/${content.image}`)"
        :aspect-ratio="ratio">
        <div class="fill-height gradient-effect">
          <v-container fluid fill-height>
            <v-layout fill-height align-center justify-center>
              <span class="c-font display-1 font-weight-regular white--text text-xs-center">
                {{ title }}
              </span>
            </v-layout>
          </v-container>
        </div>
      </v-img>
    </v-card>
  </v-hover>
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
@import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed');
.gradient-effect {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18));
  transition: 0.2s;

  &:hover {
    background-color: rgba(251, 147, 28, 0.1);
  }
}
.round {
  border-radius: 8px;
}
.c-font {
  font-family: 'Saira Extra Condensed', 'Noto Sans TC', sans-serif !important;
}
</style>

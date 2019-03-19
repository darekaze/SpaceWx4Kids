<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      target="_blank"
      rel="noopener noreferrer"
      :href="info.url"
      :class="`elevation-${hover ? 8 : 0}`"
      class="round">
      <v-img
        class="grey darken-1 round"
        :src="require(`@/assets/images/${info.image}`)"
        :aspect-ratio="1.7">
        <div class="fill-height gradient-effect">
          <v-container fluid fill-height>
            <v-layout fill-height align-end justify-center>
              <span class="headline white--text text-xs-center">
                {{ info.title[lang] }}
              </span>
            </v-layout>
          </v-container>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  props: {
    info: Object,
  },
  computed: {
    lang() { return Trans.currentLanguage; },
  },
};
</script>

<style lang="scss" scoped>
.gradient-effect {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18));
  transition: 0.2s;

  &:hover {
    background-color: rgba(251, 147, 28, 0.1);
  }
}
.round {
  border-radius: 8px !important;
}
</style>

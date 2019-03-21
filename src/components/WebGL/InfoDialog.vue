<template>
  <v-dialog
    v-model="dialog"
    max-width="800"
    scrollable>
    <v-card>
      <v-card-text class="subheading px-4" v-if="tutorial">
        <div class="tutorial-md" v-html="tutorial.html"/>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="green darken-1" @click.stop="dialog = false">
          {{ $t('close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  data: () => ({
    dialog: false,
    tutorial: null,
  }),
  methods: {
    display() {
      this.dialog = !this.dialog;
    },
    async showTutorial() {
      const { currentLanguage: lang } = Trans;
      this.tutorial = await import(`@/data/game/webgl_${lang}.md`);
    },
  },
  beforeMount() {
    this.showTutorial();
  },
  watch: {
    '$route.params.lang': {
      immediate: true,
      handler() {
        this.showTutorial();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tutorial-md {
  &/deep/ {
    img {
      display: block;
      margin: 0 auto;
      width: 80%;
      height: auto;
      border-radius: 4px;
    }
  }
}
</style>

<template>
  <v-container pt-3>
    <v-card class="extra">
      <v-card-title class="py-2">
        <v-btn dark round color="blue" @click="goBack()">
          <v-icon>arrow_left</v-icon>Back
        </v-btn>
      </v-card-title>
      <v-card-text class="px-5 pt-0" v-if="article">
        <div class="article-md" v-html="article.html"/>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  data: () => ({
    article: null,
  }),
  async beforeMount() {
    const { currentLanguage: lang } = Trans;
    const topic = this.$route.params.topic || this.$route.name;
    const category = this.$route.name;
    try {
      this.article = await import(`@/data/${category}/${lang}/${topic}.md`);
    } catch (error) {
      console.log(error); // TODO: Add handler
    }
  },
  methods: {
    goBack() { // HACK: Does not work with language change
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.extra {
  border-radius: 8px;
}

// TODO: Add markdown css
.article-md {
  & /deep/h1, /deep/h2 {
    text-align: center;
    color: orange;
  }
}
</style>

<template>
  <v-container pt-3>
    <v-card class="extra">
      <div>
        {{ $route.params.topic }}
      </div>
      <!-- TODO: Add markdown parser -->
      <v-card-text>
        <div v-html="article.html"/>
        <!-- {{ article.html }} -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// TODO: Import correct article (2)
import article from '@/data/historical-events/en/carrington-event.md';

export default {
  data: () => ({
    article,
    anchorAttrs: {
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    },
  }),
};
</script>

<style lang="scss" scoped>
// TODO: add markdown css (1)
.extra {
  border-radius: 8px;
}
</style>

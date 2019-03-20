<template>
  <v-card>
    <v-card-title primary-title class="headline grey lighten-2">
      {{ $t('acknowledgement') }}
    </v-card-title>

    <v-card-text v-if="ack">
      <div v-html="ack.html"/>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="$emit('dialog')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  data: () => ({
    ack: null,
  }),
  beforeMount() {
    this.showAck();
  },
  methods: {
    async showAck() {
      const { currentLanguage: lang } = Trans;
      this.ack = await import(`@/data/acknowledgement/${lang}.md`);
    },
  },
  watch: {
    '$route.params.lang': {
      immediate: true,
      handler() {
        this.showAck();
      },
    },
  },
};
</script>

<template>
<v-container>
  <v-card>
    <p>{{ $t('hello') }}</p>
    <p class="headline">{{ $t('message') }}</p>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: 'HelloI18n',
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "zh": {
    "hello": "NiHao i18n in SFC!"
  }
}
</i18n>

<template>
<div>
  <p>{{ $t('hello') }}</p>
  <p class="headline">{{ $t('message') }}</p>
</div>
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

<template>
  <v-footer light height="auto">
    <v-layout justify-end row wrap>
      <v-flex xs12 grey darken-3 pt-1 />
      <div class="pr-1">
        <v-img contain
        alt="Feng Logo"
        :src="require('@/assets/icons/feng.png')"
        transition="scale-transition"
        height="56px" width="54px"/>
      </div>
      <v-btn
        light flat large
        class="text-capitalize px-3 mx-1 hidden-xs-only"
        :to="$i18nRoute({ name: 'games' })">
        {{ $t('games') }}
      </v-btn>
      <RelatedLinks/>
      <Acknowledgement/>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'main-footer',
  components: {
    RelatedLinks: () => import('@/components/Core/RelatedLinks/Index.vue'),
    Acknowledgement: () => import('@/components/Core/Acknowledgement/Index.vue'),
  },
};
</script>

<i18n>
{
  "en": {
    "games": "Minigames"
  },
  "zh": {
    "games": "小遊戲"
  }
}
</i18n>

<template>
  <v-footer light height="auto">
    <v-layout justify-end row wrap>
      <v-flex xs12 grey darken-3 pt-1 />
      <div class="pr-1">
        <v-img contain
        alt="Didi Logo"
        :src="require('@/assets/didi.svg')"
        transition="scale-transition"
        height="60px" width="40px"/>
      </div>
      <v-btn
        light flat large
        class="text-capitalize px-3 mx-1"
        :to="$i18nRoute({ name: 'games' })">
        {{ $t('games') }}
      </v-btn>
      <!-- Related links pop over menu -->
      <!-- Acknowledgement dialog -->
    </v-layout>
  </v-footer>
</template>

<i18n>
{
  "en": {
    "games": "Minigames",
    "links": "Related Links",
    "ack": "Acknowledgement"
  },
  "zh": {
    "games": "小遊戲",
    "links": "相關鏈接",
    "ack": "鳴謝"
  }
}
</i18n>

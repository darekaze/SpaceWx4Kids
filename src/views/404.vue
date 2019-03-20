<template>
  <v-container fill-height pt-5>
    <v-layout fill-height justify-center>
      <v-flex>
        <div class="display-1 pb-3 white--text">
          <span class="font-weight-bold">404</span>: {{ $t('404-msg') }}
        </div>
        <v-btn dark color="blue"
          :to="$i18nRoute({ name: 'home' })">
          <v-icon class="pr-2">
            keyboard_arrow_left</v-icon>{{ $t('back-home') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<i18n>
{
  "en": {
    "404-msg": "We could's find this page, Sorry...",
    "back-home": "Back to Home"
  },
  "zh_hk": {
    "404-msg": "抱歉，此頁面並不存在...",
    "back-home": "返回主頁"
  },
  "zh_cn": {
    "404-msg": "抱歉，此頁面並不存在...",
    "back-home": "返回主頁"
  }
}
</i18n>

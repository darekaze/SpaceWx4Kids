<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.nsmc.org.cn/NSMC/Channels/SpaceWeather.html"
      :class="`elevation-${hover ? 4 : 0}`"
      class="round">
      <v-img
        :src="require('@/assets/images/satellite.jpg')"
        gradient="to top, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.10)"
        height="160">
        <v-layout
          fill-height px-3 py-4
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center">
            {{ $t('china-src') }}
          </span>
        </v-layout>
      </v-img>
    </v-card>
  </v-hover>
</template>

<i18n>
{
  "en": {
    "china-src": "3-day Space Weather Forecast by National Satellite Meteorological Center"
  },
  "zh": {
    "china-src": "國家衛星氣象中心未來三天太空天氣預報"
  }
}
</i18n>

<template>
  <v-card>
    <v-card-title class="subheading pb-0 indigo--text">
      {{ $t('related-links') }}
    </v-card-title>
    <v-list dense>
      <v-list-tile
        v-for="(item, index) in $t('links')" :key="index"
        target="_blank"
        rel="noopener noreferrer"
        :href="item.url">
        <v-list-tile-title class="body-2">
          <v-icon small>navigate_next</v-icon>
          {{ item.name }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<i18n>
{
  "en": {
    "related-links": "Related Links",
    "links": [
      {
        "name": "Space Weather Prediction Center (SWPC)",
        "url": "https://www.swpc.noaa.gov"
      },
      {
        "name": "Space Weather Action Center (NASA)",
        "url": "https://sunearthday.gsfc.nasa.gov/swac"
      },
      {
        "name": "European Space Weather Portal",
        "url": "http://swe.ssa.esa.int"
      },
      {
        "name": "UK Met Office",
        "url": "https://www.metoffice.gov.uk/services/public-sector/emergencies/space-weather"
      },
      {
        "name": "Space Environment Prediction Center",
        "url": "http://eng.sepc.ac.cn/"
      },
      {
        "name": "National Satellite Meteorological Center [CN]",
        "url": "http://www.nsmc.org.cn/NSMC/Channels/SpaceWeather.html"
      },
      {
        "name": "Solar Activity Prediction Center [CN]",
        "url": "http://rwcc.bao.ac.cn"
      },
      {
        "name": "Hong Kong Space Museum",
        "url": "https://www.lcsd.gov.hk/CE/Museum/Space"
      }
    ]
  },
  "zh": {
    "related-links": "相關鏈接 (*為英文網站)",
    "links": [
      {
        "name": "美國太空天氣預報中心(SWPC) *",
        "url": "https://www.swpc.noaa.gov"
      },
      {
        "name": "國家空間天氣監測預警中心",
        "url": "http://www.nsmc.org.cn/NSMC/Channels/SpaceWeather.html"
      },
      {
        "name": "空間環境預報中心",
        "url": "http://www.sepc.ac.cn"
      },
      {
        "name": "太陽活動預報中心",
        "url": "http://rwcc.bao.ac.cn"
      },
      {
        "name": "空間環境預報中心 *",
        "url": "https://sunearthday.gsfc.nasa.gov/swac"
      },
      {
        "name": "歐洲太空天氣網 *",
        "url": "http://swe.ssa.esa.int"
      },
      {
        "name": "英國氣象局 *",
        "url": "https://www.metoffice.gov.uk/services/public-sector/emergencies/space-weather"
      },
      {
        "name": "香港太空館",
        "url": "https://www.lcsd.gov.hk/CE/Museum/Space/zh_TW/web/spm/whatsnew.html"
      }
    ]
  }
}
</i18n>

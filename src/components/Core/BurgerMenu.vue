<template>
  <v-menu offset-y>
    <v-toolbar-side-icon slot="activator"/>
    <v-list>
      <v-list-tile
        v-for="item in menuItems"
        :key="item.name"
        :to="$i18nRoute({ name: item.name })">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>
          {{ $t(item.name) }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'burger-menu',
  data: () => ({
    menuItems: [
      {
        name: 'phenomena',
        icon: 'track_changes',
      },
      {
        name: 'impacts',
        icon: 'multiline_chart',
      },
      {
        name: 'historical-events',
        icon: 'timeline',
      },
      {
        name: 'alerts',
        icon: 'notifications_active',
      },
      {
        name: 'games',
        icon: 'games',
      },
    ],
  }),
};
</script>

<i18n>
{
  "en": {
    "phenomena": "Phenomena",
    "impacts": "Impacts",
    "historical-events": "Historical Events",
    "alerts": "Alerts",
    "games": "Minigames"
  },
  "zh": {
    "phenomena": "現象",
    "impacts": "影響",
    "historical-events": "歷史事件",
    "alerts": "預測與警報",
    "games": "小遊戲"
  }
}
</i18n>

<template>
  <v-container pt-3>
    <v-card color="transparent"
      max-width="880" class="bg-card">
      <v-card-text>
    <v-timeline dark :dense="mobile" :align-top="mobile">
      <v-timeline-item
        v-for="(event, i) in events" :key="i"
        small :color="event.color">
        <span
          slot="opposite"
          :class="`headline font-weight-bold ${event.color}--text`"
          v-text="event.year"/>
        <div>
          <event-card :title="$t(event.name)" :content="event" :ratio="16/10"/>
        </div>
      </v-timeline-item>
    </v-timeline>
    </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import events from '@/data/historical-events/events.json';

export default {
  name: 'historical-events-page',
  components: {
    EventCard: () => import('@/components/Cards/EventCard.vue'),
  },
  data: () => ({
    events,
  }),
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-card {
  margin: 0 auto;
  border-radius: 6px;
}
</style>

<i18n>
{
  "en": {
    "carrington-event": "Carrington Event",
    "quebec-electrical-blackout": "Quebec Electrical Blackout",
    "halloween-solar-storm": "\"Halloween\" Solar Storm",
    "space-fireworks-event": "Space Fireworks Event"
  },
  "zh": {
    "carrington-event": "卡靈頓事件",
    "quebec-electrical-blackout": "魁北克大停電",
    "halloween-solar-storm": "萬聖節太陽風暴",
    "space-fireworks-event": "太空煙花事件"
  }
}
</i18n>

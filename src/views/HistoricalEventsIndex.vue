<template>
  <v-container pt-3>
    <v-card class="bg-card">
      <v-card-text>
    <v-timeline :dense="mobile" :align-top="mobile">
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
import events from '@/data/historical-events-topic/events.json';

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
  border-radius: 6px;
  background: #ffffffe6;
}
</style>

<i18n>
{
  "en": {
    "carrington-event": "Carrington Event",
    "quebec-electrical-blackout": "Solar Flare - Quebec Electrical Blackout",
    "halloween-solar-storm": "\"Halloween\" Solar Storm"
  },
  "zh": {
    "carrington-event": "卡靈頓事件",
    "quebec-electrical-blackout": "太陽耀斑 - 魁北克電力系統中斷",
    "halloween-solar-storm": "萬聖節太陽風暴"
  }
}
</i18n>

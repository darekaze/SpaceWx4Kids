<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        light flat large
        class="text-capitalize px-3 mx-1"
        v-on="on">
        {{ $t('ack') }}
      </v-btn>
    </template>
    <Logs @dialog="dialog = false" />
  </v-dialog>
</template>

<script>
export default {
  components: {
    Logs: () => import('@/components/Core/Acknowledgement/Logs.vue'),
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<i18n>
{
  "en": {
    "ack": "Acknowledgement"
  },
  "zh": {
    "ack": "鳴謝"
  }
}
</i18n>

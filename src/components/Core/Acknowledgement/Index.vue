<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        light flat large
        class="text-capitalize px-3 mx-1"
        v-on="on">
        {{ $t('ack') }}
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Privacy Policy
      </v-card-title>

      <v-card-text>
        asdsadsadasd
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="dialog = false"
        >
          Accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
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

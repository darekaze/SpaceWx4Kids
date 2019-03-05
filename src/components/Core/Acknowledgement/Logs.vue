<template>
  <v-card>
    <v-card-title primary-title class="headline grey lighten-2">
      Acknowledgement
    </v-card-title>

    <v-card-text>
      Thank you for the following xxxx...
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="$emit('dialog')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

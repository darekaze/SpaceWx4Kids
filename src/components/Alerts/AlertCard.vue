<template>
  <v-card>
    <v-layout row wrap>
      <v-flex xs12 sm5>
        <v-img
          :src="require(`@/assets/images/${info.image}`)"
          :aspect-ratio="$vuetify.breakpoint.xsOnly ? 2.2 : 1.6">
          <v-layout fill-height align-end justify-end>
            <indicator
              :scale="condition.scale"
              :msg="condition.message"
              class="pb-2 pr-3 grey--text text--lighten-3 subheading"/>
          </v-layout>
        </v-img>
      </v-flex>
      <v-flex xs12 sm7>
        <v-container fill-height>
          <v-layout wrap ma-0>
            <v-flex xs12>
              <h3 class="title indigo--text font-weight-bold mb-2">
                {{ info.name }}
              </h3>
              <div class="body-1">
                {{ info.description }}
              </div>
            </v-flex>
            <v-flex align-self-end>
              <!-- action btns -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  components: {
    Indicator: () => import('@/components/Alerts/Indicator.vue'),
  },
  props: {
    info: Object,
    condition: Object,
  },
};
</script>

<style>

</style>

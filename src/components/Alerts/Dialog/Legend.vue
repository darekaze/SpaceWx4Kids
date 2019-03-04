<template>
  <v-expansion-panel v-model="panel" expand class="expantion mt-3">
    <v-expansion-panel-content>
      <v-card flat>
        <v-card-title class="px-0 py-2">
          <v-layout>
            <v-flex xs5 sm4>
              <strong>Scale</strong>
            </v-flex>
            <v-flex>
              <strong>Definition</strong>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-timeline align-top dense class="pt-0">
            <v-timeline-item small
              v-for="(value, key) in scales[code]" :key="key"
              :color="getColor(value.scale)"
              class="pb-0">
              <v-layout pt-3>
                <v-flex xs4 sm3>
                  <strong>{{ key }}</strong>
                </v-flex>
                <v-flex>
                  <strong>{{ value.intensity }}</strong>
                  <div class="body-1" v-html="value.definition"/>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import getColor from '@/helpers/indicatorColor';
import scales from './legends.json';
// TODO: Locale

export default {
  props: { code: String },
  data: () => ({
    scales,
    panel: [false],
  }),
  methods: {
    getColor,
    display() {
      this.panel = [!this.panel[0]];
    },
  },
};
</script>

<style lang="scss" scoped>
.expantion {
  box-shadow: none;
  margin-top: 2px;
}
</style>

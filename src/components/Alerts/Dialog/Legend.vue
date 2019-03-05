<template>
  <v-expansion-panel v-model="panel" expand class="expantion mt-3">
    <v-expansion-panel-content>
      <v-card flat>
        <v-card-title class="px-0 py-2">
          <v-layout>
            <v-flex xs5 sm4>
              <strong>{{ $t('scale') }}</strong>
            </v-flex>
            <v-flex>
              <strong>{{ $t('definition') }}</strong>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-timeline align-top dense class="pt-0">
            <v-timeline-item small
              v-for="(value, key) in $t(code)" :key="key"
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

export default {
  props: { code: String },
  data: () => ({
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

<i18n>
{
  "en": {
    "scale": "Scale",
    "definition": "Definition",
    "R": {
      "R5": {
        "scale": "5",
        "definition": "X-ray peak flux = 2 x 10<sup>-3</sup> Wm<sup>-2</sup><br>(X20 flare)",
        "intensity": "Extreme"
      },
      "R4": {
        "scale": "4",
        "definition": "X-ray peak flux = 1 x 10<sup>-3</sup> Wm<sup>-2</sup><br>(X10 flare)",
        "intensity": "Severe"
      },
      "R3": {
        "scale": "3",
        "definition": "X-ray peak flux = 1 x 10<sup>-4</sup> Wm<sup>-2</sup><br>(X1 flare)",
        "intensity": "Strong"
      },
      "R2": {
        "scale": "2",
        "definition": "X-ray peak flux = 5 x 10<sup>-5</sup> Wm<sup>-2</sup><br>(M2 flare)",
        "intensity": "Moderate"
      },
      "R1": {
        "scale": "1",
        "definition": "X-ray peak flux = 1 x 10<sup>-5</sup> Wm<sup>-2</sup><br>(M1 flare)",
        "intensity": "Minor"
      },
      "No Scale": {
        "scale": "0",
        "definition": "X-ray peak flux &lt; 1 x 10-5 Wm<sup>-2</sup>",
        "intensity": "-"
      }
    },
    "S": {
      "S5": {
        "scale": "5",
        "definition": "10 MeV particles flux = 10<sup>5</sup> pfu",
        "intensity": "Extreme"
      },
      "S4": {
        "scale": "4",
        "definition": "10 MeV particles flux = 10<sup>4</sup> pfu",
        "intensity": "Severe"
      },
      "S3": {
        "scale": "3",
        "definition": "10 MeV particles flux = 10<sup>3</sup> pfu",
        "intensity": "Strong"
      },
      "S2": {
        "scale": "2",
        "definition": "10 MeV particles flux = 10<sup>2</sup> pfu",
        "intensity": "Moderate"
      },
      "S1": {
        "scale": "1",
        "definition": "10 MeV particles flux = 10 pfu",
        "intensity": "Minor"
      },
      "No Scale": {
        "scale": "0",
        "definition": "10 MeV particles flux &lt; 10 pfu",
        "intensity": "-"
      }
    },
    "G": {
      "G5": {
        "scale": "5",
        "definition": "Kp index = 9",
        "intensity": "Extreme"
      },
      "G4": {
        "scale": "4",
        "definition": "Kp index = 8",
        "intensity": "Severe"
      },
      "G3": {
        "scale": "3",
        "definition": "Kp index = 7",
        "intensity": "Strong"
      },
      "G2": {
        "scale": "2",
        "definition": "Kp index = 6",
        "intensity": "Moderate"
      },
      "G1": {
        "scale": "1",
        "definition": "Kp index = 5",
        "intensity": "Minor"
      },
      "No Scale": {
        "scale": "0",
        "definition": "Kp index &lt; 5",
        "intensity": "-"
      }
    }
  },
  "zh": {
    "scale": "級別",
    "definition": "定義",
    "R": {
      "R5": {
        "scale": "5",
        "definition": "X射線最高流量 = 2 x 10<sup>-3</sup> Wm<sup>-2</sup><br>(X20級耀班)",
        "intensity": "極端"
      },
      "R4": {
        "scale": "4",
        "definition": "X射線最高流量 = 1 x 10<sup>-3</sup> Wm<sup>-2</sup><br>(X10級耀班)",
        "intensity": "激烈"
      },
      "R3": {
        "scale": "3",
        "definition": "X射線最高流量 = 1 x 10<sup>-4</sup> Wm<sup>-2</sup><br>(X1級耀班)",
        "intensity": "強大"
      },
      "R2": {
        "scale": "2",
        "definition": "X射線最高流量 = 5 x 10<sup>-5</sup> Wm<sup>-2</sup><br>(M2級耀班)",
        "intensity": "溫和"
      },
      "R1": {
        "scale": "1",
        "definition": "X射線最高流量 = 1 x 10<sup>-5</sup> Wm<sup>-2</sup><br>(M1級耀班)",
        "intensity": "細小"
      },
      "無級別": {
        "scale": "0",
        "definition": "X射線最高流量 &lt; 1 x 10-5 Wm<sup>-2</sup>",
        "intensity": "-"
      }
    },
    "S": {
      "S5": {
        "scale": "5",
        "definition": "10兆電子伏高能質子通量 = 10<sup>5</sup> pfu",
        "intensity": "極端"
      },
      "S4": {
        "scale": "4",
        "definition": "10兆電子伏高能質子通量 = 10<sup>4</sup> pfu",
        "intensity": "激烈"
      },
      "S3": {
        "scale": "3",
        "definition": "10兆電子伏高能質子通量 = 10<sup>3</sup> pfu",
        "intensity": "強大"
      },
      "S2": {
        "scale": "2",
        "definition": "10兆電子伏高能質子通量 = 10<sup>2</sup> pfu",
        "intensity": "溫和"
      },
      "S1": {
        "scale": "1",
        "definition": "10兆電子伏高能質子通量 = 10 pfu",
        "intensity": "細小"
      },
      "無級別": {
        "scale": "0",
        "definition": "10兆電子伏高能質子通量 &lt; 10 pfu",
        "intensity": "-"
      }
    },
    "G": {
      "G5": {
        "scale": "5",
        "definition": "Kp指數 = 9",
        "intensity": "極端"
      },
      "G4": {
        "scale": "4",
        "definition": "Kp指數 = 8",
        "intensity": "激烈"
      },
      "G3": {
        "scale": "3",
        "definition": "Kp指數 = 7",
        "intensity": "強大"
      },
      "G2": {
        "scale": "2",
        "definition": "Kp指數 = 6",
        "intensity": "溫和"
      },
      "G1": {
        "scale": "1",
        "definition": "Kp指數 = 5",
        "intensity": "細小"
      },
      "無級別": {
        "scale": "0",
        "definition": "Kp指數 &lt; 5",
        "intensity": "-"
      }
    }
  }
}
</i18n>

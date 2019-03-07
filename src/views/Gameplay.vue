<template>
  <v-container>
    <unity
      src="static/Build/responsive_webGL.json"
      width="1000" height="600"
      unityLoader="static/Build/UnityLoader.js"/>
  </v-container>
</template>

<script>
import Unity from 'vue-unity-webgl';

export default {
  name: 'gameplay-page',
  components: {
    Unity,
  },
};
</script>

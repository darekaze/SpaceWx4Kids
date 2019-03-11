<template>
  <v-container>
    <!-- TODO: Add resize canvas on viewport change -->
    <unity
      src="static/Build/responsive_webGL.json"
      width="100%" height="100%"
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

<style lang="scss" scoped>
.unity {
  .unity-container {
    margin: auto;
    color: red;
  }
}
</style>

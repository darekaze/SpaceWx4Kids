<template>
  <v-container v-if="$vuetify.breakpoint.smAndUp">
    <unity
      src="Builds/quiz/quiz_web.json"
      width="100%" height="600"
      :unityLoader="`Builds/quiz/UnityLoader.js`"/>
    <v-btn
      dark color="blue"
      :to="$i18nRoute({ name: 'games' })">
      <v-icon class="pr-2">keyboard_arrow_left</v-icon>{{ $t('back') }}
    </v-btn>
  </v-container>
</template>

<script>
import Unity from 'vue-unity-webgl';

export default {
  name: 'gameplay-page',
  components: { Unity },
};
</script>

<style lang="scss" scoped>
.webgl-content {
  text-align: right;
}
</style>

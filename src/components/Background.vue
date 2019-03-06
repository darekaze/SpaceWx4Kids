<template>
  <div class="dark " :class="bg">
    <slot/>
  </div>
</template>

<script>
export default {
  computed: {
    atHome() {
      return /^\/\w+\/?$/.test(this.$route.path); // match locale route
    },
    bg() {
      // Switch bg-img at HomeDesktop, otherwise don't
      const homeAndDesktop = this.atHome && this.$vuetify.breakpoint.mdAndUp;
      return `space-bg-${homeAndDesktop ? 'special' : 'normal'}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.space-bg {
  background-color: #263238;

  &-normal {
    background-image: url('../assets/images/space_background.jpg');
    background-repeat: repeat-y;
    background-size: 100vw auto;
    min-height: calc(100vh - 124px);
  }

  &-special { // Need further change
    background-image: url('../assets/images/index.png');
    background-repeat: repeat-y;
    background-size: 100vw auto;
    min-height: calc(100vh - 124px);
  }
}
</style>

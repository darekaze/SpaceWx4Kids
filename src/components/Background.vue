<template>
  <div class="dark " :class="bg">
    <slot/>
  </div>
</template>

<script>
export default {
  computed: {
    atHome() { // match locale route
      return /^\/\w+\/?$/.test(this.$route.path);
    },
    bg() { // Switch bg-img at HomeDesktop, otherwise don't
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
    min-height: calc(100vh - 120px);
  }

  &-special { // Need further change, TEMP: Switch to png for no animation
    background-image: url('../assets/images/index.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>

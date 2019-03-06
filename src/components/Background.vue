<template>
  <div class="dark space-bg">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.space-bg {
  background-color: #263238;
  background-image: url('../assets/images/space_background.jpg');
  background-repeat: repeat-y;
  background-size: 100vw auto;
  min-height: calc(100vh - 124px);
}
</style>

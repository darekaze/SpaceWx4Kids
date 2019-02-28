<template>
  <div class="space-bg dark">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.space-bg {
  background-color: #021e7a;
  background-image: url('../assets/images/space_background.jpg');
  background-repeat: repeat-y;
  background-size: 100vw auto;
  min-height: calc(100vh - 60px);
}
</style>

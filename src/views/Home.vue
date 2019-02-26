<template>
  <div>
    <HelloI18n/>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HelloI18n from '@/components/HelloI18n.vue';

export default {
  components: {
    HelloWorld,
    HelloI18n,
  },
};
</script>

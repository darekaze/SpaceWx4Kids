<template>
  <div>
    <status-indicator
      pulse positive
      :intermediary="isMinor"
      :negative="isMajor"/>
    <span class="pl-2">{{ msg }}</span>
  </div>
</template>

<script>
import 'vue-status-indicator/styles.css';
import { StatusIndicator } from 'vue-status-indicator';

export default {
  components: {
    StatusIndicator,
  },
  props: {
    scale: Number,
    msg: String,
  },
  computed: {
    isMinor() { return this.scale >= 1; },
    isMajor() { return this.scale >= 3; },
  },
};
</script>

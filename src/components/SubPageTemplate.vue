<template>
  <div>
    <v-layout justify-center pt-4>
      <img class="img-valign" :src="require(`@/assets/${icon}`)" alt="" />
      <span class="white--text titl text-uppercase">{{ title }}</span>
    </v-layout>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:300');

.img-valign {
  height: 75px;
  vertical-align: middle;
  margin-right: 12px;
}
.titl {
  font-family: 'Saira Extra Condensed','cwTeXYen', sans-serif !important;
  font-size: 56px !important;
}

@media only screen and (max-width: 600px) {
  .img-valign {
    height: 55px;
  }
  .titl {
    font-size: 40px !important;
  }
}
</style>

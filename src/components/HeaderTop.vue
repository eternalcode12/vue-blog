<template>
  <div class="header-top" :class="{ addBottomShadow: flag }">
    <div class="ww">
      <div class="logo">ETERNALCODER</div>
      <ul class="navigation">
        <li v-for="(navigator, index) of navigators" :key="index">
          <div>
            <a href="navigator.url">{{ navigator.name }}</a>
            <i
              v-if="navigator.flag"
              class="fa fa-angle-down"
              aria-hidden="true"
            ></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HeaderTop",
  computed: {
    ...mapState({
      navigators: (state) => state.home.navigators,
      flag: (state) => state.home.flag,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/header-top.scss";
</style>

<template>
  <div class="header-top">
    <div class="ww">
      <div class="logo">ETERNALCODER</div>
      <ul class="navigation">
        <li v-for="(navigator, index) of navigators" :key="index">
          <template>
            <div>
              <a href="navigator.url">{{ navigator.name }}</a>
              <i
                v-if="navigator.flag"
                class="fa fa-angle-down"
                aria-hidden="true"
              ></i>
            </div>
          </template>
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
    }),
  },
  created() {
    console.log(this.navigators);
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/header-top.scss";
</style>

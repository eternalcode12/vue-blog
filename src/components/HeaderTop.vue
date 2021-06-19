<template>
  <div class="header-top" :class="{ addBottomShadow: flag }">
    <div class="ww">
      <div class="logo" @click="toHome">ETERNALCODER</div>
      <ul class="navigation">
        <li v-for="(navigator, index) of navigators" :key="index">
          <div>
            <a :href="navigator.url">{{ navigator.name }}</a>
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
import { mapMutations, mapState } from "vuex";
export default {
  name: "HeaderTop",
  computed: {
    ...mapState({
      navigators: (state) => state.home.navigators,
      flag: (state) => state.home.flag,
    }),
  },
  methods: {
    ...mapMutations({
      toGoBackHome: (mutations) => mutations.home.toGoBackHome,
    }),
    toHome() {
      this.$store.commit("toGoBackHome", this.$router);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/header-top.scss";
</style>

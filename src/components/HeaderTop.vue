<template>
  <div class="header-top" :class="{ addBottomShadow: flag }">
    <div class="ww">
      <div class="logo" @click="toHome">ETERNALCODER</div>
      <ul class="navigation">
        <li v-for="(navigator, index) of navigators" :key="index">
          <div>
            <a
              href="javascript:void(0);"
              @mouseover="dropMenuFlag = true"
              @mouseleave="dropMenuFlag = false"
              v-if="navigator.name === 'BLOG'"
              >{{ navigator.name }}</a
            >
            <a :href="navigator.url" v-else>{{ navigator.name }}</a>
            <i
              v-if="navigator.flag"
              class="fa fa-angle-down"
              aria-hidden="true"
            ></i>
          </div>
        </li>
        <transition name="fade">
          <div
            class="dropMenu"
            v-show="dropMenuFlag"
            @mouseover="dropMenuFlag = true"
            @mouseleave="dropMenuFlag = false"
          >
            <a :href="item.url" :key="index" v-for="(item, index) of blogChild">
              {{ item.name }}
            </a>
          </div>
        </transition>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "HeaderTop",
  data() {
    return {
      dropMenuFlag: false,
    };
  },
  computed: {
    ...mapState({
      navigators: (state) => state.home.navigators,
      flag: (state) => state.home.flag,
      blogChild: (state) => state.home.blogChild,
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

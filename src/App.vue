<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations, mapState, mutations } from "vuex";
export default {
  data() {
    return {
      scroll: "",
    };
  },
  computed: {
    ...mapState({
      flag: (state) => state.home.flag,
    }),
  },
  methods: {
    ...mapMutations({
      updateAddBottomShadowFlag: (mutations) =>
        mutations.home.updateAddBottomShadowFlag,
    }),
    scrollDs(e) {
      if (e.path[1].scrollY !== 0) {
        this.$store.commit("updateAddBottomShadowFlag", true);
      } else {
        this.$store.commit("updateAddBottomShadowFlag", false);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollDs, true);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import "@/style/base.scss";
</style>

<template>
  <div class="footer-banner">
    <div class="ww">
      <div class="item" v-for="(footerIcon, index) of footerIcons" :key="index">
        <i :class="`fa ${footerIcon.icon}`" aria-hidden="true"></i>
        <span>{{ footerIcon.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FooterBanner",
  computed: {
    ...mapState({
      footerIcons: (state) => state.home.footerIcons,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/home/footer-banner.scss";
</style>

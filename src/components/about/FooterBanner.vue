<template>
  <div class="footer-banner">
    <div class="ww">
      <div
        class="item"
        v-for="(footerBanner, index) of footerBanners"
        :key="index"
      >
        <div class="title">
          {{ footerBanner.title }}
        </div>
        <ul>
          <li v-for="(item, index) of footerBanner.contentLists" :key="index">
            {{ item }}
          </li>
        </ul>
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
      footerBanners: (state) => state.about.footerBanners,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/about/footer-banner.scss";
</style>

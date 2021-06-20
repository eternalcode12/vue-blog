<template>
  <div class="blog-grid">
    <header-top></header-top>
    <banner-component>BLOG GRID</banner-component>
    <grid></grid>
    <footer-banner> </footer-banner>
    <foot></foot>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import BannerComponent from "@/components/BannerComponent";
import Grid from "@/components/blog/grid/Grid";
import FooterBanner from "@/components/home/FooterBanner";
import Foot from "@/components/Foot";
export default {
  name: "BlogGrid",
  components: {
    HeaderTop,
    BannerComponent,
    Grid,
    FooterBanner,
    Foot,
  },
};
</script>

<style lang='scss' scoped>
</style>

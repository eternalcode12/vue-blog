<template>
  <div class="blog-classic">
    <header-top></header-top>
    <banner-component>BLOG CLASSIC</banner-component>
    <blog-component></blog-component>
    <footer-banner></footer-banner>
    <foot></foot>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import BannerComponent from "@/components/BannerComponent";
import BlogComponent from "@/components/blog/classic/BlogComponent";
import FooterBanner from "@/components/home/FooterBanner";
import Foot from "@/components/Foot";
export default {
  name: "BlogClassic",
  components: {
    HeaderTop,
    BannerComponent,
    BlogComponent,
    FooterBanner,
    Foot,
  },
};
</script>

<style lang='scss' scoped>
</style>

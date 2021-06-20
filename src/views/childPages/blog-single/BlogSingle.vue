<template>
  <div class="blog-single">
    <header-top></header-top>
    <banner-component>BLOG SINGLE</banner-component>
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
  name: "BlogSingle",
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

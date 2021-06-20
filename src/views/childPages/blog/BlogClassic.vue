<template>
  <div class="blog-classic">
    <header-top></header-top>
    <banner-component>BLOG CLASSIC</banner-component>
    <blog-component></blog-component>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import BannerComponent from "@/components/BannerComponent";
import BlogComponent from "@/components/blog/classic/BlogComponent";
export default {
  name: "BlogClassic",
  components: {
    HeaderTop,
    BannerComponent,
    BlogComponent,
  },
};
</script>

<style lang='scss' scoped>
</style>

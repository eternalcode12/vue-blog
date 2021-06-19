<template>
  <div class="home">
    <header-top></header-top>
    <banner></banner>
    <pic-wall></pic-wall>
    <photo-wall></photo-wall>
    <footer-banner></footer-banner>
    <foot></foot>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import Banner from "@/components/home/Banner";
import PicWall from "@/components/home/PicWall";
import PhotoWall from "@/components/home/PhotoWall";
import FooterBanner from "@/components/home/FooterBanner";
import Foot from "@/components/Foot";
export default {
  name: "Home",
  components: {
    HeaderTop,
    Banner,
    PicWall,
    PhotoWall,
    FooterBanner,
    Foot,
  },
};
</script>

<template>
  <div class="home">
    <header-top></header-top>
    <banner></banner>
    <pic-wall></pic-wall>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import Banner from "@/components/home/Banner";
import PicWall from "@/components/home/PicWall";
export default {
  name: "Home",
  components: {
    HeaderTop,
    Banner,
    PicWall,
  },
};
</script>

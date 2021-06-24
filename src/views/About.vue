<template>
  <div class="about">
    <header-top></header-top>
    <banner-component>ABOUT US</banner-component>
    <services></services>
    <team></team>
    <footer-banner></footer-banner>
    <foot></foot>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import Services from "@/components/about/Services";
import Team from "@/components/about/Team";
import FooterBanner from "@/components/about/FooterBanner";
import Foot from "@/components/Foot";
import BannerComponent from "@/components/BannerComponent";
import { getTest } from "@/api/home";
export default {
  name: "About",
  components: {
    HeaderTop,
    Services,
    Team,
    FooterBanner,
    Foot,
    BannerComponent,
  },
  created() {
    console.log(123);
    getTest()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang='scss' scoped>
</style>

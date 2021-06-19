<template>
  <div class="service">
    <header-top></header-top>
    <banner-component>OUR SERVICE</banner-component>
    <services></services>
    <client></client>
    <footer-banner></footer-banner>
    <foot></foot>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import BannerComponent from "@/components/BannerComponent";
import Services from "@/components/about/Services";
import Client from "@/components/service/Client";
import Foot from "@/components/Foot";
import FooterBanner from "@/components/about/FooterBanner";
export default {
  name: "Service",
  components: {
    HeaderTop,
    BannerComponent,
    Services,
    Client,
    Foot,
    FooterBanner,
  },
};
</script>

<style lang='scss' scoped>
</style>

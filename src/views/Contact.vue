<template>
  <div class="contact">
    <header-top></header-top>
    <banner-component>CONTACT US</banner-component>
    <send-msg></send-msg>
    <footer-banner></footer-banner>
    <foot></foot>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import BannerComponent from "@/components/BannerComponent";
import SendMsg from "@/components/contact/SendMsg";
import FooterBanner from "@/components/about/FooterBanner";
import Foot from "@/components/Foot";
export default {
  name: "Contact",
  components: {
    HeaderTop,
    BannerComponent,
    SendMsg,
    FooterBanner,
    Foot,
  },
};
</script>

<style lang='scss' scoped>
</style>

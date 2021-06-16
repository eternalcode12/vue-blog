<template>
  <div class="home">
    <header-top></header-top>
    <banner></banner>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import Banner from "@/components/home/Banner";
export default {
  name: "Home",
  components: {
    HeaderTop,
    Banner,
  },
};
</script>

<template>
  <div class="home">
    <header-top></header-top>
    <banner></banner>
    <pic-wall></pic-wall>
    <photo-wall></photo-wall>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import Banner from "@/components/home/Banner";
import PicWall from "@/components/home/PicWall";
import PhotoWall from "@/components/home/PhotoWall";
import { mapMutations, mapState, mutations } from "vuex";
export default {
  name: "Home",
  components: {
    HeaderTop,
    Banner,
    PicWall,
    PhotoWall,
  },
  data() {
    return {
      scroll: "",
    };
  },
  computed: {
    ...mapState({
      flag: (state) => state.home.flag,
    }),
  },
  methods: {
    ...mapMutations({
      updateAddBottomShadowFlag: (mutations) =>
        mutations.home.updateAddBottomShadowFlag,
    }),
    scrollDs(e) {
      if (e.path[1].scrollY !== 0) {
        this.$store.commit("updateAddBottomShadowFlag", true);
      } else {
        this.$store.commit("updateAddBottomShadowFlag", false);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollDs, true);
  },
};
</script>

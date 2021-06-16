<template>
  <div class="banner">
    <div class="ww">
      <div class="title">HELLO，I AM ETERNALCODER.</div>
      <div class="content">
        <span>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla</span
        >
        <span>pariatur Excepteur sint occaec non anim id est laborum.</span>
      </div>
      <div class="line"></div>
      <div class="contact">
        <a
          :href="fontIcon.url"
          v-for="(fontIcon, index) of fontIcons"
          :key="index"
          target="_blank"
        >
          <i
            :class="['fa', 'fa-icon', `${fontIcon.icon}`]"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Banner",
  computed: {
    ...mapState({
      fontIcons: (state) => state.home.fontIcons,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/home/banner.scss";
</style>

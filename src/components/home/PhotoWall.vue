<template>
  <div class="photo-wall">
    <div class="ww">
      <div class="left">
        <template v-for="(leftPic, index) of pics[0]">
          <img :key="index" :src="leftPic.url" :alt="leftPic.alt" />
        </template>
      </div>
      <div class="middle">
        <template v-for="(middlePic, index) of pics[1]">
          <img :key="index" :src="middlePic.url" :alt="middlePic.alt" />
        </template>
      </div>
      <div class="right">
        <template v-for="(rightPic, index) of pics[2]">
          <img :key="index" :src="rightPic.url" :alt="rightPic.alt" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PhotoWall",
  computed: {
    ...mapState({
      pics: (state) => state.home.pics,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/home/photo-wall.scss";
</style>

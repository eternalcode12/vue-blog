<template>
  <div class="photo-wall">
    <div class="ww">
      <div class="left">
        <template v-for="(leftPic, index) of pics[0]">
          <div :key="index">
            <img :src="leftPic.url" :alt="leftPic.alt" class="imgList" />
            <div class="title"></div>
          </div>
        </template>
      </div>
      <div class="middle">
        <template v-for="(middlePic, index) of pics[1]">
          <div :key="index">
            <img
              :key="index"
              :src="middlePic.url"
              :alt="middlePic.alt"
              class="imgList"
            />
          </div>
        </template>
      </div>
      <div class="right">
        <template v-for="(rightPic, index) of pics[2]">
          <div :key="index">
            <img
              :key="index"
              :src="rightPic.url"
              :alt="rightPic.alt"
              class="imgList"
            />
          </div>
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

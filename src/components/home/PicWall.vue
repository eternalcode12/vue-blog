<template>
  <div class="pic-wall">
    <div class="ww">
      <template v-for="(picChoice, index) of picChoices">
        <div
          @click="addBottomLine(index)"
          :key="index"
          :class="{ setBottom: index === bottomLine }"
          ref="setBottom"
        >
          {{ picChoice }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PicWall",
  data() {
    return {
      bottomLine: 0,
    };
  },
  computed: {
    ...mapState({
      picChoices: (state) => state.home.picChoices,
    }),
  },
  methods: {
    addBottomLine(index) {
      this.bottomLine = index;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/home/pic-wall.scss";
</style>

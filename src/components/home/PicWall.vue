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
import { mapState, mapMutations } from "vuex";
export default {
  name: "PicWall",
  computed: {
    ...mapState({
      picChoices: (state) => state.home.picChoices,
      bottomLine: (state) => state.home.bottomLine,
    }),
  },
  methods: {
    ...mapMutations({
      updateBottomLine: (mutations) => mutations.home.updateBottomLine,
    }),
    addBottomLine(index) {
      this.$store.commit("updateBottomLine", index);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/home/pic-wall.scss";
</style>

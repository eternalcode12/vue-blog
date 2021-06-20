<template>
  <div class="grid">
    <div class="ww">
      <div class="outer">
        <div class="item" v-for="(item, index) of items" :key="index">
          <img :src="item.imgUrl" :alt="item.alt" />
          <div class="box">
            <h5>
              {{ item.tag }}
            </h5>
            <h2>{{ item.title }}</h2>
            <p v-for="(content, index) of item.contents" :key="index">
              {{ content }}
            </p>
            <div>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <!-- 这里是分页 -->
        <el-pagination background layout="prev, pager, next" :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Grid",
  computed: {
    ...mapState({
      items: (state) => state.grid.items,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/blog/grid/grid.scss";
</style>

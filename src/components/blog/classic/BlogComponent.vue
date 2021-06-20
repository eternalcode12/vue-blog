<template>
  <div class="blog-component">
    <div class="ww">
      <div class="outer">
        <div class="left">
          <!-- 以上为循环遍历 -->
          <div class="item" v-for="(article, index) of articles" :key="index">
            <img :src="article.imgUrl" :alt="article.alt" />
            <h3>{{ article.title }}</h3>
            <p class="desc">{{ article.info }}</p>
            <hr />
            <p
              class="content"
              v-for="(item, index) of article.contents"
              :key="index"
            >
              {{ item }}
            </p>
            <div>
              <button>
                Read more &nbsp;<i
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
          <!-- 这里是分页 -->
          <el-pagination background layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
        <div class="right" v-if="this.$route.path === '/blog-classic'">
          <!-- 这里用了组件分离其他多余内容 -->
          <right-component></right-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RightComponent from "./RightComponent.vue";
export default {
  name: "BlogComponent",
  components: {
    RightComponent,
  },
  computed: {
    ...mapState({
      articles: (state) => state.classic.articles,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/blog/classic/blog-component.scss";
</style>

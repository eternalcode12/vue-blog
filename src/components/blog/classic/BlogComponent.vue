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
            <p class="content" :class="{ active: flag === '/blog-single' }">
              {{ article.contents }}
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
import { mapState, mapActions } from "vuex";
import RightComponent from "./RightComponent.vue";
export default {
  name: "BlogComponent",
  components: {
    RightComponent,
  },
  data() {
    return {
      // 根据此标记判断是否显示该标签
      flag: null,
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.classic.articles,
    }),
  },
  methods: {
    ...mapActions({
      getApiBlogContent: actions => actions.classic.getApiBlogContent
    }),
    getBlogInfos() {
      this.$store.dispatch('getApiBlogContent')
    }
  },
  created() {
    // 这里是获取当前路径
    this.flag = this.$route.path;
    this.getBlogInfos()
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/blog/classic/blog-component.scss";
</style>

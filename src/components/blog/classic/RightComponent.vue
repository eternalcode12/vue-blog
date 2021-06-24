<template>
  <div class="outer">
    <!-- 搜索 -->
    <div class="right-component">
      <div class="box">
        <div class="title">SEARCH</div>
        <div class="component">
          <el-input
            placeholder="Search Keywords"
            @keyup.enter.native="submit"
            v-model="keyword"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>
    <!-- 个人信息 -->
    <div class="right-component">
      <div class="info">
        <div class="title">ABOUT</div>
        <div class="component">
          <div class="img">
            <img src="@/assets/images/blog-info.png" alt="" />
          </div>
          <p>
            Hye,I’m Ricky Walker residing in this beautiful world. apps with
            great UX and UI design.
          </p>
          <a href="#"
            >Read More&nbsp;<i
              class="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i
          ></a>
        </div>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="right-component">
      <div class="contact">
        <div class="title">SOCIAL LINKS</div>
        <div class="component">
          <a :href="icon.url" v-for="(icon, index) of icons" :key="index">
            <i :class="icon.class" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- 分类 -->
    <div class="right-component">
      <div class="categories">
        <div class="title">CATEGORIES</div>
        <ul>
          <li v-for="(category, index) of categories" :key="index">
            <a :href="category.url">
              {{ category.title }}
            </a>
            <span> (&nbsp;{{ category.count }}&nbsp;) </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 欢迎程度 -->
    <div class="right-component">
      <div class="popular">
        <div class="title">POPULAR POSTS</div>
        <ul>
          <li v-for="(popular, index) of populars" :key="index">
            <a :href="popular.url">
              <img :src="popular.imgUrl" alt="" />
              <div class="right">
                <h3>{{ popular.title }}</h3>
                <p>{{ popular.time }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 标签 -->
    <div class="right-component">
      <div class="tags">
        <div class="title">TAGS</div>
        <div class="bottom">
          <div class="tag" v-for="(tag, index) of tags" :key="index">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    <!-- 订阅 -->
    <div class="right-component">
      <div class="subscribe">
        <div class="title">SUBSCRIBE</div>
        <p>Get the latest news,discounts,offers.</p>
        <div class="input">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <el-input
            v-model="subscribe"
            @keyup.enter.native="submitSubscribe"
            placeholder="Enter Email Address"
          >
          </el-input>
        </div>
        <button @click="submitSubscribe">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "RightComponent",
  data() {
    return {
      // 关键字搜索
      keyword: "",
      // 订阅
      subscribe: "",
    };
  },
  computed: {
    ...mapState({
      icons: (state) => state.classic.icons,
      categories: (state) => state.classic.categories,
      populars: (state) => state.classic.populars,
      tags: (state) => state.classic.tags,
    }),
  },
  methods: {
    ...mapActions({
      getSubscribe: (actions) => actions.classic.getSubscribe,
    }),
    submit() {
      console.log(this.keyword);
    },
    submitSubscribe() {
      this.$store.dispatch("getSubscribe", {
        email: this.subscribe,
        message: this.$message,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/blog/classic/right-component";
</style>

<template>
  <div class="send-msg">
    <div class="ww">
      <div class="top">
        <h2>Let's keep in touch.</h2>
        <p v-for="(content, index) of contents" :key="index">
          {{ content }}
        </p>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="item">
            <el-input
              autocomplete
              v-model="form.name"
              placeholder="Your Name"
            ></el-input>
            <el-input
              autocomplete
              v-model="form.email"
              placeholder="Email"
            ></el-input>
          </div>
          <div class="item">
            <el-input
              autocomplete
              v-model="form.subject"
              placeholder="Subject"
            ></el-input>
            <el-input
              autocomplete
              type="password"
              v-model="form.password"
              placeholder="Password"
            ></el-input>
          </div>
          <div class="item">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4 }"
              placeholder="Your Message"
              v-model="form.content"
            >
            </el-input>
          </div>
          <div class="item">
            <button @click="sendMsg">Send Message</button>
          </div>
        </div>
        <div class="right">
          <div
            class="item"
            :key="index"
            v-for="(showContent, index) of showContents"
          >
            <img :src="showContent.imgUrl" :alt="showContent.alt" />
            <div class="box">
              <h4>{{ showContent.title }}</h4>
              <p>{{ showContent.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mapper">
        <baidu-map
          class="bm-view"
          :center="center"
          :zoom="zoom"
          @ready="handler"
          @click="getPoint"
        >
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
          <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
          <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
          <bm-marker :position="center" :dragging="true"> </bm-marker
        ></baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SendMsg",
  computed: {
    ...mapState({
      contents: (state) => state.contact.contents,
      showContents: (state) => state.contact.showContents,
    }),
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        password: "",
        content: "",
      },
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },
  methods: {
    sendMsg() {},
    handler({ BMap, map }) {
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    getPoint(e) {
      console.log(e);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/contact/send-msg.scss";
</style>

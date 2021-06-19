<template>
  <div class="client">
    <div class="ww">
      <div class="top">
        <div class="title">Our<span>Client</span></div>
        <div class="content">
          <span
            >Pharetra ipsum dignissim fermentum donec dolor tellus sodales
            pretium eget velit</span
          >
          <span>maecenas egestas massa sollicitudin rhoncus.</span>
        </div>
      </div>
      <div class="bottom">
        <img
          v-for="(img, index) of imgs"
          :key="index"
          :src="img.url"
          :alt="img.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Client",
  computed: {
    ...mapState({
      imgs: (state) => state.service.imgs,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/service/client.scss";
</style>

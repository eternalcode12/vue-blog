<template>
  <div class="services">
    <div class="ww">
      <div class="top">
        <div class="title">Our<span>Services</span></div>
        <div class="content">
          <span
            >Pharetra ipsum dignissim fermentum donec dolor tellus sodales
            pretium eget velit</span
          >
          <span>maecenas egestas massa sollicitudin rhoncus.</span>
        </div>
      </div>
      <div class="bottom">
        <div class="item" v-for="(service, index) of services" :key="index">
          <img :src="service.imgUrl" :alt="service.alt" />
          <div class="title">{{ service.title }}</div>
          <p>{{ service.content1 }}</p>
          <p>{{ service.content2 }}</p>
          <p>{{ service.content3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Services",
  computed: {
    ...mapState({
      services: (state) => state.about.services,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/about/services.scss";
</style>

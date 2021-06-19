<template>
  <div class="banner-component">
    <div class="ww">
      <div class="banner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style lang='scss' scoped>
div.banner-component {
  height: 300px;
  width: 100%;
  background: rgb(246, 246, 246);
  margin-top: 70px;
  div.ww {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    div.banner {
      color: #222;
      font-size: 2em;
      font-weight: 600;
      letter-spacing: 4px;
    }
  }
}
</style>

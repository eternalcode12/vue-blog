<template>
  <div class="team">
    <div class="ww">
      <div class="top">
        <div class="title">Our<span>Team</span></div>
        <div class="content">
          <span
            >Pharetra ipsum dignissim fermentum donec dolor tellus sodales
            pretium eget velit</span
          >
          <span>maecenas egestas massa sollicitudin rhoncus.</span>
        </div>
      </div>
      <div class="bottom">
        <div class="item" v-for="(team, index) of teams" :key="index">
          <img :src="team.imgUrl" :alt="team.alt" />
          <h5>{{ team.name }}</h5>
          <span>{{ team.job }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Team",
  computed: {
    ...mapState({ teams: (state) => state.about.teams }),
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/about/team.scss";
</style>

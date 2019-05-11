<template>
  <div class="wall">
    <Head></Head>
    <div class="model01">
      <h3 class="title">平安里</h3>
      <div class="imgBox">
        <img src="@/assets/images/wall01.png" alt="">
      </div>
    </div>
    <div class="model02">
      <h3 class="title title2">朝阳门</h3>
      <div class="imgBox">
        <img src="@/assets/images/wall02.png" alt="">
      </div>
    </div>
    <div class="toback" @click="goback">
      <img class="backimg" src="@/assets/images/toback.png" alt="">
    </div>

    <Bottom></Bottom>
  </div>
</template>

<script>
import Head from "../common/Head";
import Bottom from "../common/Bottom";
export default {
  name: "wall",
  components: {
    Head,
    Bottom
  },
  methods: {
    goback() {
      if (window.history.length > 1) {
        history.go(-1);
      } else {
        window.location.href = "/index.php";
      }
    }
  }
};
</script>

<style scoped>
.model01,
.model02 {
  width: 1000px;
  margin: 0 auto;
}
.title {
  margin: 5px 0;
  width: 100px;
  height: 60px;
  background: rgb(141, 10, 10);
  font-size: 30px;
  color: #fff;
  line-height: 60px;
}
.title2 {
  background: rgb(141, 10, 10);
}
.imgBox > img {
  width: 1000px;
}
.wall{
  position: relative;
}
.toback{
  position: absolute;
  left: 30px;
  top:180px;
}
.backimg{
  width: 40px;
  height: 40px;
}

</style>

<template>
  <div class="delay">
    <input type="file" class="file">
    <div class="toback" @click="goback">
      <img class="backimg" src="@/assets/images/toback.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'delay',
  methods:{
    goback() {
      if (window.history.length > 1) {
        history.go(-1);
      } else {
        window.location.href = "/index.php";
      }
    }
  }
}
</script>

<style scoped>
.delay{
  text-align: center;
  line-height: 200px;
  position: relative;
}
.toback{
  position: absolute;
  left: 30px;
  top:-10px;
}
.backimg{
  width: 40px;
  height: 40px;
}
</style>

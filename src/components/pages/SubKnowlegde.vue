<template>
  <div class="knowlegde">
    <Head></Head>
    <div class="wrap">
      <div class="wrap1">
        <div class="wall" @click="wall">地铁文化墙</div>
        <div class="car" @click="car">车辆知识</div>
      </div>
      <div class="wrap2">
        <div class="equipment" @click="equipment">设备知识</div>
        <div class="introduce" @click="introduce">世界地铁介绍</div>
      </div>

    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Head from '../common/Head'
import Bottom from '../common/Bottom'
export default {
  name:'SubKnowlegde',
  components:{
    Head,
    Bottom
  },
  methods:{
    wall(){
      this.$router.push('./Wall');
    },
    car(){
      this.$router.push('./car');
    },
    equipment(){
      this.$router.push('./Equipment');
    },
    introduce(){
      this.$router.push('./Intro');
    }
  }
}
</script>

<style scoped>
.wrap{
  width: 1200px;
  margin:0 auto;
  background:#ddd;
}
.wrap1{
  margin-bottom: 50px;
}
.wrap1,.wrap2{
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wall,.car,.equipment,.introduce{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  line-height: 200px;
  font-size: 20px;
  color:#fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms;
}
.wall:hover,.car:hover,.equipment:hover,.introduce:hover{
  width: 250px;
  height: 250px;
  font-size: 28px;
  line-height: 250px;
  box-sizing: border-box;
}
.wall{
  background: rgb(208, 221, 31);
}
.car{
  background:rgb(83, 215, 233);
}
.equipment{
  background:rgb(221, 83, 233);
}
.introduce{
  background:rgb(83, 233, 133);
}
</style>

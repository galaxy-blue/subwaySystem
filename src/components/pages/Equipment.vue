<template>
  <div class="equip">
    <Head></Head>
    <div class="warp">
      <div class="model1">
        <h3>供电</h3>
        <p class="word">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地铁供电系统是保障地铁运营的动力能源，是地铁安全运营的重要设施。
          北京地铁供电系统由10KV电源系统、750V直流牵引供电系统、400V低压 配电系统、
          应急照明系统构成。引入的城市电网电源采用集中与分散相结合的供电方式。
          供电系统的构成具有较高的可靠性、稳定性和安全性，以保障连续不间断的供电。
        </p>
      </div>
      <div class="model2">
        <h3>信号</h3>
        <p class="word">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信号系统是地铁运输生产的基础设备之一，是实现集中统一指挥列车运行的重要手段，
          是保障行车安全、提高运输效率和运营管理水平的重要设施。先进的信号系统
          不但可以保证列车运行安全，而且可以最大限度地提高行车效率，减小列车运行间隔，
          提高旅行速度和列车运行正点率，实现行车指挥自动化和列车运行自动化，对于降低建设、
          运营管理成本，为乘客提供安全、快捷高质量服务起到积极作用。
        </p>
      </div>
      <div class="model3">
        <h3>通信</h3>
        <p class="word">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京地铁通信系统由传输、无线、公务电话、闭路电视、专用电话
          （包括调度电话、集中电话）、广播、时钟等子系统组成，构成传送语音、文字、
          数据、图 像等各种信息的综合业务通信网。它是地铁运营指挥的重要手段，
          同时在出现异常情况时，能迅速转变为供防灾救援和事故处理的指挥通信使用。
        </p>
      </div>
    </div>
    <Bottom></Bottom>
    <div class="toback" @click="goback">
      <img class="backimg" src="@/assets/images/toback.png" alt="">
    </div>
  </div>
</template>

<script>
import Head from '../common/Head'
import Bottom from '../common/Bottom'
export default {
  name:'Equipment',
  components:{
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

}
</script>

<style scoped>
.warp{
  width: 1000px;
  margin:10px auto;
}
h3{
  width: 100px;
  height:50px;
  font-size: 28px;
  color:#fff;
  line-height: 50px;
  text-align: center;
  background: #ccc;
}
.word{
  width: 100%;
  background: #f5fafd;
  font-size: 15px;
  line-height: 20px;
  padding:10px;
  box-sizing: border-box;
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

<template>
  <div class="car">
    <Head></Head>
    <p class="word">&nbsp;&#160;&#160;&#160;&#160;&#160;&#160;&#160;北京地铁电动客车是北京地铁运营的主要载客工具，由于北京地 铁发展的历史长远，
      其所拥有的地铁电动客车类型与型号众多，电动客车的功能不断完善发展。现在所使用的
      最早生产的地铁列车为1969年生产的DK2型车 （后经技术改造，现为DK11型车），
      即将被更新淘汰。截止到目前为止，最新的车型为八通线新型交流电动客车。
      随着北京地铁的不断建设，将会有更多性能更 好、服务功能更完善的地铁电动客车投入运营。
    </p>
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
  name:'car',
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
.word{
  width: 1000px;
  margin:20px auto;
  font-size: 20px;
  line-height: 40px;
}
.car{
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

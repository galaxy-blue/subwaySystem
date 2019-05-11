<template>
  <div class="news">
    <h3>地铁十号线座椅改造</h3>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了缓解10号线部分车站早晚高峰时段换乘客流压力，减少限流及乘客排队等候时间，
       最大程度提升运输能力，北京地铁公司对10号线部分列车的客室座椅进行局部改造。
    </p>
    <p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;列车车厢座椅改造内容包括拆除部分车厢的六人座椅12套、三人座椅2套，
      增设腰靠设施26套。根据现有座椅布局和各车厢空间特点，两个头车各拆除4个六人座椅，
      改为4组腰靠；一个中间车拆除4个六人座椅及2个三人座椅，均改为腰靠；三个中间车不做改动。
      座椅改造后全列车增加乘客站立面积约21平方米,单列车最大运输能力提升5%。
    </p>
    <p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;改造后的首列车10116号列车自2019年4月9日早高峰上线运营以来运营情况良好。
      后续地铁公司将根据运力需求在年内对部分列车进行座椅改造，集中在早晚高峰时段投放使用，
      增加车厢站立面积的同时减小拥挤度，为广大乘客在高峰时段的出行提供高效便捷的服务。
    </p>
    <div class="toback" @click="goback">
      <img class="backimg" src="@/assets/images/toback.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'news',
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
h3{
  font-size: 30px;
  margin: 10px auto;
  width: 280px;
  height: 50px;
}
p{
  width: 1000px;
  margin:0 auto;
  font-size: 15px;
  line-height: 25px;
}
.toback{
  position: absolute;
  left: 30px;
  top:30px;
}
.backimg{
  width: 40px;
  height: 40px;
}
</style>

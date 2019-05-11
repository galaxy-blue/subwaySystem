<template>
  <div class="event">
    <h3>地铁大事记</h3>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016年月1日—3日(元旦期间),
        地铁公司所辖线路共运送乘客1636.76万人次。比去年同期增长4.59%；开行图定列车1.66万列，
        加开临客16列，列车运行图兑现率99.97%，正点率99.98%。
    </p>
    <p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1月20日
       《2015年度人民日报—政务指数微博影响力报告》正式发布。地铁公司官方微博（@北京地铁）
       入选2015年度全国十大政务机构微博。@北京地铁凭借总分82.59分（其中传播力86.67分、
       服务力99.53分、互动力70.05分）入选全国十大政务机构微博之列，并连续两年在全国十大交通机
       构微博排名中名列榜首。
    </p>

    <p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2月4日下午  市委书记郭金龙来到
       北京地铁太平湖车辆段和积水潭车站，检查地铁安全工作。市委副书记、市长王安顺一同检查。
       市领导张工、张建东、王小洪、王宁陪同检查
    </p>
    <p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2月7日—13日（春节期间）
       地铁公司所辖线网共运送乘客1935.44万人次。日均276.49万人次，开行列车37677列，
       加开临客17列。列车运行图兑现率99.99%，正点率99.99%。客流最高日为2月12日（初五），
       为343.54万人次。期间，共安检人员1640万人次、物品1534万件，查获违禁品与限带品1013件，
       劝离车站537人次。
    </p>
    <p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2月26日  地铁公司召开2016年工作
       会，会议全面总结了公司2015年及“十二五”期间工作成绩，客观分析了当前面临的形势和任务，
       明确部署了2016年工作任务。市交通委主任周正宇、市国资委副主任杨鸿宝出席大会并讲话。
    </p>
    <div class="toback" @click="goback">
      <img class="backimg" src="@/assets/images/toback.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'event',
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

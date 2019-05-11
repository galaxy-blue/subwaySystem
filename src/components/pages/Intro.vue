<template>
  <div class="intro">
    <Head></Head>
    <div class="wrap">
      <h3>罗马地铁</h3>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罗马地铁为&ldquo;X型&rdquo;
        的双线路地铁系统，其在罗马中央火车站交汇。
        第一条线 路&mdash;&mdash;B线南段，出于世博会交通考虑，于1955年建成通车，
        连接了罗马中央火车站和Laurentina（长 11km，其中6km为地下线路）。而多年后的1990年，
        B线的北段（至Rebibbia）终于开通运营（8km，其中7km为地下线路）。
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罗马的另一条地铁线路A线，
        其连接了罗马南部的Anagnina和西北部靠近
        Vatican City的Ottaviano，于1980年开通运营（线路长14.5km，几乎全部为地下线路）。
        1999年5月29日，A线西北延伸延伸线的第一段 （Cipro-Musei Vaticani站和Valle Aurelia站）
        投入使用；而其西北延伸线的最后3个站（Baldo degli Ubaldi站、Cornelia站和Battistini站）
        最终于2000年1月1日正式通车。
      </p>
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
  name:'intro',
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
.wrap{
  width: 1000px;
  background: #f5fafd;
  margin: 10px auto;
}
h3{
  width: 80px;
  height: 40px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
p{
  line-height: 28px;
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

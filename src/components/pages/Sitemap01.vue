<template>
  <div class="sitemap">
    <Head></Head>
    <div id="allmap"></div>
    <Bottom></Bottom>
  </div>
</template>
<script src="http://api.map.baidu.com/api?v=2.0&ak=NqGA6ujBdCRzjUMunBgYou7LkTSWhDPI"></script>
<script>
import Head from '../common/Head'
import Bottom from '../common/Bottom'
export default {
  name:'siteMap',
  components:{
    Head,
    Bottom
  }
}
</script>

<style scoped>
body, html,#allmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin:0;
  font-family:"微软雅黑";
  }
</style>

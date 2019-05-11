<template>
  <div class="login">
    <div class="bg">
      <div class="contentBox">
        <h1 class="title">北京地铁信息登录系统</h1>
        <div class="innerBg">
          <div class="inputBox">
            <input type="text" name="username" value="" placeholder="请输入您的用户名" class="textBox txtOne">
            <input type="password" name="psw" value="" placeholder="请输入密码" maxlength="6" class="textBox txtTwo">
            <input type="submit" name="sbt" value="登 录" class="loginBox">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped>
  body,
  html {
    width: 100%;
    height: 100%
  }

  .bg {
    width: 100%;
    height: 100%;
    /* background: url('../images/bg.png') no-repeat center center; */
    display: flex;
    justify-content: center;
    align-items: center;
    background:url('@/assets/images/bg.png') no-repeat center center;
  }

  .contentBox {
    width: 598px;
    height: 463px;
    border: 6px #7d909b solid;
    border-radius: 5px
  }

  .title {
    width: 100%;
    height: 92px;
    background: #242b31;
    color: #fff;
    text-align: center;
    line-height: 92px;
    font-size: 28px
  }

  .innerBg {
    width: 100%;
    height: 371px;
    background: #fff;
    overflow: hidden
  }

  .inputBox {
    width: 411px;
    height: 230px;
    margin: 38px auto
  }

  .textBox {
    width: 415px;
    height: 52px;
    margin-bottom: 23px;
    border: 1px solid #d2dbe2;
    border-radius: 2px;
    padding-left: 58px;
    box-sizing: border-box
  }

  /* .textBox:active {
    border: 1px solid #04c3b3
  } */

  .txtOne {
    background: url('@/assets/images/ren.png') no-repeat 19px center
  }

  .txtTwo {
    background: url('@/assets/images/sou.png') no-repeat 19px center
  }

  .loginBox {
    margin: 33px auto 0;
    margin-left: 84px;
    width: 247px;
    height: 50px;
    background: #04c3b3;
    border: 1px solid #04c3b3;
    border-radius: 5px;
    color: #fff;
    font-size: 23px;
    cursor: pointer
  }
</style>

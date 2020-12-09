<template>
  <div id="login">
    <div class="header">
      <div class="wrapper">
        <span>所在城市：北京</span>
        <i>联系电话：15855385074</i>
        <i class="pipe">|</i>
        <i>我是商家</i>
        <i class="pipe">|</i>
        <i>欢迎光临易和生活港</i>
      </div>
    </div>
    <div class="nav">
      <div class="wrapper">
        <div>
          <img src="../assets/header_logo.png" alt="" />
        </div>
        <div class="text">会员登陆</div>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
        <component :is="component"></component>
      </div>
    </div>
  </div>
</template>
<script>
import login from "../components/login/login";
import regiest from "../components/login/regiest";
export default {
  components: { login, regiest },
  data() {
    return {
      component: login,
    };
  },
};
</script>
<style lang="less" scoped>
.type-area {
  width: 1180px;
  margin: auto;
}
#login {
  .header {
    height: 34px;
    background: #eeeeee;
    font: 12px/34px "youyuan";
    .wrapper {
      .type-area();
      span {
        float: left;
      }
      i {
        float: right;
      }
      .pipe {
        margin: 0 18px;
      }
    }
  }
  .nav {
    height: 80px;
    padding: 25px 0;
    .wrapper {
      .type-area();
      font: bolder 26px/80px "youyuan";
      color: #666666;
      div {
        float: left;
      }
      .text {
        border-left: 1px solid #cecece;
        margin-left: 30px;
        padding-left: 30px;
      }
    }
  }
  .content {
    background: url("../assets/login_bg.png") center center no-repeat;
    background-size: 100% 100%;
    height: 570px;
    .wrapper {
      .type-area();
    }
  }
}
</style>
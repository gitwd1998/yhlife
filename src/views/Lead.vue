<template>
  <div id="lead">
    <div class="header">
      <div class="wrapper">
        <span>欢迎光临易和生活港</span>
        <i>联系电话：15855385074</i>
        <i class="pipe">|</i>
        <i>我是商家</i>
      </div>
    </div>
    <div class="nav">
      <div class="wrapper">
        <div>
          <img src="../assets/header_logo.png" alt="" />
        </div>
        <span><router-link to="/login">注册</router-link></span>
        <span class="pipe">|</span>
        <span><router-link to="/login">登录</router-link></span>
      </div>
    </div>
    <div class="content">
      <p>易和生活，纵享品质</p>
      <form>
        <input type="text" placeholder="请选择城市" class="text" />
        <span>北京</span>
        <input type="button" value="进入易和" class="btn" @click="handleInto" />
      </form>
    </div>
    <div class="footer">
      <p>版权所有 © 2016易和生活港 保留所有权利 | 沪ICP备12042163</p>
      <span>易和生活 </span>
      <span> 纵享品质</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleInto() {
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="less" scoped>
// 版心
.type-area {
  width: 1180px;
  margin: auto;
}
#lead {
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
      font: bolder 18px/80px "youyuan";
      color: #666666;
      div {
        float: left;
      }
      span {
        float: right;
      }
      .pipe {
        margin: 0 30px;
      }
    }
  }
  .content {
    background: url("../assets/lead_bg.png") center center no-repeat;
    background-size: 100% 100%;
    height: 710px;
    border-bottom: 2px solid #d3d3d3;
    text-align: center;
    p {
      font: 48px/50px "";
      padding: 150px 0 100px;
      color: #fff;
    }
    form {
      .text {
        background: #fff;
        padding-left: 30px;
        font: lighter 22px/56px "";
        text-indent: 30px;
        width: 360px;
        height: 56px;
      }
      span {
        width: 120px;
        height: 56px;
        background: #fff;
        font: lighter 22px/56px "";
        border-left: 1px solid #dcdcdc;
      }
      .btn {
        border-radius: 5px;
        width: 170px;
        height: 56px;
        font: 22px/56px "";
        background: #ec6a17;
        color: #fff;
        margin-left: 40px;
      }
    }
  }
  .footer {
    height: 94px;
    padding-top: 30px;
    text-align: center;
    font: 14px/30px "youyuan";
    p {
      color: #999999;
    }
    span {
      color: #008de1;
    }
  }
}
</style>
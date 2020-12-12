<template>
  <form>
    <div>
      <input type="text" placeholder="请输入用户名或手机号码">
      <p>这里是提示信息</p>
    </div>
    <div>
      <input type="password" placeholder="请输入密码">
      <p>这里是提示信息</p>
    </div>
    <div>
      <input type="button" value="注册" class="register" @click="$emit('handle-register')">
      <input type="button" value="登录" class="login" @click="$emit('to-login','login')">
    </div>
  </form>
</template>
<style lang="less" scoped>
form {
  float: right;
  width: 380px;
  height: 500px;
  margin: 35px;
  border-radius: 10px;
  background: #fff;
  .login{
    background: turquoise;
  }
  .register{
    background: tomato;
  }
}
</style>
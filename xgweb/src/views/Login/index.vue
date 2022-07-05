<template>
  <div class="login-container">
    <h1>有笑果后台管理系统</h1>
    <div class="login_box">
      <el-form
        ref="loginForm"
        :model="loginForm"
        label-width="60px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { setToken } from '@/utils/token.js'
export default {
  data () {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {

  },
  methods: {
    // 登录
    async login () {
      const res = await loginAPI(this.loginForm)
      console.log(res.data.token)
      setToken(res.data.token)
      // window.sessionStorage.setItem('token', res.data.data[0].token)
      this.$router.push('/home')
    },
    // 重置表单
    resetLoginForm (formName) {
      console.log('重置')
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  // width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  text-align: center;
  position: relative;

  h1 {
    color: #fff;
    padding-top: 4%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
  }

  .login_form {
    position: absolute;
    bottom: 0;
    top: 50%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    transform: translateY(-50%);
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

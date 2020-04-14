<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt class="avatar" />
      <el-form :model="userInfo" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="userInfo.username" placeholder="请输入用户名" prefix-icon="icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="userInfo.password" placeholder="请输入密码" prefix-icon="icon-key"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitForm(userInfo)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/apis/user.js'
export default {
  data () {
    return {
      userInfo: {
        username: '10086',
        password: '123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, message: '用户名长度不小于3位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '密码长度为3-16位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    submitForm () {
      // 使用ele的表单验证对用户输入的数据进行验证
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          // 通过表单验证之后，发起请求
          const res = await login(this.userInfo)
          console.log(res.data.data.user.id)
          if (res.data.message === '登录成功') {
            // 提示
            this.$message({
              type: 'success',
              message: '登录成功'
            })
            // 将用户的token存起来
            localStorage.setItem('toutaio_back_token', res.data.data.token)
            // 将用户ID存起来
            localStorage.setItem('toutiao_back_id', res.data.data.user.id)
            // 跳转到首页
            this.$router.push({ name: 'Index' })
          }
        } else {
          this.$message.warning('用户名输入不合法')
          return false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>

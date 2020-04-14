<template>
  <div class="index">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 顶部logo -->
        <div class="logo">
          <img src="http://img1.imgtn.bdimg.com/it/u=1938934097,1506879944&fm=26&gp=0.jpg" alt />
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened='true'
          :router='true'
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
              </template>
            <el-menu-item-group>
              <template slot="title">用户管理</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
              </template>
            <el-menu-item-group>
              <template slot="title">文章管理</template>
              <el-menu-item index="postList">文章列表</el-menu-item>
              <el-menu-item index="addPost">文章发布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>栏目管理</span>
              </template>
            <el-menu-item-group>
              <template slot="title">栏目管理</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="icon-paragraph-justify toggle-btn"></span>
          <span class="system-title">头条后台管理系统</span>
            <div class="welcome">
                <span>欢迎你：{{userInfo.nickname}}</span>&nbsp;&nbsp;&nbsp;
                <span class="logout" @click="logout">退出</span>
            </div>
        </el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { userInfo } from '@/apis/user.js'
export default {
  data () {
    return {
      userInfo: {
      }
    }
  },
  methods: {
    // 退出
    logout () {
      // 点击退出就返回登录页面，同时删除掉保存的ID和token
      localStorage.removeItem('toutiao_back_id')
      localStorage.removeItem('toutaio_back_token')
      this.$router.push({ name: 'Login' })
    }
  },
  async created () {
    // 进入页面根据ID来获取用户的数据来渲染页面
    const res = await userInfo(localStorage.getItem('toutiao_back_id'))
    // console.log(res)
    this.userInfo = res.data.data
  }
}
</script>

<style lang="less" scoped>
.index {
  .el-menu {
    border-right: none;
  }
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background-size: cover;
    background-color: #fff;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  // 0 0 2 0
  .welcome {
    color: white;
    .logout{
      cursor: pointer;
    }
  }
}
</style>

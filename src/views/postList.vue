<template>
  <div class="postlist">
    <!-- 顶部面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格部分 -->
    <el-table :data="postList" style="width: 100%; margin-top:50px">
      <!-- 标题部分 -->
      <el-table-column label="标题" width="480" prop="title"></el-table-column>
      <!-- 日期部分 -->
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <!-- 过滤器必须要放在slot-scope里面 -->
          <span style="margin-left: 10px">{{ scope.row.create_date |timeformart}}</span>
        </template>
        <!-- 类型部分 -->
      </el-table-column>
      <el-table-column label="类型" width="180" prop="type">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type| typeformart}}</span>
        </template>
      </el-table-column>
      <!-- 作者部分 -->
      <el-table-column label="作者" width="180" prop="user.nickname"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
      <template>
       <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 4, 6, 8]"
          :page-size="2"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
      </template>
  </div>
</template>

<script>
import { getPostList } from '@/apis/category.js'
export default {
  data () {
    return {
      postList: [],
      pageIndex: 1,
      pageSize: 2,
      currentPage: 1,
      total: 0
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    // 改变每页显示的条数
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.init()
    },
    // 翻页
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.pageIndex = val
      this.init()
    },
    async init () {
      const res = await getPostList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      console.log(res)
      // 总条数
      this.total = res.data.total
      this.postList = res.data.data
    }
  },
  filters: {
    // 修改时间
    timeformart (data, spe) {
      const date = new Date(data)
      spe = spe || '-'
      const years = date.getFullYear()
      const months = date.getMonth() + 1
      const days = date.getDate()
      return years + spe + months + spe + days
    },
    // 修改文章类型
    typeformart (type) {
      return type === 1 ? '文章' : '视频'
    }
  },
  created () {
    // 页面一加载就需要获取到数据列表
    this.init()
  }
}
</script>

<style lang="less" scoped>
</style>

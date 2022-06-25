<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>段造营</el-breadcrumb-item>
      <el-breadcrumb-item>段子工厂</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <el-card>
      <!-- 搜索 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addFactory">添加</el-button>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <ComTable
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @edit="editFactory"
        @del="delFactory"
      ></ComTable>
    </el-card>

    <!-- 增加和修改的弹出框 -->
    <el-dialog
      :title="operateType === 'add' ? '新增段子' : '修改段子'"
      :visible.sync="isShow"
      width="width">
      <div>
        <ComForm :form="operateForm" :formLabel="operateFormLabel" :inline="true"></ComForm>
      </div>
      <div slot="footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="isShow = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getJokesfacAPI } from '@/api'
import ComTable from '@/components/ComTable/index.vue'
import ComForm from '@/components/ComForm/index.vue'

export default {
  name: 'Factory',
  components: {
    ComTable,
    ComForm
  },
  data () {
    return {
      operateType: 'add',
      isShow: false,
      // 搜索
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条
        pagesize: 5
      },
      // 列表数据
      tableData: [
        {
          id: 1,
          date: '2016-05-01',
          name: '何广智',
          contribute: '稿件1'
        }
      ],
      tableLabel: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '演员'
        },
        {
          prop: 'contribute',
          label: '投稿'
        }
      ],
      // 增加和修改表单项
      operateForm: {
        date: '',
        name: '',
        contribute: ''
      },
      operateFormLabel: [
        {
          label: '日期',
          type: 'date'
        },
        {
          label: '演员',
          type: 'input'
        },
        {
          label: '投稿',
          type: 'input'
        }
      ],
      // 分页
      config: {
        page: 1,
        total: 30
      }
    }
  },
  methods: {
    async getList () {
      const res = await getJokesfacAPI()
      console.log(res, '段子工厂数据')
      this.tableData = res.data.data
    },
    // 增加
    addFactory () {
      this.isShow = true
    },
    // 编辑
    editFactory (row) {
      this.operateType = ''
      this.isShow = true
      console.log(row.id, '编辑的id')
    },
    // 删除
    delFactory (row) {
      console.log(row.id, '删除的id')
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>
</style>

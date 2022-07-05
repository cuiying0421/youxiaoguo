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
            @clear="getList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getList"
            ></el-button>
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
      width="width"
    >
      <div>
        <ComForm
          :form="operateForm"
          :formLabel="operateFormLabel"
          :inline="true"
        ></ComForm>
      </div>
      <div slot="footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getJokesfacAPI, addJokesfacAPI, editJokesfacAPI, delJokesfacAPI } from '@/api'
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
      // 分页
      config: {
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条
        pagesize: 3,
        total: 30
      },
      // 搜索
      queryInfo: {
        query: ''
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
          model: 'date',
          label: '日期',
          type: 'date'
        },
        {
          model: 'name',
          label: '演员',
          type: 'input'
        },
        {
          model: 'contribute',
          label: '投稿',
          type: 'input'
        }
      ]
    }
  },
  methods: {
    async getList () {
      const params = {
        query: this.queryInfo.query,
        pagenum: this.config.pagenum,
        pagesize: this.config.pagesize
      }
      const res = await getJokesfacAPI(params)
      console.log(res, '段子工厂数据')
      this.tableData = res.data.data
      this.config.total = res.data.total
    },
    // 确定按钮
    async confirm () {
      if (this.operateType === 'edit') {
        await editJokesfacAPI(this.operateForm)
        this.isShow = false
        this.getList()
        console.log(this.operateForm, '编辑开放麦')
      } else if (this.operateType === 'add') {
        this.isShow = false
        console.log(this.operateForm, 'this.operateForm')
        const res = await addJokesfacAPI(this.operateForm)
        console.log(res, 'ressss')
        this.getList()
      }
    },
    // 增加
    addFactory () {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        date: '',
        name: '',
        contribute: ''
      }
    },
    // 编辑
    editFactory (row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
      console.log(row.id, '编辑的id')
    },
    // 删除
    async delFactory (row) {
      await delJokesfacAPI(row.id)
      console.log(row.id, '删除的id')
      this.getList()
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>
</style>

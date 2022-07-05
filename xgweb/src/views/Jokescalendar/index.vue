<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>段造营</el-breadcrumb-item>
      <el-breadcrumb-item>段子日历</el-breadcrumb-item>
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
            <el-button slot="append" icon="el-icon-search" @click="getList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addJokescalendar">添加</el-button>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <ComTable
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @edit="editJokescalendar"
        @del="delJokescalendar"
        @changePage="getList()"
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
import { getJokescalAPI, addJokescalAPI, editJokescalAPI, delJokescalAPI } from '@/api'
import ComTable from '@/components/ComTable/index.vue'
import ComForm from '@/components/ComForm/index.vue'

export default {
  name: 'Jokescalendar',
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
          contribute: '稿件1',
          bgking: '何广智'
        }
      ],
      tableLabel: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '评审员',
          prop: 'name'
        },
        {
          label: '投稿',
          prop: 'contribute'
        },
        {
          label: '爆梗王',
          prop: 'bgking'
        }
      ],
      // 增加和修改表单项
      operateForm: {
        date: '',
        name: '',
        contribute: '',
        bgking: ''
      },
      operateFormLabel: [
        {
          model: 'date',
          label: '日期',
          type: 'date'
        },
        {
          model: 'name',
          label: '评审员',
          type: 'input'
        },
        {
          model: 'contribute',
          label: '投稿',
          type: 'input'
        },
        {
          model: 'bgking',
          label: '爆梗王',
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
      const res = await getJokescalAPI(params)
      console.log(res, '段子日历数据')
      this.tableData = res.data.data
      this.config.total = res.data.total
    },
    // 确定按钮
    async confirm () {
      if (this.operateType === 'edit') {
        const res = await editJokescalAPI(this.operateForm)
        this.isShow = false
        this.getList()
        console.log(res, '编辑开放麦')
        console.log(this.operateForm, 'this.operateForm')
      } else if (this.operateType === 'add') {
        this.isShow = false
        console.log(this.operateForm, 'this.operateForm')
        const res = await addJokescalAPI(this.operateForm)
        console.log(res, 'ressss')
        this.getList()
      }
    },
    // 增加
    addJokescalendar () {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        date: '',
        name: '',
        contribute: '',
        bgking: ''
      }
    },
    // 编辑
    editJokescalendar (row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
      console.log(row.id, '编辑的id')
    },
    // 删除
    async delJokescalendar (row) {
      await delJokescalAPI(row.id)
      this.getList()
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

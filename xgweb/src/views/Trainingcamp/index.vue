<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>训练营</el-breadcrumb-item>
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
          <el-button type="primary" @click="addTrainingcamp">添加</el-button>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <ComTable
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @edit="editTrainingcamp"
        @del="delTrainingcamp"
      ></ComTable>
    </el-card>

    <!-- 增加和修改的弹出框 -->
    <el-dialog
      :title="operateType === 'add' ? '新增训练营信息' : '修改训练营信息'"
      :visible.sync="isShow"
      width="width">
      <div>
        <ComForm
      :form="operateForm"
      :formLabel="operateFormLabel"
      :inline="true"
    ></ComForm>
      </div>
      <div slot="footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="isShow = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTraincampAPI } from '@/api'
import ComTable from '@/components/ComTable/index.vue'
import ComForm from '@/components/ComForm/index.vue'
export default {
  name: 'Trainingcamp',
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
          ranking: 1,
          contribute: '稿件1'
        }
      ],
      tableLabel: [
        {
          label: '届数',
          prop: 'date'
        },
        {
          label: '学员',
          prop: 'name'
        },
        {
          label: '内投排名',
          prop: 'ranking'
        },
        {
          label: '投稿',
          prop: 'contribute'
        }
      ],
      // 增加和修改表单项
      operateForm: {
        date: '',
        name: '',
        ranking: '',
        contribute: ''
      },
      operateFormLabel: [
        {
          label: '届数',
          type: 'input'
        },
        {
          label: '学员',
          type: 'input'
        },
        {
          label: '内投排名',
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
      const res = await getTraincampAPI()
      console.log(res, '训练营数据')
      this.tableData = res.data.data
    },
    // 增加
    addTrainingcamp () {
      this.isShow = true
    },
    // 编辑
    editTrainingcamp (row) {
      this.operateType = ''
      this.isShow = true
      console.log(row.id, '编辑的id')
    },
    // 删除
    delTrainingcamp (row) {
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

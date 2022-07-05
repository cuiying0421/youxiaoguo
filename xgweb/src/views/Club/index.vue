<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>段造营</el-breadcrumb-item>
      <el-breadcrumb-item>开放麦</el-breadcrumb-item>
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
          <el-button type="primary" @click="addClub">添加</el-button>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <ComTable
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @edit="editClub"
        @del="delClub"
      ></ComTable>
    </el-card>

    <!-- 增加和修改的弹出框 -->
    <el-dialog
      :title="operateType === 'add' ? '新增开放麦信息' : '修改开放麦信息'"
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
import { getClubAPI, addClubAPI, editClubAPI, delClubAPI } from '@/api'
import ComTable from '@/components/ComTable/index.vue'
import ComForm from '@/components/ComForm/index.vue'
export default {
  name: 'Club',
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
          id: 3,
          date: '2016-05-01',
          name: '何广智',
          viewersvote: '8',
          club: '山羊',
          video: '暂无',
          remark: '暂无'
        }
      ],
      // 表头
      tableLabel: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '嘉宾'
        },
        {
          prop: 'viewersvote',
          label: '观众投票'
        },
        {
          prop: 'club',
          label: '俱乐部'
        },
        {
          prop: 'video',
          label: '视频'
        },
        {
          prop: 'remark',
          label: '备注'
        }
      ],
      // 增加和修改表单项
      operateForm: {
        date: '',
        name: '',
        viewersvote: '',
        club: '',
        video: '',
        remark: ''
      },
      operateFormLabel: [
        {
          model: 'date',
          label: '日期',
          type: 'date'
        },
        {
          model: 'name',
          label: '嘉宾',
          type: 'input'
        },
        {
          model: 'viewersvote',
          label: '观众投票',
          type: 'input'
        },
        {
          model: 'club',
          label: '俱乐部',
          type: 'select',
          opts: [
            {
              label: '山羊',
              value: '山羊'
            }
          ]
        },
        {
          model: 'video',
          label: '视频',
          type: 'input'
        },
        {
          model: 'remark',
          label: '备注',
          type: 'input'
        }
      ]

    }
  },
  methods: {
    async getList () {
      // console.log(typeof this.queryInfo.query, '1111111111')
      const params = {
        query: this.queryInfo.query,
        pagenum: this.config.pagenum,
        pagesize: this.config.pagesize
      }
      const res = await getClubAPI(params)
      console.log(res, '开放麦数据列表')
      this.tableData = res.data.data
      this.config.total = res.data.total
    },
    // 确定按钮
    async confirm () {
      if (this.operateType === 'edit') {
        const res = await editClubAPI(this.operateForm)
        this.isShow = false
        this.getList()
        console.log(res, '编辑开放麦')
      } else if (this.operateType === 'add') {
        this.isShow = false
        console.log(this.operateForm, 'this.operateForm')
        const res = await addClubAPI(this.operateForm)
        console.log(res, 'ressss')
        this.getList()
      }
    },
    // 新增开放麦
    addClub () {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        date: '',
        name: '',
        viewersvote: '',
        club: '',
        video: '',
        remark: ''
      }
    },

    // 编辑
    async editClub (row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
      // console.log(row.id, '编辑的id')
    },
    // 删除
    async delClub (row) {
      const res = await delClubAPI(row.id)
      console.log(res, '删除了')
      console.log(row.id, '删除的id')
      this.getList()
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>

</style>

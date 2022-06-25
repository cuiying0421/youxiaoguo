<template>
  <div class="common-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 126"
      >
        <template slot-scope="{ row }">
          <span>{{ row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <el-button size="mini" type="primary" @click="handleEdit(row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :page-size="10"
      @current-change="changePage"
      :current-page.sync="config.page"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'ComTable',
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object
  },
  data () {
    return {}
  },
  methods: {
    handleEdit (row) {
      this.$emit('edit', row)
    },
    handleDelete (row) {
      this.$emit('del', row)
    },
    changePage (page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;

  .pager {
    /* position: absolute;
    bottom: 0;
    right: 20px; */
    // height: 90%;
  }
}
</style>

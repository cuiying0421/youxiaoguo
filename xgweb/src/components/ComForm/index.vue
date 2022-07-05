<template>
  <div>
    <el-form ref="form" :model="form" :inline="inline" label-width="80px">
      <el-form-item
        v-for="item in formLabel"
        :key="item.label"
        :label="item.label"
      >
        <el-input
          v-if="item.type === 'input'"
          :placeholder="'请输入' + item.label"
          v-model="form[item.model]"
        ></el-input>
        <el-switch
          v-if="item.type === 'switch'"
          v-model="form[item.model]"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
        <el-date-picker
          v-if="item.type === 'date'"
          v-model="form[item.model]"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        ></el-date-picker>
        <el-select
          v-if="item.type === 'select'"
          v-model="form[item.model]"
          placeholder="请选择"
        >
          <el-option
            v-for="item in item.opts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-upload
          v-if="item.type === 'upload'"
          class="upload-demo"
          action="http://127.0.0.1:8898/my/jockes/addclub"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <slot></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ComForm',
  props: {
    form: Object,
    formLabel: Array,
    inline: Boolean
  },
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="less" scoped>
.el-input{
    width: 200px;
}
</style>

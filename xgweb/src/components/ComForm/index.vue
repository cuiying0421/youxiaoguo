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

    }
  }
}
</script>

<style lang="less" scoped>
.el-input{
    width: 200px;
}
</style>

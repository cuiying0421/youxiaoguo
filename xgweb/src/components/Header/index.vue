<template>
  <div class="header-container">
    <h2>有笑果后台管理系统</h2>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h2 {
  font-weight: normal;
}
</style>

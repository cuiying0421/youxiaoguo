<template>
  <el-container style="height: 100%">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-main>
        <!-- <Tags /> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
// import Tags from '@/components/Tags'
export default {
  name: 'Home',
  components: {
    Header,
    Aside
    // Tags
  }
}
</script>

<style lang="less" scoped>
.el-container {
  position: relative;
}
.el-aside {
  background-color: #333744;
  color: #fff;
  height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 2;
}
.el-header {
  background-color: #373D41;
  color: #fff;
  width: 100%;
  position: fixed;
  z-index: 2;
}
.el-main {
  // padding-top: 0;
  width: calc(100% - 200px);
  // height: 100vh;
  // background-color: green;
  padding: 20px;
  position: absolute;
  top: 60px;
  left: 200px;
}
</style>

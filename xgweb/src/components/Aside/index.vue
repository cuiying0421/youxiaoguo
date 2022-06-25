<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="activePath ? activePath : '/club'"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409EFF"
        :unique-opened.sync="open"
        :collapse="isCollapse"
        router
      >
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 一级菜单组 -->
        <el-submenu
          :index="item.id + ''"
          v-for="item in menuList"
          :key="item.id"
          v-show="item.children.length !== 0"
        >
          <template slot="title">
            <i :class="iconsObj[item.id]"></i>
            <span>{{ item.authName }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item-group>
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <i class="el-icon-menu"></i>
              <span>{{ subItem.authName }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 只有一级菜单 -->
        <el-menu-item
          :index="'/' + item.path"
          v-for="item in menuListOnly"
          :key="item.id"
          v-show="item.children.length == 0"
          @click="saveNavState('/' + item.path)"
        >
          <i :class="iconsObj[item.id]"></i>
          <span slot="title">{{ item.authName }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { menuListAPI } from '@/api'
export default {
  name: 'Aside',
  data () {
    return {
      open: true,
      menuList: [],
      menuListOnly: [],
      isCollapse: false,
      iconsObj: {
        101: 'iconfont icon-tijikongjian',
        106: 'iconfont icon-danju',
        105: 'iconfont icon-baobiao'
      },
      // 被激活的链接地址
      activePath: ''
    }
  },
  computed: {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },

    clickMenu (activePath) {
      this.activePath = activePath
    },

    // 获取菜单列表
    async getMenuList () {
      const res = await menuListAPI()
      console.log('Aside页面的菜单列表数据2', res)
      this.menuList = res.data.data

      const onlyNewArr = this.menuList.filter(obj => obj.children.length === 0)
      this.menuListOnly = onlyNewArr

      const theNewArr = this.menuList.filter(obj => obj.children.length !== 0)
      this.menuList = theNewArr
    },

    // 展开收起菜单
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },

    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }

  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
}
.tac {
  // width: 200px;
  // box-sizing: border-box;

  .toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
}

.el-menu {
  border: none;
}

.iconfont {
  margin-right: 10px;
}
</style>

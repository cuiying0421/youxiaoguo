<template>
  <div class="container">
    <!--  -->
    <el-row class="home" :gutter="20">
      <!-- 左侧 -->
      <el-col :span="8">
        <el-card shadow="hover" style="height: 300px">
          <div class="user">
            <img :src="userImg" />
            <div class="userInfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2021-2-28</span></p>
            <p>上次登录地点：<span>北京</span></p>
          </div>
        </el-card>
        <el-card class="showcal">
          <div slot="header">演出日历</div>
          <div v-for="o in 4" :key="o" class="caltext item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="16">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
            class="numcard"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="num">￥{{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <!-- 图表 -->
        <el-card style="height: 280px">

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      userImg: require('@/assets/images/user.png'),
      countData: [
        {
          name: '今日支付订单',
          value: parseInt(Math.random() * 100),
          icon: 'success',
          color: '#F87D76'
        },
        {
          name: '今日收藏订单',
          value: parseInt(Math.random() * 1000),
          icon: 'star-on',
          color: '#AE8AF6'
        },
        {
          name: '今日未支付订单',
          value: parseInt(Math.random() * 1000),
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: parseInt(Math.random() * 1000),
          icon: 'success',
          color: '#ffb980'
        }
      ]

    }
  }

}
</script>

<style lang="less" scoped>
/* .el-main /deep/ .el-col-8{
  margin: 0;
  padding: 0;
  font-size: 30px;
} */
// home
.container {
  // background-color: pink;
  overflow: hidden;
  // position: relative;

  .showcal {
    height: calc(100vh - 430px);
    margin-top: 20px;
    // overflow: scroll;
  }
}

.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    &info {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access {
        color: #999999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #666666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // padding: 0;
    .numcard {
      width: 48.7%;
      height: 139px;
      margin-bottom: 20px;
      /* display: flex;
      justify-content: space-between; */
      // align-items: center;
      // padding-right: 0;
    }
    .icon {
      font-size: 30px;
      width: 80px;
      height: 139px;
      text-align: center;
      line-height: 139px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}

//
.caltext {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>

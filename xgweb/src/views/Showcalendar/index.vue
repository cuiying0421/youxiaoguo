<template>
  <div class="container">
      <!-- 头部的盒子 -->
      <header>
        <router-link to="/home" class="gohome">首页</router-link>
        <h1>笑果演出数据看板</h1>
        <div class="showTime">{{time()}}</div>
      </header>
      <!-- 页面主体部分 -->
      <section class="mainbox">
        <div class="column">
          <div class="panel bar">
            <h2>
              观众喜爱演员top5
              <a href="javaScript:;">2021</a>
              <a href="javaScript:;">2022</a>
            </h2>
            <div class="chart">图表</div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line">
            <h2>巡演场次同比增长对比</h2>
            <div class="chart">图表</div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie">
            <h2>观众年龄分布</h2>
            <div class="chart">图表</div>
            <div class="panel-footer"></div>
          </div>
        </div>
        <div class="column">
          <!-- no模块制作 -->
          <div class="no">
            <div class="no-hd">
              <ul>
                <li>18</li>
                <li>129</li>
              </ul>
            </div>
            <div class="no-bd">
              <ul>
                <li>巡演城市</li>
                <li>开放麦club</li>
              </ul>
            </div>
          </div>
          <!-- map -->
          <div class="map">
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
          </div>
        </div>
        <div class="column">
          <div class="panel bar2">
            <h2>主打秀城市飙升榜</h2>
            <div class="chart">图表</div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line2">
            <h2>开放麦观众对比</h2>
            <div class="chart">图表</div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie2">
            <h2>观众地区分布</h2>
            <div class="chart">图表</div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import { time } from './time.js'
import { chartLeftOne, chartRightOne, chartLeftTwo, chartRightTwo, chartLeftThree, chartRightThree } from './chart.js'
export default {
  name: 'Showcalendar',
  data () {
    return {

    }
  },
  methods: {
    time,
    chartLeftOne,
    chartRightOne,
    chartLeftTwo,
    chartRightTwo,
    chartLeftThree,
    chartRightThree
  },
  mounted () {
    this.chartLeftOne()
    this.chartRightOne()
    this.chartLeftTwo()
    this.chartRightTwo()
    this.chartRightTwo()
    this.chartLeftThree()
    this.chartRightThree()
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: electronicFont;
  src: url('~@/assets/font/DS-DIGIT.TTF');
}
.container{
  margin: 0;
  padding: 0;
  // height: 100%;
  // height: 100%;
  // background: url('~@/assets/bg.jpg') top center no-repeat;
  background: url('~@/assets/images/bg.jpg') no-repeat #000;
  background-size: cover;
  /* 行高是字体1.15倍 */
  line-height: 1.15;
  // overflow: scroll;
}

header {
  position: relative;
  height: 1.25rem;
  // background-color: pink;
  background: url('~@/assets/images/head_bg.png') no-repeat top center;
  background-size: 100% 100%;
  h1 {
    font-size: 0.475rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
  .gohome{
    position: absolute;
    top: 0;
    left: 0.375rem;
    line-height: 0.9375rem;
    font-size: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
  }
  .showTime {
    position: absolute;
    top: 0;
    right: 0.375rem;
    line-height: 0.9375rem;
    font-size: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
  }
}

.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  // background-color: pink;
  .column {
    flex: 3;
    &:nth-child(2) {
      flex: 5;
      margin: 0 0.125rem 0.1875rem;
      overflow: hidden;
    }
  }
}

.panel {
  position: relative;
  height: 3.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url('~@/assets/images/line\(1\).png');
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }
  .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }

  h2 {
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    color: #fff;
    font-size: 0.25rem;
    font-weight: 400;
    a {
      margin: 0 0.1875rem;
      color: #fff;
      text-decoration: underline;
    }
  }
  .chart {
    height: 3rem;
    // background-color: pink;
  }
}

.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      top: 0;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      right: 0;
      bottom: 0;
    }
    ul {
      display: flex;
      li {
        position: relative;
        flex: 1;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.875rem;
        color: #ffeb7b;
        padding: 0.05rem 0;
        font-family: electronicFont;
        font-weight: bold;
        &:first-child::after {
          content: "";
          position: absolute;
          height: 50%;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
          right: 0;
          top: 25%;
        }
      }
    }
  }
  .no-bd ul {
    display: flex;
    li {
      flex: 1;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.225rem;
      color: rgba(255, 255, 255, 0.7);
      padding-top: 0.125rem;
    }
  }
}

.map {
  position: relative;
  height: 10.125rem;
  .chart {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    height: 10.125rem;
    width: 100%;
  }
  .map1,
  .map2,
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.475rem;
    height: 6.475rem;
    background: url('~@/assets/images/map.png') no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2 {
    width: 8.0375rem;
    height: 8.0375rem;
    background-image: url('~@/assets/images/lbx.png');
    opacity: 0.6;
    animation: rotate 15s linear infinite;
    z-index: 2;
  }
  .map3 {
    width: 7.075rem;
    height: 7.075rem;
    background-image: url('~@/assets/images/jt.png');
    animation: rotate1 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}
</style>

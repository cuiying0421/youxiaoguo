import * as echarts from 'echarts'

export const chartLeftOne = () => {
  var chartDom = document.querySelector('.bar .chart')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,0,0,.5)',
      borderColor: 'rgba(0,0,0,.0)',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '0%',
      right: '0px',
      bottom: '4%',
      top: '10px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['庞博', '何广智', '呼兰', '王建国', '杨笠'],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '14'
          }
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '14'
        },
        // 显示x坐标轴的样式
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 1,
            type: 'solid'
          }
        },
        // y轴分割线
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '观众投票',
        type: 'bar',
        barWidth: '35%',
        data: [200, 334, 390, 330, 220],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  }

  option && myChart.setOption(option)

  //   图表跟随屏幕自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })

  //  点击切换效果
}

export const chartLeftTwo = () => {
  var chartDom = document.querySelector('.line .chart')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      backgroundColor: 'rgba(0,0,0,.5)',
      borderColor: 'rgba(0,0,0,.0)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      textStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '14'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '14'
        }
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: 'rgba(255,255,255,.7)'
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '2021',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 90, 230],
        // 是否让线条圆滑显示
        smooth: true
      },
      {
        name: '2022',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 120, 132, 101, 134, 132, 101, 134, 90, 230],
        // 是否让线条圆滑显示
        smooth: true
      }
    ]
  }

  option && myChart.setOption(option)

  //   图表跟随屏幕自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

export const chartLeftThree = () => {
  var chartDom = document.querySelector('.pie .chart')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    color: ['#1089E7', '#F57474', '#8B78F6', '#F8B448'],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,0,0,.5)',
      borderColor: 'rgba(0,0,0,.0)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      top: '90%',
      left: 'center',
      textStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '14'
      },
      itemWidth: 10,
      itemHeight: 10
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '20岁-29岁' },
          { value: 735, name: '30岁-39岁' },
          { value: 580, name: '40岁-49岁' },
          { value: 484, name: '50岁以上' }
        ]
      }
    ]
  }

  option && myChart.setOption(option)

  //   图表跟随屏幕自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

export const chartRightOne = () => {
  var chartDom = document.querySelector('.bar2 .chart')
  var myChart = echarts.init(chartDom)
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  var option

  option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%'
    //   containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['北京', '上海', '广州', '深圳', '重庆'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      {
        inverse: true,
        data: [702, 350, 610, 793, 664],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          normal: {
            color: function (params) {
            //   console.log(params)
              return myColor[params.dataIndex]
            },
            barBorderRadius: 20
          }
        },
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          //   {c}会自动解析为数据 data里面的数据
          formatter: '{c}%'
        }
      },
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  }

  option && myChart.setOption(option)

  //   图表跟随屏幕自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

export const chartRightTwo = () => {
  var chartDom = document.querySelector('.line2 .chart')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      backgroundColor: 'rgba(0,0,0,.5)',
      borderColor: 'rgba(0,0,0,.0)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      textStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '14'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '14'
          }
        },
        // 去除x坐标轴的颜色
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: 'rgba(255,255,255,.7)'
        },
        // 修改y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: '#012f4a'
          }
        }
      }
    ],
    series: [
      {
        name: '2021',
        type: 'line',
        stack: 'Total',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)' // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)' // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        // 设置拐点 小圆点
        symbol: 'circle',
        // 拐点大小
        symbolSize: 12,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 90, 230],
        // 是否让线条圆滑显示
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: '#0184d5',
          width: 2
        }
      },
      {
        name: '2022',
        type: 'line',
        stack: 'Total',
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 216, 135, 0.4)'
                },
                {
                  offset: 0.8,
                  color: 'rgba(0, 216, 135, 0.1)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 120, 132, 101, 134, 132, 101, 134, 90, 230],
        // 是否让线条圆滑显示
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: '#00d887',
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          }
        }
      }
    ]
  }

  option && myChart.setOption(option)

  //   图表跟随屏幕自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

export const chartRightThree = () => {
  var chartDom = document.querySelector('.pie2 .chart')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    color: [
      '#006cff',
      '#60cda0',
      '#ed8884',
      '#ff9f7f',
      '#0096ff',
      '#9fe6b8',
      '#32c5e9',
      '#1d9dff'
    ],
    legend: {
      top: '90%',
      left: 'center',
      textStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '14'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,0,0,.5)',
      borderColor: 'rgba(0,0,0,.0)',
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
        //   borderRadius: 8
        },
        data: [
          { value: 40, name: '武汉' },
          { value: 38, name: '上海' },
          { value: 32, name: '北京' },
          { value: 30, name: '厦门' },
          { value: 28, name: '西安' },
          { value: 26, name: '深圳' },
          { value: 22, name: '青岛' },
          { value: 18, name: '杭州' }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10,
          color: 'auto'
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  }

  option && myChart.setOption(option)

  //   图表跟随屏幕自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

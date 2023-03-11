/*
 * @Description: 测试在 stencil 中使用 echarts
 * @Author: Lyrelion
 * @Date: 2023-03-10 12:35:36
 * @LastEditTime: 2023-03-11 17:15:33
 * @FilePath: \stencil-first\src\components\chart-bar\chart-bar.tsx
 */
import { Component, h, Prop, Element, Watch, Event, EventEmitter, Listen } from '@stencil/core';
import * as echarts from 'echarts';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
};

@Component({
  tag: 'chart-bar',
  styleUrl: 'chart-bar.css',
  shadow: true,
})

export class ChartBar {
  // 图表宽度
  @Prop() width: string | number;
  // 图表高度
  @Prop() height: string | number;
  // 图表数据
  @Prop() echartsData: number[];

  // 图表点击事件
  @Event() barClick: EventEmitter<any>;
  
  @Element() element: HTMLElement;

  // 默认配置项
  defaultOptions: any;
  // echarts 实例
  myChart: any;
  // 挂载 echarts 的 DOM 实例
  echartsDomRef: HTMLElement;

  /**
   * 监听 prop 传入的数据
   * @param newValue 
   * @param oldValue 
   */
  @Watch('echartsData')
  echartsDataChange(newValue, oldValue) {
    console.log('watch echartsData ---', { newValue, oldValue })
    this.defaultOptions.series[0].data = newValue
    // 清空图表数据，并重新渲染图表
    this.resetRenderChart()
  }

  /**
   * 在组件内部，监听外部是否触发了组件内部的自定义方法
   * @param customEventData 
   */
  @Listen('barClick')
  handleListenBarClick(customEventData: any) {
    console.log('customEventData ---', customEventData)
  }
  
  /**
   * 组件渲染之前
   */
  componentWillRender() {
    // 添加图表默认配置项
    this.defaultOptions = option;
    // 动态填充图表数据
    this.defaultOptions.series[0].data = this.echartsData || [];
  }

  /**
   * 组件加载之后
   */
  componentDidLoad() {
    this.myChart = echarts.init(this.echartsDomRef);
    this.myChart.setOption(this.defaultOptions);

    console.log('echarts DOM container ----', this.echartsDomRef);

    this.myChart.on('click', (params: unknown) => {
      // 点击图表，发出数据
      this.barClick.emit(params);
    });
  }

  /**
   * 监听窗口变化
   */
  windowResize() {
    console.log('窗口发生了变化 windowResize');
    this.myChart?.resize();
  }

  /**
   * 清空图表数据，并重新渲染图表
   */
  resetRenderChart() {
    // this.myChart.dispose()
    this.myChart.clear();
    this.myChart.setOption(this.defaultOptions);
  }

  render() {
    return <div ref={elementRef => (this.echartsDomRef = elementRef)} style={{ width: `${this.width}px`, height: `${this.height}px` }}></div>;
  }
}

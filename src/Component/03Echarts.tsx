import * as React from 'react';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;

/*
  如何在 react 中使用 echarts
  参考：
  - 官网介绍：http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts
  - https://stackoverflow.com/questions/45658200/how-do-i-use-include-third-party-libraries-in-react
  - http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts
 */
export class Echarts extends React.Component {

  echartsInstance: ECharts;

  constructor(props: any) {
    super(props);
  }

  componentDidMount(){
    // NOTE 这里需要进行转换
    this.echartsInstance = echarts.init(document.getElementById('echarts') as HTMLDivElement);
    this.echartsInstance.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  /*
     NOTE 第三方 DOM 操作需要释放
   */
  componentWillUnmount(){
    this.echartsInstance.dispose();
  }

  public render() {
    // NOTE 必须设置高度，否则看不见渲染内容
    return <div id="echarts" style={{width: 500, height: 500}}/>;
  }
}

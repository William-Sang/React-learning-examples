import * as React from 'react';
import { Link } from 'react-router-dom';

export default class ExampleListPage extends React.Component {
  render(){
    return <ul>
      <li><Link to="/01">父子组件声明周期函数传递</Link></li>
      <li><Link to="/02">装饰器的使用</Link></li>
      <li><Link to="/03">使用第三方dom - 整合 Echarts </Link></li>
      <li><Link to="/04">使用第三方dom - 整合 Monaco Editor </Link></li>
    </ul>;
  }
}

import * as React from 'react';
import { Link } from 'react-router-dom';

export default class ExampleListPage extends React.Component {
  render(){
    return <ul>
      <li><Link to="/01">父子组件声明周期函数传递</Link></li>
    </ul>;
  }
}

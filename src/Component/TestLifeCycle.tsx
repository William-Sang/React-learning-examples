import * as React from 'react';

interface IState {
  data?: string;
}

interface IProps {
  data?: string;
}

export class ParentComponent extends React.Component<IProps, IState> {

  public text = new PrintHello('父组件 类元素初始化');

  constructor(props: IProps) {
    super(props);
    this.state = {
      data: ''
    };
    console.log('父组件 constructor');
  }

  componentWillMount() {
    console.log('父组件 componentWillMount');
  }

  componentDidMount() {
    console.log('父组件 componentDidMount');
  }

  componentWillReceiveProps(nextProps: IProps) {
    console.log('父组件 componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    console.log('父组件 shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps: IProps, nextState: IState) {
    console.log('父组件 componentWillUpdate');
  }

  componentDidUpdate(nextProps: IProps, nextState: IState) {
    console.log('父组件 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('父组件 componentWillUnmount');
  }

  onClick = () => {
    this.setState({
      data: 'hello'
    });
  };

  render() {
    console.log('父组件  调用 render');
    return (
      <div>
        本组件主要用途为查看，父子组件的 声明周期 函数的执行顺序，对加载过程更深入的了解。
        <ChildrenComponent data={this.state.data}/>
        <button onClick={this.onClick}>更改子组件数据</button>
      </div>
    );
  }
}

class ChildrenComponent extends React.Component<IProps, IState> {

  public text = new PrintHello('子组件 类元素初始化');

  constructor(props: IProps) {
    super(props);
    console.log('子组件 constructor');
  }

  componentWillMount() {
    console.log('子组件 componentWillMount');
  }

  componentDidMount() {
    console.log('子组件 componentDidMount');
  }

  componentWillReceiveProps(nextProps: IProps, nextState: IState) {
    console.log('子组件 componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    console.log('子组件 shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps: IProps, nextState: IState) {
    console.log('子组件 componentWillUpdate');
  }

  componentDidUpdate(nextProps: IProps, nextState: IState) {
    console.log('子组件 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('子组件 componentWillUnmount');
  }

  render() {
    console.log('子组件  调用 render');
    return (
      <div>
        子组件显示内容: {this.props.data}
      </div>
    );
  }
}


class PrintHello {
  constructor(text: string){
    console.log(text);
  }
}

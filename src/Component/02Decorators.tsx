import * as React from 'react';
/*
  装饰器：
    1. 类装饰
    2. 类的方法装饰

  用法：
    1. 日志
    2. 在某个类方法前执行一段逻辑，在某个类方法名之后再执行一段逻辑


  需要具备知识点：
  1. JavaScript 原型 https://www.cnblogs.com/wilber2013/p/4924309.html
  2. JavaScript this 理解：https://www.cnblogs.com/pssp/p/5216085.html
 */

interface IState {
  text: string;
}

function logDecorator(target: any, name: string, descriptor: any) {
  // NOTE 理解这里拿出来的 function 是没有 this 指向的
  const oldValue = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log('开始');
    // NOTE 理解 apply, call 方法，如果不适用 apply 相当于，调用了一个外部函数
    oldValue.apply(this, args);
    // oldValue(args);  NOTE 这种使用方法，会导致 this 没有指向

    // 装饰器里的 this 到底是啥？(主要是理解装饰器是编译阶段加进去的，所以 this 还是在使用的地方的引用)
    this.setState({
      text: 'hello'
    });
    console.log('结束');
  };

  return descriptor;
}

export default class TestDecorators extends React.Component<any, IState> {


  constructor(props: any){
    super(props);
    this.state = {
      text: ''
    };
    this.decoratorClick = this.decoratorClick.bind(this);
  }


  click = () => {
    this.setState({
      text: '被点击'
    })
  };

  @logDecorator
  decoratorClick(){
    this.setState({
      text: '装饰器函数被触发'
    });
    console.log('内部执行');
  };


  render(){
    return <div>
      <textarea name="name" value={this.state.text} readOnly={true}/>
      <button onClick={this.click}>正常执行点击</button>
      <button onClick={this.decoratorClick}>点击前后使用装饰器执行方法</button>
    </div>;
  }
};

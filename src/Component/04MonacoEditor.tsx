import { editor } from 'monaco-editor';
import * as React from 'react';
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

/*
  整合 Monaco Editor

 */
export default class MonacoEditor extends React.Component{

  editorInstance: IStandaloneCodeEditor;
  componentDidMount(){
    this.editorInstance = editor.create(document.getElementById("monaco") as HTMLElement, {
      value: `
      function hello() {
        alert('Hello world!');
      }
      等两秒，就会显示行数
      `,
      language: "javascript",

      lineNumbers: "off",
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: "vs-dark",
    });
    // NOTE 注意这里 this 的指向问题，如果直接写 function，this 的指向就不对了
    // https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback
    setTimeout(() => {
      this.editorInstance.updateOptions({
        lineNumbers: "on"
      });
    }, 2000);
  }

  // NOTE 使用结束需要销毁实例，防止内存泄露
 componentWillUnmount(){
    this.editorInstance.dispose();
  }

  public render(){
    return <div id="monaco" style={{width: 500, height: 500}}/>
  }
}

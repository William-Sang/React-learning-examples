import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { ParentComponent } from './Component/01TestLifeCycle';
import TestDecorators from './Component/02Decorators';
import ExampleListPage from './Component/ExampleList';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={ExampleListPage}/>
        <Route exact={true} path="/01" component={ParentComponent}/>
        <Route exact={true} path="/02" component={TestDecorators}/>
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { ParentComponent } from './Component/TestLifeCycle';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/01" component={ParentComponent}/>
      </div>
    );
  }
}

export default App;

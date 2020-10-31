import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from "history";
import game from './game'

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={()=>game} />
          {/* <Route path="/bye" component={buzz} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App;

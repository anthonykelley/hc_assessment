import React, { Component } from 'react';
import NoMatch from './NoMatch';
import Home from './Home';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
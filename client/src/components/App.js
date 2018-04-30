import React, { Component } from 'react';
import NoMatch from './NoMatch';
import Home from './Home';
import NavBar from './NavBar';
import PersonForm from './PersonForm';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/person_form' component={PersonForm} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
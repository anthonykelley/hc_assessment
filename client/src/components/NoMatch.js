import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>
        Wrong Way!
      </Header>
      <Header as='h1' textAlign='center'>
        <Link to='/'>Home</Link>
      </Header>
      </div>
    );
  }
}

export default NoMatch;
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div style={styles}>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item style={text} name='People Search' />
          </Link>
          <Link to='/person_form'>
            <Menu.Item style={text} name='Add New Person' />
          </Link>
        </Menu>
      </div>
    );
  }
}

const styles = {
  paddingTop: '10px',
  backgroundColor: '#464646',
}

const text = {
  color: 'white',
  paddingBottom: '15px',
  float: 'left',
}

export default withRouter(NavBar);

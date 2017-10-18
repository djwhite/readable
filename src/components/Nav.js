import React, { Component } from 'react';
import {
  Toolbar,
  NavLink
} from 'rebass';

class Nav extends Component {
  render() {
    return (
      <Toolbar>
        <NavLink>
          Readable
        </NavLink>
      </Toolbar>
    );
  }
}

export default Nav;

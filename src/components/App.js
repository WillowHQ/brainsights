import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('y99ir82bmXwslwCrdTyfKtfzdobOwkgb', 'brainsights1.auth0.com');
  }

  render() {
    return (
      <div>
        <Header lock={this.lock}></Header>

              {this.props.children}

      </div>
    );
  }
}

export default AppComponent;

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React, { Component } from 'react';
import Header from './Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.lock = new Auth0Lock('y99ir82bmXwslwCrdTyfKtfzdobOwkgb', 'brainsights1.auth0.com');
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};

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
AppComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default AppComponent;

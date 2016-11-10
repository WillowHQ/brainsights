import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React, { Component } from 'react';
//import Header from './Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import MainAppBar from 'material-ui/AppBar';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentWillMount() {
    this.lock = new Auth0Lock('y99ir82bmXwslwCrdTyfKtfzdobOwkgb', 'brainsights1.auth0.com');
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)
    };

  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleTouchTapLeftIconButton = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>

        <Header />
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          />

        <Drawer
          open={this.state.open}
          docked={false}
          >
          <List>
            <ListItem  leftIcon={<ActionHome />} onTouchTap={this.handleClose}>
              <Link to={`/home/dashboard`}>
              <b>Home</b>
              </Link>
            </ListItem>


          </List>



        </Drawer>

              {this.props.children}


      </div>
    );
  }
}
AppComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default AppComponent;

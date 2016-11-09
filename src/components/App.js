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
import AdminIcon from 'material-ui/svg-icons/content/inbox';
import DataIcon from 'material-ui/svg-icons/action/grade';
import ContentIcon from 'material-ui/svg-icons/content/send';
import AnalysisIcon from 'material-ui/svg-icons/content/drafts';







// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentWillMount() {
    this.lock = new Auth0Lock('y99ir82bmXwslwCrdTyfKtfzdobOwkgb', 'brainsights1.auth0.com');
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};

  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleTouchTapLeftIconButton = () => this.setState({open: !this.state.open});




  render() {
    return (
      <div>


        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          />

        <Drawer
          open={this.state.open}
          docked={false}
          >
          <List>
            <ListItem  leftIcon={<AdminIcon />} onTouchTap={this.handleClose}>
              <Link to={`/administration`}>
              <b>Administration</b>
              </Link>
            </ListItem>
            <ListItem leftIcon={<DataIcon />} onTouchTap={this.handleClose}>
              <Link to={`/content`}>
                <b>Content</b>
              </Link>
            </ListItem>
            <ListItem  leftIcon={<ContentIcon />} onTouchTap={this.handleClose}>
              <Link to={`/data`}>
                <b>Data</b>
              </Link>
            </ListItem>
            <ListItem leftIcon={<AnalysisIcon />} onTouchTap={this.handleClose}>
              <Link to={`/analysis`}>
                <b>Analysis</b>
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

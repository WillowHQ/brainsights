import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React, { Component } from 'react';
import Header from './Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import MainAppBar from 'material-ui/AppBar';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';




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
          <MenuItem onTouchTap={this.handleClose}> </MenuItem>
          <MenuItem onTouchTap={this.handleClose}> >Menu Item 2</MenuItem>
          <ListGroup>
          <ListGroupItem onTouchTap={this.handleClose}><Link to={`/administration`}>
            <h4>Administration</h4>
          </Link></ListGroupItem>

          <ListGroupItem onTouchTap={this.handleClose}><Link to={`/content`}>
            <h4>Content</h4>
          </Link></ListGroupItem>

          <ListGroupItem onTouchTap={this.handleClose}><Link to={`/data`}>
            <h4>Data</h4>
          </Link></ListGroupItem>

          <ListGroupItem onTouchTap={this.handleClose}><Link to={`/analysis`}>
            <h4>Analysis</h4>
          </Link></ListGroupItem>


        </ListGroup>
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

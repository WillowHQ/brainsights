import React, {Component, PropTypes} from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import FullWidthSection from './FullWidthSection';

class Master extends Component {
  return (
    <div>
      <AppBar
        onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
        showMenuIconButton={showMenuIconButton}
      />


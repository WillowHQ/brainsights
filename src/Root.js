import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';

import HomeDashboard from './components/home/HomeDashboard';
import HomeAudit from './components/home/HomeAudit';

import App from './components/App';

class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>

          <Route path='/home/dashboard' component={HomeDashboard} />
          <Route path='/home/audit' component={HomeAudit} />


        </Route>
      </Router>
    );
  }
}

export default Root;

import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import ContactDetail from './components/ContactDetail';
import ContactDetail1 from './components/ContactDetail1';
import ContentMain from './components/ContentMain';
import DataMain from './components/DataMain';
import AnalysisMain from './components/AnalysisMain';

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
          <Route path='/contact/:id' component={ContactDetail} />
          <Route path='/administration' component={ContactDetail1} />
          <Route path='/content' component={ContentMain} />
          <Route path='/data' component={DataMain} />
          <Route path='/analysis' component={AnalysisMain} />
        </Route>
      </Router>
    );
  }
}

export default Root;

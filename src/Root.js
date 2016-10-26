import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import ContactDetail from './components/ContactDetail';
import ContactDetail1 from './components/ContactDetail1';
import ContentMain from './components/ContentMain';
import DataMain from './components/DataMain';
import AnalysisMain from './components/AnalysisMain';
import AnalysisQuery from './components/AnalysisQuery';
import AnalysisVisualizations from './components/AnalysisVisualizations';
import DataManage from './components/DataManage';
import DataSubmit from './components/DataSubmit';
import ContentSubmit from './components/ContentSubmit';
import ContentManage from './components/ContentManage';
import AdminAccounts from './components/AdminAccounts';
import AdminAudit from './components/AdminAudit';
import AdminMain from './components/AdminMain';
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
          <Route path='/administration' component={AdminMain} />
          <Route path='/content' component={ContentMain} />

          <Route path='/analysis' component={AnalysisMain} />
          <Route path='/analysis/query' component={AnalysisQuery} />
          <Route path='/analysis/visualizations' component={AnalysisVisualizations} />

          <Route path='/data' component={DataMain} />
          <Route path='/data/manage' component={DataManage} />
          <Route path='/data/submit' component={DataSubmit} />

          <Route path='/admininstration/accounts' component={AdminAccounts}  />
          <Route path='/admininstration/audit' component={AdminAudit} />

          <Route path='/content/submit' component={ContentSubmit} />
          <Route path='/content/manage' component={ContentManage} />

        </Route>
      </Router>
    );
  }
}

export default Root;

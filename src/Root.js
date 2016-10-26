import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';



import DataMain from './components/data/DataMain';
import AnalysisMain from './components/analysis/AnalysisMain';
import AnalysisQuery from './components/analysis/AnalysisQuery';
import AnalysisVisualizations from './components/analysis/AnalysisVisualizations';
import DataManage from './components/data/DataManage';
import DataSubmit from './components/data/DataSubmit';
import ContentMain from './components/content/ContentMain';
import ContentSubmit from './components/content/ContentSubmit';
import ContentManage from './components/content/ContentManage';
import AdminAccounts from './components/admin/AdminAccounts';
import AdminAudit from './components/admin/AdminAudit';
import AdminMain from './components/admin/AdminMain';
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

          <Route path='/analysis' component={AnalysisMain} />
          <Route path='/analysis/query' component={AnalysisQuery} />
          <Route path='/analysis/visualizations' component={AnalysisVisualizations} />

          <Route path='/data' component={DataMain} />
          <Route path='/data/manage' component={DataManage} />
          <Route path='/data/submit' component={DataSubmit} />

          <Route path='/administration' component={AdminMain} />
          <Route path='/admininstration/accounts' component={AdminAccounts}  />
          <Route path='/admininstration/audit' component={AdminAudit} />

          <Route path="/content" component={ContentMain} />
          <Route path='/content/submit' component={ContentSubmit} />
          <Route path='/content/manage' component={ContentManage} />

        </Route>
      </Router>
    );
  }
}

export default Root;

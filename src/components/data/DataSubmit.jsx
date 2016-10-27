import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DataNav from './DataNav';
import AppBar from 'material-ui/AppBar';




class DataSubmitComponent extends Component {


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <DataNav />


            </Col>
            <Col xs={12} md={9}>
              <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
              />

              <p> Data Submit Component</p>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default DataSubmitComponent;

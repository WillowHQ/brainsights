import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ContentNav from './ContentNav';




class ContentManageComponent extends Component {


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <ContentNav />


            </Col>
            <Col xs={12} md={9}>
              <p> Content Manage Component</p>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default ContentManageComponent;

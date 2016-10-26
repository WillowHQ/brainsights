import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import AdminNav from './AdminNav';




class AdminMainComponent extends Component {


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <AdminNav />


            </Col>
            <Col xs={12} md={9}>
              <p> Admin Main Component</p>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default AdminMainComponent;

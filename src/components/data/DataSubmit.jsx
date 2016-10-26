import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DataNav from './DataNav';




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
              <p> Data Submit Component</p>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default DataSubmitComponent;

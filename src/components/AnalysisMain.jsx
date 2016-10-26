import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import AnalysisNav from './AnalysisNav';




class AnalysisMainComponent extends Component {


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <AnalysisNav />


            </Col>
            <Col xs={12} md={9}>
              <p> Analysis Main Component</p>
            </Col>
          </Row>
       </Grid>

      </div>
    );
  }
}

export default AnalysisMainComponent;

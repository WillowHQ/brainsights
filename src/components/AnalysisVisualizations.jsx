import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import AnalysisNav from './AnalysisNav';




class AnalysisVisualizationsComponent extends Component {


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <AnalysisNav />


            </Col>
            <Col xs={12} md={9}>

            </Col>
          </Row>
        </Grid>
        <p> Analysis Visualizations Component</p>
      </div>
    );
  }
}

export default AnalysisVisualizationsComponent;

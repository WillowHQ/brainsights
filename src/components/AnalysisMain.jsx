import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Sidebar1 from './Sidebar1.js';


class AnalysisMainComponent extends Component {


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <ListGroupItem>
                <Link to={>
                  <h4>{contact.name}</h4>
                </Link>
              </ListGroupItem>

            </Col>
            <Col xs={12} md={9}>

            </Col>
          </Row>
       </Grid>
        <p> Analysis Main Component</p>
      </div>
    );
  }
}

export default AnalysisMainComponent;

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ContentNav from './ContentNav';






class ContentMainComponent extends Component {


  render() {

    return (
      <div>

            <Col  md={3} >
              <ContentNav />
            </Col>
            <Col  md={9}>
              <p> Content Main Component</p>
            </Col>

      </div>
    );
  }
}

export default ContentMainComponent;

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HomeNav from './HomeNav';






class HomeDashboardComponent extends Component {


  render() {

    return (
      <div>
        <Col xs={12} md={3}
          style={{padding: '0 px 0 px 0 px',
          paddingLeft: '0px',
            margin: '0 auto'
        }}
        >
          <HomeNav />
        </Col>
        <Col xs={12} md={9}>
          <p>Dashboard</p>
        </Col>

      </div>
    );
  }
}


export default HomeDashboardComponent;

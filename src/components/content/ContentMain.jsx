import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ContentNav from './ContentNav';






class ContentMainComponent extends Component {


  render() {

    return (
      <div>



         <div id="left" style="float: left; width: 150px; background: #DDDDDD; height: 500px;">
        <ContentNav />
    </div>

    <div id="right" style="float: left; background: #EEEEEE;">
        <p> Content Main Component</p>
    </div>
      </div>
    );
  }
}

export default ContentMainComponent;

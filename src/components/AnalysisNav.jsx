import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';


class AnalysisNavComponent extends Component {
  render() {

    return (
      <div>
        <ListGroup>
          <ListGroupItem><Link to={`/analysis`}>
            <h4>Home</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/analysis/query`}>
            <h4>Queries</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/analysis/visualizations`}>
            <h4>Visualizations</h4>
          </Link></ListGroupItem>




        </ListGroup>
      </div>
    );
  }
}

export default AnalysisNavComponent;

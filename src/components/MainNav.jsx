import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

// We'll use this function to get a contact

class MainNavComponent extends Component {


  render() {

    return (
      <div>
        <ListGroup>
          <ListGroupItem><Link to={`/administration`}>
            <h4>Administration</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/content`}>
            <h4>Content</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/data`}>
            <h4>Data</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/analysis`}>
            <h4>Analysis</h4>
          </Link></ListGroupItem>


        </ListGroup>
      </div>
    );
  }
}

export default MainNavComponent;

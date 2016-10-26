import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';


class ContentNavComponent extends Component {
  render() {

    return (
      <div>
        <ListGroup>
          <ListGroupItem><Link to={`/content`}>
            <h4>Home</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/content/submit`}>
            <h4>Submit</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/content/manage`}>
            <h4>Manage</h4>
          </Link></ListGroupItem>




        </ListGroup>
      </div>
    );
  }
}

export default ContentNavComponent;

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';
import ContactListItem from './ContactListItem';

class DataNavComponent extends Component {
  render() {

    return (
      <div>
        <ListGroup>
          <ListGroupItem><Link to={`/data`}>
            <h4>Home</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/data/submit`}>
            <h4>Submit</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={`/data/manage`}>
            <h4>Manage</h4>
          </Link></ListGroupItem>




        </ListGroup>
      </div>
    );
  }
}

export default DataNavComponent;

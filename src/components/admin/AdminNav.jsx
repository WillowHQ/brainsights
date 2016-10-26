import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

class AdminNavComponent extends Component {
  render() {

    return (
      <div>
        <ListGroup>
          <ListGroupItem><Link to={'/administration'}>
            <h4>Home</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={'/administration/accounts'}>
            <h4>Accounts</h4>
          </Link></ListGroupItem>

          <ListGroupItem><Link to={'/administration/audit'}>
            <h4>Audit</h4>
          </Link></ListGroupItem>




        </ListGroup>
      </div>
    );
  }
}

export default AdminNavComponent;

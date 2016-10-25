import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';
import ContactListItem from './ContactListItem';

// We'll use this function to get a contact
// list item for each of the contacts in our list
function getContactListItem(contact) {
  return (
    <ContactListItem
      key={contact.id}
      contact={contact}
    />
  );
}
class Contacts1Component extends Component {

  constructor() {
    super();
    // For our initial state, we just want
    // an empty array of contacts
    this.state = {
      contacts: []
    }
    // We need to bind this to onChange so we can have
    // the proper this reference inside the method
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ContactStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    ContactActions.recieveContacts();
  }

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      contacts: ContactStore.getContacts()
    });
  }

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

export default Contacts1Component;

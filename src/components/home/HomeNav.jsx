import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class HomeNavComponent extends Component {

  render() {

    return (
      <div >

        <List>
        <ListItem><h1>Home</h1></ListItem>
        <Divider />
          <ListItem><Link to={`/home/dashboard`}>
            <h4>Dashboard</h4>
          </Link></ListItem>

          <ListItem><Link to={`/home/audit`}>
            <h4>Audit</h4>
          </Link></ListItem>
        </List>
      </div>
    );
  }
}



export default HomeNavComponent;

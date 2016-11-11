import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ActionHome from 'material-ui/svg-icons/action/home';

class HomeNavComponent extends Component {

  render() {

    return (
      <div >

        <List>
        <ListItem primaryText="Home" leftIcon={<ActionHome />}> </ListItem>
        <Divider />
          <ListItem primaryText="Dashboard"><Link to={`/home/dashboard`}>

          </Link></ListItem>

          <ListItem primaryText="Audit"><Link to={`/home/audit`}>

          </Link></ListItem>
        </List>
      </div>
    );
  }
}



export default HomeNavComponent;

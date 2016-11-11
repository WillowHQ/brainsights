import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';


const style = {
  list: {
    padding:'0 0 0'
  }
}

class HomeNavComponent extends Component {

  render() {

    return (
      <div >

        <List style={style.list}>
          <ListItem primaryText="Home"></ListItem>
          <Divider />
            <ListItem><Link to={`/home/dashboard`}>
              {"Dashboard"}
            </Link></ListItem>

            <ListItem> <Link to={'/home/audit'}>
            {"Audit"}
            </Link></ListItem>

        </List>

      </div>
    );
  }
}



export default HomeNavComponent;

import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';


class ContentNavComponent extends Component {
  render() {

    return (
      <div margin-left={0}>
        <List margin-left={0}>
          <ListItem><Link to={`/content`}>
            <h4>Home</h4>
          </Link></ListItem>

          <ListItem><Link to={`/content/submit`}>
            <h4>Submit</h4>
          </Link></ListItem>

          <ListItem><Link to={`/content/manage`}>
            <h4>Manage</h4>
          </Link></ListItem>




        </List>
      </div>
    );
  }
}

export default ContentNavComponent;

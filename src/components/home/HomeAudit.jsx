import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import HomeNav from './HomeNav';
import Paper from 'material-ui/Paper';



const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0px 0px 0px 0',
    padding: '0 0 0',
    width: '250px',
    height: '700px',
  },
  paper2: {
    display: 'inline-block',
    float: 'left',
    margin: '0px 0px 0px 0',
    padding: '0 0 0',
    width: '800px',
    height: '700px',

  }
};



class HomeAuditComponent extends Component {




  render() {

    return (
      <div>
        <Paper style={style.paper}>
          <HomeNav />
        </Paper>
        <Paper style={style.paper2}>
          <p> Audit </p>
        </Paper>
      </div>
    );
  }
}


export default HomeAuditComponent;



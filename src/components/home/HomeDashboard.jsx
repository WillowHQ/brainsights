import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import HomeNav from './HomeNav';


const style = {
  sideNav: {
    display: 'inline-block',
    float: 'left',
    margin: '0px 0px 0px 0',
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



class HomeDashboardComponent extends Component {


  render() {

    return (
      <div>
        <Paper style={style.sideNav}>
          <HomeNav />
        </Paper>
        <Paper style={style.paper2}>
          <p> Dashboard</p>
        </Paper>
      </div>
    );
  }
}


export default HomeDashboardComponent;
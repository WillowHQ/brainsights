import React, { Component } from 'react';
import { Link } from 'react-router';
import { NavItem } from 'react-bootstrap';

//replacing bootstrap compnents with material
import AppBar from 'material-ui/AppBar';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';


class HeaderComponent extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated()
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  login() {
    // We can call the show method from Auth0Lock,
    // which is passed down as a prop, to allow
    // the user to log in
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      // If login is successful, we want to dispatch
      // the logUserIn action so we can have the profile
      // and token set in local storage
      AuthActions.logUserIn(profile, token);
      // We also want to set the authentication state
      // for the component to true
      this.setState({authenticated: true});
    });
  }

  logout() {
    AuthActions.logUserOut();
    this.setState({authenticated: false});
  }

  render() {
    return (
      <div>

        { !this.state.authenticated ? (
          <NavItem onClick={this.login}>Login</NavItem>
        ) : (
          <NavItem onClick={this.logout}>Logout</NavItem>
        )}
      </div>

    );

  }
}

export default HeaderComponent;

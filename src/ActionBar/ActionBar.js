import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core';

import SignInButton from './SignInButton/SignInButton';
import CreateGroupButton from './CreateGroupButton/CreateGroupButton';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class ActionBar extends Component {
  isHomePage() {
    return this.props.location.pathname === '/';
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {
            this.isHomePage() &&
            <CreateGroupButton open={this.props.authorized}/>
          }
          {
            !this.isHomePage() &&
            (<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <IconButton style={{ color: '#fff' }}>
                <ArrowBackIcon/>
              </IconButton>
            </Link>)
          }
          <SignInButton/>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    authorized: auth.isLoggedIn,
  };
}

export default connect(mapStateToProps)(withRouter(ActionBar));

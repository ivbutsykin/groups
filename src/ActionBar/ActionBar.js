import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core';

import SignInButton from './SignInButton/SignInButton';
import CreateGroupButton from './CreateGroupButton/CreateGroupButton';
import BackArrow from './BackArrow/BackArrow';

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
            !this.isHomePage() && <BackArrow/>
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

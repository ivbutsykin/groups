import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core';

import CreateGroupButton from './CreateGroupButton/CreateGroupButton';
import GoBackButton from './GoBackButton/GoBackButton';
import ProfileButton from './ProfileButton/ProfileButton';
import SignInButton from './SignInButton/SignInButton';
import SignUpButton from './SignUpButton/SignUpButton';

class ActionBar extends Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    };

    const { isHomePage } = this;

    return (
      <AppBar position="static">
        <Toolbar style={{ style }}>
          {/*{*/}
          {/*  this.isHomePage() &&*/}
          {/*  <CreateGroupButton open={this.props.authorized}/>*/}
          {/*}*/}
          {/*{*/}
          {/*  !this.isHomePage() &&*/}
          {/*}*/}
          <CreateGroupButton/>
          <GoBackButton/>
          <div style={{
            marginLeft: 'auto',
            marginRight: '0',
          }}>
            <ProfileButton/>
            <SignUpButton/>
            <SignInButton/>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

  isHomePage() {
    return this.props.location.pathname === '/';
  }
}

function mapStateToProps({ auth }) {
  return {
    authorized: auth.isLoggedIn,
  };
}

export default connect(mapStateToProps)(withRouter(ActionBar));

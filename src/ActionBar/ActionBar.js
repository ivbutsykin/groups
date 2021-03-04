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

    const { pathname } = this.props.location;
    const { authorized } = this.props;

    return (
      <AppBar position="static">
        <Toolbar style={{ style }}>
          {pathname === '/' && authorized && <CreateGroupButton/>}
          {pathname !== '/' && <GoBackButton/>}
          <div style={{
            marginLeft: 'auto',
            marginRight: '0',
          }}>
            {authorized && <ProfileButton/>}
            {pathname !== '/signin' && !authorized && <SignInButton/>}
            {pathname !== '/signin' && pathname !== '/signup' && !authorized && <SignUpButton/>}
          </div>
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

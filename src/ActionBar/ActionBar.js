import { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SignInButton from './SignInButton/SignInButton';
import CreateGroupButton from './CreateGroupButton/CreateGroupButton';
import BackArrow from './BackArrow/BackArrow';
import OptionsButton from './OptionsButton/OptionsButton';

class ActionBar extends Component {
  render() {
    return (
        <AppBar position="static">
          <Toolbar>
            <CreateGroupButton open={this.props.authorized} />
            <BackArrow />
            <OptionsButton open={this.props.authorized} />
            <SignInButton />
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

export default connect(mapStateToProps)(ActionBar);

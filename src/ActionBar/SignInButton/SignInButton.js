import { Component } from 'react';
import { connect } from 'react-redux';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { signIn } from '../../Authorization/actions';

class SignInButton extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = () => {
    this.props.signIn();
    this.handleClose();
  };

  render() {
    const style = {
      marginLeft: 'auto',
      marginRight: '0',
    };

    const openMenu = Boolean(this.state.anchorEl);

    return (
      <div style={style}>
        <IconButton color="inherit" onClick={this.handleMenu}>
          <AccountCircle/>
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          open={openMenu}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClick}>
            Sign in
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default connect(null, { signIn })(SignInButton);

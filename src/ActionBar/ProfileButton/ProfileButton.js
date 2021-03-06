import { Component } from 'react';

// import { Link } from 'react-router-dom';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { signOut } from '../../Authorization/actions';
import { connect } from 'react-redux';

class ProfileButton extends Component {
  state = {
    anchorEl: null,
    loading: false,
  };

  render() {
    const openMenu = Boolean(this.state.anchorEl);

    return (
      <>
        <IconButton color="inherit" style={{ marginLeft: '15px' }} onClick={this.handleMenu}>
          <AccountCircle/>
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          open={openMenu}
          onClose={this.handleClose}
        >
          {/*<Link to="/" style={{*/}
          {/*  textDecoration: 'none',*/}
          {/*  color: 'black',*/}
          {/*}}>*/}
          <MenuItem onClick={this.handleClick}>
            Sign out
          </MenuItem>
          {/*</Link>*/}
        </Menu>
      </>
    );
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = () => {
    const { signOut } = this.props;

    this.setState({ loading: true });
    signOut();
    this.setState({
      loading: false,
    });
    this.handleClose();
  };

}

export default connect(null, { signOut })(ProfileButton);

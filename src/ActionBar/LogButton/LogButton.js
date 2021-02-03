import { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class LogButton extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    console.log(event);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const style = {
      marginLeft: 'auto',
      marginRight: '0',
    };

    const open = Boolean(this.state.anchorEl);

    return (
      <div style={style}>
        <IconButton color="inherit" onClick={this.handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Sign in</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LogButton;

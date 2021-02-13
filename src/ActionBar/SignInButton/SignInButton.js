import {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {signIn} from '../../Authorization/actions';
import {connect} from 'react-redux';

class SignInButton extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
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
    const openCreateGroupButton = this.props.isOpenCreateGroupButton;

    return (
        <div style={style}>
          <IconButton color="inherit" onClick={this.handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={openMenu}
              onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClick}>
              Sign {!openCreateGroupButton ? 'in' : 'out'}
            </MenuItem>
          </Menu>
        </div>
    );
  }
}

export default connect(null, {signIn})(SignInButton);

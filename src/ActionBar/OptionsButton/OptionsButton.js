import {Component} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton, Menu, MenuItem} from '@material-ui/core';

class OptionsButton extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = e => {
    this.setState({anchorEl: e.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const style = {
      // marginLeft: 'auto',
      // marginRight: '0',
      color: '#fff',
    };
    const open = Boolean(this.state.anchorEl);

    return (this.props.open && (
        <>
          <IconButton style={style}
                      onClick={this.handleClick}
          >
            <MoreVertIcon/>
          </IconButton>
          <Menu
              anchorEl={this.state.anchorEl}
              open={open}
              onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              Delete group
            </MenuItem>
          </Menu>
        </>
    ));
  }
}

export default OptionsButton;

import React from 'react';
import {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogButton from './LogButton/LogButton';
import CreateGroupButton from './CreateGroupButton/CreateGroupButton';

class ActionBar extends Component {
  state = {
    isOpenCreateGroupButton: false,
  };

  handleChangeOpenCreateGroupButton = value => {
    this.setState({isOpenCreateGroupButton: value});
  };

  render() {
    return (
        <AppBar position="static">
          <Toolbar>
            {/*{this.props.children}*/}
            <CreateGroupButton open={this.state.isOpenCreateGroupButton}/>
            <LogButton
                isOpenCreateGroupButton={this.state.isOpenCreateGroupButton}
                onChangeOpenCreateGroupButton={
                  this.handleChangeOpenCreateGroupButton
                }
            />
          </Toolbar>
        </AppBar>
    );
  }
}

export default ActionBar;

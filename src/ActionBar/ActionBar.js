import {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogButton from './LogButton/LogButton';
import CreateGroupButton from './CreateGroupButton/CreateGroupButton';
import BackArrow from './BackArrow/BackArrow';
import {connect} from 'react-redux';

class ActionBar extends Component {
  render() {
    return (
        <AppBar position="static">
          <Toolbar>
            {this.props.visiableCreateGroupButton &&
            <CreateGroupButton open={this.props.authorized}/>}
            {this.props.visiableBackArrow &&
            <BackArrow/>}
            <LogButton
                isOpenCreateGroupButton={this.props.authorized}
            />
          </Toolbar>
        </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authorized: state.authorized,
  };
}

export default connect(mapStateToProps)(ActionBar);

import {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CreateGroupDialog from './CreateGroupDialog/CreateGroupDialog';

class CreateGroupButton extends Component {
  state = {
    isOpenCreateGroupDialog: false,
  };

  handleClick = () => {
    this.handleChangeOpenCreateGroupDialog(true);
  };

  handleChangeOpenCreateGroupDialog = value => {
    this.setState({isOpenCreateGroupDialog: value});
  };

  render() {
    return (
        this.props.open && (
            <>
              <IconButton color="inherit" onClick={this.handleClick}>
                <GroupAddIcon/>
              </IconButton>
              <CreateGroupDialog open={this.state.isOpenCreateGroupDialog}
                                 onChangeOpenCreateGroupDialog={this.handleChangeOpenCreateGroupDialog}/>
            </>
        )
    );
  }
}

export default CreateGroupButton;

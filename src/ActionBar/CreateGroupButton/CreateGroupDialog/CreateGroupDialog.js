import {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {postCreateGroup} from '../../../api/groups.service';
import {fetchGroupsList} from '../../../redux/actions';

import {connect} from 'react-redux';

class CreateGroupDialog extends Component {
  state = {
    groupName: '',
  };

  handleChange = e => {
    this.setState({groupName: e.target.value});
  };

  handleClick = async () => {
    await postCreateGroup({name: this.state.groupName})
    await this.props.fetchGroupsList();
    this.props.onClose(false);
  };

  handleClose = () => {
    this.props.onClose(false);
  };

  render() {
    return (<Dialog open={this.props.open} onClose={this.handleClose}>
      <DialogTitle>Create group</DialogTitle>
      <DialogContent>
        <TextField autoFocus label="Group name" fullWidth
                   onChange={this.handleChange}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose}>Cancel</Button>
        <Button onClick={this.handleClick}>Create</Button>
      </DialogActions>
    </Dialog>);
  }
}

export default connect(null, {fetchGroupsList})(CreateGroupDialog);

import { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { createGroup } from '../../../GroupsList/actions';

import { connect } from 'react-redux';

class CreateGroupDialog extends Component {
  state = {
    groupName: '',
    loading: false,
  };

  handleChange = e => {
    this.setState({ groupName: e.target.value });
  };

  handleClick = async () => {
    const { createGroup, onClose } = this.props;

    this.setState({ loading: true });
    await createGroup({ name: this.state.groupName });
    this.setState({ loading: false });

    onClose(false);
  };

  handleClose = () => {
    this.props.onClose(false);
  };

  render() {
    const { loading } = this.state;
    return (<Dialog
        maxWidth="md"
        open={this.props.open}
        onClose={this.handleClose}
    >
      <DialogTitle>Create group</DialogTitle>
      <DialogContent>
        <TextField
            autoFocus
            label="Group name"
            fullWidth
            onChange={this.handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose}>Cancel</Button>
        <Button
            color="primary"
            variant="contained"
            disabled={loading}
            onClick={this.handleClick}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>);
  }
}

export default connect(null, { createGroup })(CreateGroupDialog);

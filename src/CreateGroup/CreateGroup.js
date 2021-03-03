import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Typography, Button, TextField } from '@material-ui/core';
// import { Snackbar } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';


import { createGroup } from '../GroupsList/actions';

class CreateGroup extends Component {
  state = {
    loading: false,
    groupName: '',
    redirect: null,
    // open: false,
  };

  render() {
    const {
      loading,
      groupName,
      redirect
    } = this.state;

    if (redirect) {
      return <Redirect to={redirect}/>;
    }

    return (<div style={{ marginTop: '15px' }}>
      <Typography variant="h5" component="h1" align="center">Create a new group</Typography>
      <div style={{
        width: '50%',
        margin: '0 auto',
      }}>
        <div style={{ margin: '15px 0' }}>
          <Typography style={{ margin: '5px 0' }}>
            Group name
            <span style={{ color: '#cc0000' }}> *</span>
          </Typography>
          <TextField value={groupName} size="small" variant="outlined" fullWidth
                     onChange={this.handleGroupNameChange}/>
        </div>
        <Button variant="contained" color="primary" size="small" fullWidth disabled={loading}
                onClick={this.handleCreateGroupClick}>
          Create group
        </Button>
      </div>
      {/*<Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>*/}
      {/*  <this.Alert onClose={this.handleClose} severity="success">*/}
      {/*    This is a success message!*/}
      {/*  </this.Alert>*/}
      {/*</Snackbar>*/}
    </div>);
  }

  handleGroupNameChange = e => this.setState({ groupName: e.target.value });

  handleCreateGroupClick = async () => {
    const { createGroup } = this.props;

    this.setState({ loading: true });
    await createGroup({ name: this.state.groupName });
    this.setState({
      loading: false,
      redirect: '/'
    });
  };

}

export default connect(null, { createGroup })(CreateGroup);

import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Typography, Button, TextField } from '@material-ui/core';
// import { Snackbar } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';

import { signIn } from '../actions';

class SignInForm extends Component {
  state = {
    loading: false,
    email: '',
    password: '',
    redirect: null,
    // open: false,
  };

  render() {
    const {
      email,
      password,
      loading,
      redirect,
      // open
    } = this.state;

    if (redirect) {
      return <Redirect to={redirect}/>;
    }

    return (<div style={{ marginTop: '15px' }}>
      <Typography variant="h5" component="h1" align="center">Sign in</Typography>
      <div style={{
        width: '50%',
        margin: '0 auto',
      }}>
        <div style={{ margin: '15px 0' }}>
          <Typography style={{ margin: '5px 0' }}>Email address</Typography>
          <TextField value={email} size="small" variant="outlined" fullWidth
                     onChange={this.handleEmailChange}/>
        </div>
        <div style={{ margin: '15px 0' }}>
          <Typography style={{ margin: '5px 0' }}>Password</Typography>
          <TextField value={password} type="password" size="small"
                     variant="outlined" fullWidth
                     onChange={this.handlePasswordChange}/>
        </div>
        <Button variant="contained" color="primary" size="small" fullWidth disabled={loading}
                onClick={this.handleLoginClick}>
          Sign in
        </Button>
      </div>
      {/*<Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>*/}
      {/*  <this.Alert onClose={this.handleClose} severity="success">*/}
      {/*    This is a success message!*/}
      {/*  </this.Alert>*/}
      {/*</Snackbar>*/}
    </div>);
  }

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleLoginClick = async () => {
    const { signIn } = this.props;
    const {
      email,
      password
    } = this.state;

    this.setState({ loading: true });
    await signIn(email, password);
    this.setState({
      loading: false,
      redirect: '/',
      // open: 'true',
    });
  };

  // Alert = (props) => {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // };
  //
  // handleClose = () => {
  //   this.setState({ open: false });
  // };
}

export default connect(null, { signIn })(SignInForm);

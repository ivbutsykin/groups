import { Component } from 'react';

import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { signIn } from './actions';

class SignInForm extends Component {

  state = {
    loading: false,
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <form>
          <TextField
            value={email}
            onChange={this.handleEmailChange}
            label="Email"
            style={{ display: 'block' }}
          />
          <TextField value={password} onChange={this.handlePasswordChange} type="password" label="Password"
                     style={{ display: 'block' }}/>
        </form>

        <Button onClick={this.handleLoginClick} variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Sign In
        </Button>
      </>
    );
  }

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleLoginClick = async () => {
    const { signIn } = this.props;
    const { email, password } = this.state;

    this.setState({ loading: true });
    await signIn(email, password);
    this.setState({ loading: false });
  };
}

export default connect(null, { signIn })(SignInForm);
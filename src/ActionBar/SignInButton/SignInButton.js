import { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class SignInButton extends Component {
  render() {
    const style = {
      textDecoration: 'none',
      color: 'black',
      marginLeft: '15px'
    };

    return (
      <Link to="/signin" style={style}>
        <Button
          variant="contained"
          color="inherit"
        >
          Sign in
        </Button>
      </Link>
    );
  }
}

export default SignInButton;

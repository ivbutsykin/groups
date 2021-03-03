import { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class SignInButton extends Component {
  render() {
    const style = {
      marginLeft: 'auto',
      marginRight: '0',
      textDecoration: 'none',
      color: 'black'
    };

    return (
      <Link to="/signin" style={style}>
        <Button
          variant="contained"
          color="inherit"
          size="small"
        >
          Sign in
        </Button>
      </Link>
    );
  }
}

export default SignInButton;

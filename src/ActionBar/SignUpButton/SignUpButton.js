import { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class SignUpButton extends Component {
  render() {
    const style = {
      textDecoration: 'none',
      color: 'black',
      marginLeft: '15px'
    };

    return (
      <Link to="/signup" style={style}>
        <Button
          variant="outlined"
          color="inherit"
          style={{ color: '#fff' }}
        >
          Sign up
        </Button>
      </Link>
    );
  }
}

export default SignUpButton;

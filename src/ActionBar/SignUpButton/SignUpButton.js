import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

function SignUpButton() {
  return (
    <Link to="/signup" style={{
      textDecoration: 'none',
      color: 'black'
    }}>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        style={{color: "#fff"}}
      >
        Sign up
      </Button>
    </Link>
  );
}

export default SignUpButton;

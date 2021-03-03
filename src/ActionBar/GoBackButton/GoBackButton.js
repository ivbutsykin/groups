import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function GoBackButton() {
  return (
    <Link to="/" style={{
      textDecoration: 'none',
      color: 'black'
    }}>
      <IconButton
        size="small"
        style={{color: "#fff"}}
      >
        <ArrowBackIcon/>
      </IconButton>
    </Link>
  );
}

export default GoBackButton;

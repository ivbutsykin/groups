import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';

function BackArrow() {
  return (<Link to="/" style={{textDecoration: 'none', color: 'black'}}>
    <IconButton style={{color: '#fff'}}>
      <ArrowBackIcon/>
    </IconButton>
  </Link>);
}

export default BackArrow;

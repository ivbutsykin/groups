import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

function CreateGroupButton() {
  return (
    <Link to="/new" style={{
      textDecoration: 'none',
      color: 'black'
    }}>
      <Button
        variant="contained"
        color="inherit"
        size="small"
        startIcon={<GroupAddIcon/>}
      >
        New
      </Button>
    </Link>
  );
}

export default CreateGroupButton;

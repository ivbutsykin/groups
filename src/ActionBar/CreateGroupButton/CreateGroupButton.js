import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

function CreateGroupButton(props) {
  return (
    props.open && (
      <IconButton color="inherit">
        <GroupAddIcon />
      </IconButton>
    )
  );
}

export default CreateGroupButton;

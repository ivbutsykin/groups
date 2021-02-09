import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';

function GroupsListItem(props) {
  return (
      <ListItem>
        <ListItemIcon>
          <GroupIcon/>
        </ListItemIcon>
        <ListItemText primary={props.name}/>
      </ListItem>
  );
}

export default GroupsListItem;

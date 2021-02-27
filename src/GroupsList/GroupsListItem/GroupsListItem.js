import { connect } from 'react-redux';

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

import GroupIcon from '@material-ui/icons/Group';
import DeleteIcon from '@material-ui/icons/Delete';

import { fetchDeleteGroup } from '../actions';

function GroupsListItem(props) {
  const { group } = props;

  return (
    <ListItem>
      <ListItemIcon>
        <GroupIcon/>
      </ListItemIcon>
      <ListItemText primary={group.name}/>
      {
        props.authorized &&
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={handleRemoveClick}>
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      }
    </ListItem>
  );

  function handleRemoveClick(e) {
    e.preventDefault();
    props.fetchDeleteGroup(group.id);
  }
}

function mapStateToProps({ auth }) {
  return {
    authorized: auth.isLoggedIn,
  };
}

export default connect(mapStateToProps, { fetchDeleteGroup })(GroupsListItem);

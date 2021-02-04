import {Component} from 'react';
import List from '@material-ui/core/List';
import GroupsListItem from './GroupsListItem/GroupsListItem';

class GroupsList extends Component {
  generate() {
    return <GroupsListItem/>;
  }

  render() {
    return <List>{this.generate()}</List>;
  }
}

export default GroupsList;

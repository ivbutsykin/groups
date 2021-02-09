import {Component} from 'react';
import List from '@material-ui/core/List';
import GroupsListItem from './GroupsListItem/GroupsListItem';
import {getGroupsList} from '../api/groups.service';

class GroupsList extends Component {
  state = {
    groups: [],
  };

  componentDidMount() {
    this.handleGetGroupList();
  }

  handleGetGroupList = async () => {
    const response = await getGroupsList();
    const groups = await response.json();
    this.setState({groups: groups});
  };

  generate() {
    return this.state.groups.map(group => (
        <GroupsListItem key={group.id} name={group.name}/>
    ));
  }

  render() {
    return <List>{this.generate()}</List>;
  }
}

export default GroupsList;

import {Component} from 'react';
import List from '@material-ui/core/List';
import GroupsListItem from './GroupsListItem/GroupsListItem';
import {fetchGroupsList} from '../redux/actions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class GroupsList extends Component {
  componentDidMount() {
    this.props.fetchGroupsList();
  }

  generate() {
    return this.props.groups.map(group => (
        <Link to={`/groups/${group.id}`} style={{ textDecoration: 'none', color: 'black' }} key={group.id}>
          <GroupsListItem name={group.name}/>
        </Link>
    ));
  }

  render() {
    return <List>{this.generate()}</List>;
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
  }
}

export default connect(mapStateToProps, {fetchGroupsList})(GroupsList);

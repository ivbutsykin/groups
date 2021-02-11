import {Component} from 'react';
import List from '@material-ui/core/List';
import GroupsListItem from './GroupsListItem/GroupsListItem';
import {getData} from '../redux/actions';

import {connect} from 'react-redux';

class GroupsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  generate() {
    return this.props.groups.map(group => (
        <GroupsListItem key={group.id} name={group.name}/>
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

export default connect(mapStateToProps, {getData})(GroupsList);

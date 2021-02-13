import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import GroupsListItem from './GroupsListItem/GroupsListItem';
import { fetchGroupList } from './actions';

class GroupsList extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    void this.fetchGroupList();
  }

  async fetchGroupList() {
    this.setState({ loading: true });
    await this.props.fetchGroupList();
    this.setState({ loading: false });
  }

  render() {
    const { groups } = this.props;
    const { loading } = this.state;

    return <List>
      {
        groups.map(group => (
            <Link
                to={`/groups/${group.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
                key={group.id}
            >
              <GroupsListItem name={group.name} />
            </Link>
        ))
      }
    </List>;
  }
}

function mapStateToProps({ groups: state }) {
  return {
    groups: state.groups,
  };
}

export default connect(mapStateToProps, { fetchGroupList })(GroupsList);

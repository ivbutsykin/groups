import { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { List, Box, CircularProgress } from '@material-ui/core';

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

    if (loading) {
      return (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          p={5}
        >
          <CircularProgress/>
        </Box>
      );
    }

    if (groups.length === 0) {
      return (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          flex={1}
        >
          <span style={{ color: 'grey' }}>No groups here yet</span>
        </Box>
      );
    }

    return (
      <List>
        {
          groups.map(group => (
            <Link
              to={`/groups/${group.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
              key={group.id}
            >
              <GroupsListItem group={group}/>
            </Link>
          ))
        }
      </List>
    );
  }
}

function mapStateToProps({ groups: state }) {
  return {
    groups: state.groups,
  };
}

export default connect(mapStateToProps, { fetchGroupList })(GroupsList);

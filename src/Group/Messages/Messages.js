import { Component } from 'react';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';

import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchMessageList, fetchMoreMessages } from '../actions';

import classes from './messages.module.css';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

class Messages extends Component {
  state = {
    loading: false,
    hasMore: false,
  };

  componentDidMount() {
    void this.fetchMessageList();
  }

  async fetchMessageList() {
    this.setState({ loading: true });
    const hasMore = await this.props.fetchMessageList(this.props.id);
    this.setState({ loading: false, hasMore });
  }

  fetchMore = async () => {
    const { messages, fetchMoreMessages } = this.props;
    const hasMore = await fetchMoreMessages(this.props.id, {
      limit: 10,
      skip: messages.length,
    });

    this.setState({ hasMore });
  };

  render() {
    const { messages } = this.props;
    const { loading, hasMore } = this.state;

    if (loading) {
      return (
          <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              p={5}
          >
            <CircularProgress />
          </Box>
      );
    }
    return (
        <List
            id="message-list"
            ref={$el => this.$container = $el}
            className={classes.root}
        >
          <InfiniteScroll
              inverse
              hasMore={hasMore}
              dataLength={messages.length}
              next={this.fetchMore}
              loader={
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                  <CircularProgress />
                </Box>
              }
              scrollableTarget="message-list"
              scrollThreshold={0.95}
              style={{
                display: 'flex',
                flexDirection: 'column-reverse',
              }}
          >
            {
              messages.map(message => {
                const userName = (typeof message.user === 'string')
                    ? message.user
                    : message.user.name;

                return (
                    <ListItem
                        alignItems="flex-start"
                        key={message.id}
                    >
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" />
                      </ListItemAvatar>
                      <ListItemText
                          primary={userName}
                          secondary={message.body}
                      />
                    </ListItem>
                );
              })
            }
          </InfiniteScroll>
        </List>
    );
  }
}

function mapStateToProps({ group: state }) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps,
    { fetchMessageList, fetchMoreMessages })(Messages);

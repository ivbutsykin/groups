import { Component } from 'react';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  CircularProgress,
  Typography
} from '@material-ui/core';

import classes from './messages.module.css';

import { fetchMessageList, fetchMoreMessages } from '../actions';

class Messages extends Component {
  state = {
    loading: false,
    hasMore: false,
    error: null,
  };

  componentDidMount() {
    void this.fetchMessageList();
  }

  async fetchMessageList() {
    try {
      this.setState({ loading: true });
      const hasMore = await this.props.fetchMessageList(this.props.id);
      this.setState({ loading: false, hasMore });
    } catch (error) {
      this.setState({ error: 'Group not found!', loading: false });
    }
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
    const { loading, error, hasMore } = this.state;

    if (loading) {
      return (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          flex={1}
        >
          <CircularProgress/>
        </Box>
      );
    }

    if (error) {
      return (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          flex={1}
        >
          <Typography color="error">{error}</Typography>
        </Box>
      );
    }

    if (!messages.length) {
      return (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          flex={1}
        >
          <span style={{ color: 'grey' }}>No messages here yet</span>
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
              <CircularProgress/>
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
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={userName}
                    // primary={message.user.name}
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

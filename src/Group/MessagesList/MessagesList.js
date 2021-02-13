import { Component } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import MessagesListItem from './MessagesListItem/MessagesListItem';
import { fetchMessageList } from '../actions';

class MessagesList extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    void this.fetchMessageList();
  }

  async fetchMessageList() {
    this.setState({ loading: true });
    await this.props.fetchMessageList(this.props.id);
    this.setState({ loading: false });
  }

  render() {
    const { messages } = this.props;
    const { loading } = this.state;

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

    return <div style={{ marginTop: '20px' }}>
      {
        messages.map(message =>
            (
                <MessagesListItem
                    body={message.body}
                    key={message.id}
                />
            ))
      }
    </div>;
  }
}

function mapStateToProps({ group: state }) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps, { fetchMessageList })(MessagesList);

import { Component } from 'react';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

import SendMessageForm from './SendMessageForm/SendMessageForm';
import Messages from './Messages/Messages';

import styles from './group.module.css';

class Group extends Component {
  render() {
    const { match: { params } } = this.props;

    return <Box className={styles.root}>
      <Messages id={params.id} />
      <SendMessageForm groupId={params.id} />
    </Box>;
  }
}

function mapStateToProps({ auth: state }) {
  return {
    authorized: state.isLoggedIn,
  };
}

export default connect(mapStateToProps)(Group);

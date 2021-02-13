import { Component } from 'react';
import { connect } from 'react-redux';
import ActionBar from '../ActionBar/ActionBar';
import SendMessageForm from './SendMessageForm/SendMessageForm';
import MessagesList from './MessagesList/MessagesList';

class Group extends Component {
  render() {
    const { match: { params } } = this.props;

    return <>
      <ActionBar
          visiableBackArrow
          visiableOptionsButton
      />
      <MessagesList id={params.id} />
      <SendMessageForm groupId={params.id} />
    </>;
  }
}

function mapStateToProps({ auth: state }) {
  return {
    authorized: state.isLoggedIn,
  };
}

export default connect(mapStateToProps)(Group);

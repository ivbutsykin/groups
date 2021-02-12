import {Component} from 'react';
import ActionBar from '../ActionBar/ActionBar';
import SendMessageForm from './SendMessageForm/SendMessageForm';
import MessagesList from './MessagesList/MessagesList';
import {connect} from 'react-redux';

class Group extends Component {
  render() {
    return <>
      <ActionBar visiableBackArrow="true" visiableOptionsButton="true"/>
      <MessagesList id={this.props.match.params.id}/>
      <SendMessageForm open={this.props.authorized}
                       id={this.props.match.params.id}/>
    </>;
  }
}

function mapStateToProps(state) {
  return {
    authorized: state.authorized,
  };
}

export default connect(mapStateToProps)(Group);

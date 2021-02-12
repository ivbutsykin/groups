import {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessagesList} from '../../redux/actions';
import MessagesListItem from './MessagesListItem/MessagesListItem';

class MessagesList extends Component {
  componentDidMount() {
    this.props.fetchMessagesList(this.props.id);
  }

  generate() {
    return this.props.messages.map(message => (
          <MessagesListItem body={message.body} key={message.id}/>
    ));
  }

  render() {
    return <div style={{marginTop: "20px"}}>{this.generate()}</div>
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps, {fetchMessagesList})(MessagesList);

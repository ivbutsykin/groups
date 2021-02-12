import {Component} from 'react';
import List from '@material-ui/core/List';
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
    return <List>{this.generate()}</List>
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps, {fetchMessagesList})(MessagesList);

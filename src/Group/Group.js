import { Component } from 'react';
import { connect } from 'react-redux';

import { Box, Typography } from '@material-ui/core';

import SendMessageForm from './SendMessageForm/SendMessageForm';
import Messages from './Messages/Messages';

import styles from './group.module.css';

import { fetchGroup } from './actions';

class Group extends Component {
  state = {
    loading: false,
    error: null,
    name: '',
  };

  async componentDidMount() {
    const {
      match: { params },
      fetchGroup
    } = this.props;
    try {
      this.setState({ loading: true });
      await fetchGroup(params.id);
      this.setState({
        loading: false,
        name: this.props.name
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: 'Group not found'
      });
    }
  }

  render() {
    const { match: { params } } = this.props;

    // const { loading, error } = this.state;
    //
    // if (loading) {
    //   console.log('loading');
    // }
    //
    // if (error) {
    //   console.error(error);
    // }

    return <Box className={styles.root}>
      <Typography variant="h4" component="h1" align="center"
                  style={{ marginTop: '15px' }}>{this.state.name}</Typography>
      <Messages id={params.id}/>
      <SendMessageForm groupId={params.id}/>
    </Box>;
  }
}

function mapStateToProps({ group: state }) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps, { fetchGroup })(Group);

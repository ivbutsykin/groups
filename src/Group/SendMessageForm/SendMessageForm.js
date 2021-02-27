import { Component } from 'react';
import { connect } from 'react-redux';

import { TextField, Grid, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { publishMessage, fetchGroup } from '../actions';

class SendMessageForm extends Component {
  state = {
    body: '',
    loading: false,
    error: null,
  };

  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleClick = () => {
    void this.publish();
  };

  componentDidMount() {
    void this.checkError();
  }

  async checkError() {
    try {
      const { groupId } = this.props;
      await this.props.fetchGroup(groupId);
    } catch (e) {
      this.setState({error: e});
    }
  }

  async publish() {
    const { auth: { user }, groupId, publishMessage } = this.props;
    const { body } = this.state;

    this.setState({ ...this.state, loading: true });
    try {
      await publishMessage({
        body,
        user: user.id,
        group: groupId,
      });
      this.setState({ body: '', loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    const { auth } = this.props;
    const { body, loading } = this.state;

    if (!auth.isLoggedIn || this.state.error) {
      return null;
    }

    return (
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid
          item
          xs={7}
          sm={9}
        >
          <TextField
            placeholder="Message"
            fullWidth
            variant="outlined"
            margin="dense"
            value={body}
            color="primary"
            onChange={this.handleChange}
            multiline
            rowsMax={3}
          />
        </Grid>
        <Grid
          item
          xs={5}
          sm={3}
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon/>}
            onClick={this.handleClick}
            disabled={loading}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default connect(({ auth }, props) => ({
  ...props,
  auth,
}), { publishMessage, fetchGroup })(SendMessageForm);

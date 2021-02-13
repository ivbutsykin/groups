import { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import { publishMessage } from '../actions';

class SendMessageForm extends Component {
  state = {
    body: '',
    loading: false,
  };

  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleClick = () => {
    void this.publish();
  };

  async publish() {
    const { auth: { user }, groupId, publishMessage } = this.props;
    const { body } = this.state;

    this.setState({ loading: true });
    await publishMessage({
      body,
      user: user.id,
      group: groupId,
    });
    this.setState({ loading: false });
  }

  render() {
    const { auth } = this.props;
    const { body, loading } = this.state;

    if (!auth.isLoggedIn) {
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
                endIcon={<SendIcon />}
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
}), { publishMessage })(SendMessageForm);

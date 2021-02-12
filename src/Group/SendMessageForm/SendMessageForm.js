import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {Component} from 'react';
import {postMessage} from '../../api/groups.service';
import {fetchMessagesList} from '../../redux/actions';
import {connect} from 'react-redux';

class SendMessageForm extends Component {
  state = {
    messageBody: '',
  };

  handleChange = e => {
    this.setState({messageBody: e.target.value});
  };

  handleClick = async () => {
    await postMessage({
      body: this.state.messageBody,
      user: '6026d321faa59615cc472de2',
      group: `${this.props.id}`,
    });
    await this.props.fetchMessagesList(this.props.id);
    this.setState({messageBody: ''});
  };

  render() {
    return (this.props.open &&
        (<Grid container spacing={2} alignItems="center">
          <Grid item xs={7} sm={9}>
            <TextField placeholder="Message" fullWidth
                       variant="outlined" margin="dense"
                       value={this.state.messageBody}
                       onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={5} sm={3}>
            <Button variant="contained" color="primary"
                    endIcon={<SendIcon/>} onClick={this.handleClick}>
              Send
            </Button>
          </Grid>
        </Grid>)
    );
  }
}

export default connect(null, {fetchMessagesList})(SendMessageForm);

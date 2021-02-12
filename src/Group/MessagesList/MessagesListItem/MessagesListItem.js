import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

function MessagesListItem(props) {
  return (
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <AccountCircle/>
        </Grid>
        <Grid item>
          <TextField value={props.body} variant="outlined" size="small"
                     disabled/>
        </Grid>
      </Grid>
  );
}

export default MessagesListItem;

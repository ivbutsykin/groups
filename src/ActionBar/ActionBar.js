import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogButton from './LogButton/LogButton';

function ActionBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogButton />
      </Toolbar>
    </AppBar>
  );
}

export default ActionBar;

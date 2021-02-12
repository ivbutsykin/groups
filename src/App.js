import Container from '@material-ui/core/Container';
import GroupsList from './GroupsList/GroupsList';
import ActionBar from './ActionBar/ActionBar';
import Group from './Group/Group';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import CreateGroupButton from './ActionBar/CreateGroupButton/CreateGroupButton';

function App() {
  return (
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route exact path="/">
              <ActionBar>
                {/*<CreateGroupButton/>*/}
              </ActionBar>
              <GroupsList/>
            </Route>
            <Route path={`/group/:id`}>
              <Group />
            </Route>
          </Switch>
        </Router>
      </Container>
  );
}

export default App;

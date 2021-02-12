import Container from '@material-ui/core/Container';
import GroupsList from './GroupsList/GroupsList';
import ActionBar from './ActionBar/ActionBar';
import Group from './Group/Group';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route exact path="/">
              <ActionBar visiableCreateGroupButton="true"/>
              <GroupsList/>
            </Route>
            <Route path={`/groups/:id`} component={Group}/>
          </Switch>
        </Router>
      </Container>
  );
}

export default App;

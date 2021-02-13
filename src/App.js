import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GroupsList from './GroupsList/GroupsList';
import ActionBar from './ActionBar/ActionBar';
import Group from './Group/Group';

import styles from './app.module.css';

function App() {
  return (
      <Router>
        <ActionBar />
        <Container
            maxWidth="sm"
            classes={{
              root: styles.root,
            }}
        >
          <Switch>
            <Route
                exact
                path="/"
                component={GroupsList}
            />
            <Route
                path={`/groups/:id`}
                component={Group}
            />
          </Switch>
        </Container>
      </Router>

  );
}

export default App;

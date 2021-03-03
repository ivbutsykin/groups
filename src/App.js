import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import ActionBar from './ActionBar/ActionBar';
import GroupsList from './GroupsList/GroupsList';
import Group from './Group/Group';
import SignInForm from './Authorization/SingInForm/SignInForm';
import SignUpForm from './Authorization/SignUpForm/SignUpForm';
import CreateGroup from './CreateGroup/CreateGroup';

import styles from './app.module.css';

function App() {
  return (
    <Router>
      <ActionBar/>
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
            path="/groups/:id"
            component={Group}
          />
          <Route path="/signin" component={SignInForm}/>
          <Route path="/signup" component={SignUpForm}/>
          <Route path="/new" component={CreateGroup}/>

        </Switch>
      </Container>
    </Router>
  );
}

export default App;

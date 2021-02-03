import Container from '@material-ui/core/Container';
import GroupsList from './GroupsList/GroupsList';
import ActionBar from './ActionBar/ActionBar';

function App() {
  return (
    <Container maxWidth="sm">
      <ActionBar />
      <GroupsList />
    </Container>
  );
}

export default App;

import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import ShowBalance from './components/ShowBalance';
import Tables from './components/Tables';
import GlobalProvider from './context/ContextProvider';

function App() {
  return (
    <Container fluid>
      <GlobalProvider>
        <Header />
        <ShowBalance />
        <Inputs />
        <Tables />
      </GlobalProvider>
    </Container>
  );
}

export default App;

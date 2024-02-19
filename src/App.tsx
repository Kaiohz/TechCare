import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel/MainPanel';

/**
 * 
 * @returns the main screen of app
 */

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col lg={2} className="sidebar-col">
         <Sidebar />  
        </Col>
        <Col className="panel-background" lg={10}>
          <MainPanel />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

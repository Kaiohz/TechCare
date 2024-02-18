import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
      <Row className="logo-container">
        <img src={require("./resources/img/c2ap.JPG")} className="logo"/>
      </Row>
      <Row>
        <Col lg={2} className="sidebar-col">
         <Sidebar />  
        </Col>
        <Col lg={10}> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;

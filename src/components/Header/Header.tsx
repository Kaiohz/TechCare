import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <img src={require("../../resources/img/c2ap.JPG")}               
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="tech Care logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>Tech - Care</Navbar.Brand>
        <Navbar.Text>Maintenance mécanique</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
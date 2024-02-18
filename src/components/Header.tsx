import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Tech - Care</Navbar.Brand>
        <Navbar.Text>Maintenance mécanique</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
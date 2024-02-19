import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  return (
    <>
      <br />
      <br />
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            Bibliothèque
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            Assistance SAV
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            Clients
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            Administration
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            Rapports
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
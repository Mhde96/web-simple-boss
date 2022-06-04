import { Container, Nav, Navbar } from "react-bootstrap";

export const HeaderWidget = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Boss</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link>Journals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

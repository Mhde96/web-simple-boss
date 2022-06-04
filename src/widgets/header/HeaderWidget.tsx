import { Container, Nav, Navbar } from "react-bootstrap";
import "./header-style.scss";
export const HeaderWidget = () => {
  return (
    <div id="header-style">
      <Navbar  expand="lg">
        <Container fluid>
          <Navbar.Brand>Boss Platform</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

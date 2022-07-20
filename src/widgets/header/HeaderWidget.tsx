import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./header-style.scss";
export const HeaderWidget = () => {
  return (
    <div id="header-style">
      <Navbar  expand="sm">
        <Container fluid>
          <Navbar.Brand >Boss Platform</Navbar.Brand>
          {/* <NavbarCollapse id="basic-navbar-nav">
            <nav className="ms-auto">
              <Nav.Link href="#mohamed almehdi">mmohamed almehdi</Nav.Link>
            </nav>
          </NavbarCollapse> */}
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">

              <a href="/#"  >mohamed Almehdi</a>
              <Image thumbnail style={{height:30, background:'none' , objectFit:'contain'}} src="assets/icons/icons8-user-24.png"/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

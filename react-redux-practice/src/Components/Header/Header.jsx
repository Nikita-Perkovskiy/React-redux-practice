import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link className="link" to={"/"}>
                Counter
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={"Block2"}>
                Form
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={"Block3"}>
                CV result
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

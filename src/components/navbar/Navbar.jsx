import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Navbar.css';

export const Navbar1 = () => {   
    return (
      <Navbar className="navbar" bg="light" expand="lg">
      <LinkContainer to="/">
<Navbar.Brand>IN A PICKLE</Navbar.Brand>
</LinkContainer>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
  <LinkContainer to="/Birds">
<Nav.Link>Our Birds</Nav.Link>
</LinkContainer>
<LinkContainer to="/Services">
<Nav.Link>Services</Nav.Link>
</LinkContainer>
<LinkContainer to="/Contact">
<Nav.Link>Contact</Nav.Link>
</LinkContainer>
</Nav>
</Navbar.Collapse>

<p className="hours">

  Monday: Closed |
  Tuesday: 11-6 |
  Wednesday: 11-6 |
  Thursday: Closed |
  Friday: 11-5 |
  Saturday: 11-5 |
  Sunday: 11-2

</p>
</Navbar>
    )
}

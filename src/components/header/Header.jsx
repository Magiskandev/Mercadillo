import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SignUpButton from './SignUpButton';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">MERCADILLO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Item1</Nav.Link>
                    <Nav.Link href="#pricing">Item2</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Otro Item</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Más Items
      </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <SignUpButton/>
        </Navbar>
    )
}

export default Header;
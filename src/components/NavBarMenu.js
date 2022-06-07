import React from "react";
import {Nav, Navbar,Container, NavLink} from 'react-bootstrap';

const NavBarMenu = () => {
    return (
        <div>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Strings</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <NavLink className="main-nav" href="/">Classic</NavLink>
                            <NavLink className="add-nav"href="/addstring">Add String</NavLink>
                        </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBarMenu;
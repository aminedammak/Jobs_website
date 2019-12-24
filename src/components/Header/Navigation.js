import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><h1><Link className="logo" to="/">JobsIT</Link></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="For candidates" id="basic-nav-dropdown">
                        <NavDropdown.Item as="span"><Link to="/jobs">Browse Jobs</Link></NavDropdown.Item>
                        <NavDropdown.Item as="span">Browse categories</NavDropdown.Item>
                        <NavDropdown.Item as="span">Browser companies</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="For employers" id="basic-nav-dropdown-2">
                        <NavDropdown.Item as="span"><Link to="/candidates">Browse candidates</Link></NavDropdown.Item>
                        <NavDropdown.Item as="span"><Link to="/post-a-job">Post a job</Link></NavDropdown.Item>
                        <NavDropdown.Item as="span">Employer dashboard</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <div className="logging-btn">
                    <Button variant="secondary" className="m-2">Sign Up</Button>
                    <Button variant="secondary" className="my-2">Log In</Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
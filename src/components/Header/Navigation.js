import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><h1>Jobs</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="For candidates" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/jobs">Browse Jobs</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Browse categories</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Browser companies</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="For employers" id="basic-nav-dropdown-2">
                        <NavDropdown.Item href="#action/3.1"><Link to="/candidates">Browse candidates</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Post a job</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Employer dashboard</NavDropdown.Item>
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
import React, {useState} from "react";
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div `
    a, navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

export function Navibar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
                    <Container>
                        <Navbar.Brand>WebDev Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                        <Navbar.Collapse id={"responsive-navbar-nav"}>
                            <Nav className="me-auto">
                                <Nav.Link href={"/"}>Home</Nav.Link>
                                <Nav.Link href={"/users"}>Users</Nav.Link>
                                <Nav.Link href={"/about"}>About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant={"primary"} className={"me-2"} onClick={handleShow}>Log In</Button>
                                <Button variant={"primary"} onClick={handleShow}>Sign Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>LOG IN Header-Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId={"fromBasicEmail"}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type={"email"} placeholder={"Enter Email"}/>
                            <Form.Text className={"text-muted"}> We'll never share your email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group controlId={"fromBasicPassword"}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={"password"} placeholder={"Enter Password"}/>
                        </Form.Group>
                        <Form.Group controlId={"fromBasicCheckbox"}>
                            <Form.Check type={"checkbox"} label={"Remember me"}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
        )
}
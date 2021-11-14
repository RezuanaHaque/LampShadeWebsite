import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const NavigAdmin = () => {
    const {
        admin,
        logOut,
        user } = UseAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container fluid>


                    <NavLink to='/' style={{
                        fontWeight: "bold",
                        color: "gray",
                        textDecoration: "none"
                    }}><Navbar.Brand className="fw-bolder fs-3" style={{ color: 'gray' }}>Lamp Shade</Navbar.Brand></NavLink>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            <NavLink className="m-2"
                                to="/manageproducts"
                                style={{
                                    fontWeight: "bold",
                                    color: "gray",
                                    textDecoration: "none"
                                }}>Manage products</NavLink>

                            <NavLink className="m-2"
                                to="/addproduct"
                                style={{
                                    fontWeight: "bold",
                                    color: "gray",
                                    textDecoration: "none"
                                }}
                            >Add Products</NavLink>
                            <NavLink className="m-2"
                                to="/makeadmin"
                                style={{
                                    fontWeight: "bold",
                                    color: "gray",
                                    textDecoration: "none"
                                }}>Make Admin</NavLink>
                            <NavLink className="m-2"
                                to="/manageorders"
                                style={{
                                    fontWeight: "bold",
                                    color: "gray",
                                    textDecoration: "none"
                                }}>Manage All Orders</NavLink>


                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="ms-5 pe-5"
                                    aria-label="Search"
                                />

                            </Form>
                        </Nav>
                        <Nav>
                            {user.email ?
                                <>
                                    {/* {console.log(user.email)} */}
                                    <Nav.Link
                                        to="/"
                                        className="m-2"
                                        style={{
                                            fontWeight: "bold",
                                            color: "gray",
                                            textDecoration: "none"
                                        }}>Hello, {user?.displayName}</Nav.Link>
                                    <Nav.Link className="m-2"
                                        to="/"
                                        style={{
                                            fontWeight: "bold",
                                            color: "gray",
                                            textDecoration: "none"
                                        }}
                                        onClick={logOut}>Log out</Nav.Link>
                                </>
                                :
                                <>
                                    <NavLink className="m-2"
                                        to="/register"
                                        style={{
                                            fontWeight: "bold",
                                            color: "gray",
                                            textDecoration: "none"
                                        }}>Register</NavLink>
                                    <NavLink className="m-2"
                                        to="/login"
                                        style={{
                                            fontWeight: "bold",
                                            color: "gray",
                                            textDecoration: "none"
                                        }}>Login</NavLink>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavigAdmin;
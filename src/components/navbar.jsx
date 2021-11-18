import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TechForBusiness from "../views/techForBiz";
import GoogleCloud from "../views/googleCloud";
import Home from '../views/home';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { HashLink } from "react-router-hash-link";
import ReactPillarPage from "../views/ReactPillarPage";
import CustomizeBootstrapReact from "../views/CustomizeBootstrapReact";

class NavBar extends React.Component {

    render() {
        return (
            <Router>
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand>
                        <Link className="navbar-brand ms-3 fs-4" to="/">QualDevLabs</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <NavDropdown className="fs-5" title="Blog" id="navbarScrollingDropdown" active menuVariant="dark" >
                            <NavDropdown.Item className="fs-5">
                                <Link to="/blog/react" className="text-white" style={{ textDecoration: 'none' }}>
                                    React
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <HashLink to="/#contact-form">
                        <Button className="text-white btn-success btn-lg">
                            Contact Us
                        </Button>
                    </HashLink>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/blog/react">
                        <ReactPillarPage/>
                    </Route>
                    <Route path="/blog/customize-bootstrap-react">
                        <CustomizeBootstrapReact/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
 
export default NavBar;
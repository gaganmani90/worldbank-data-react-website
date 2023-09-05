import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {CountryInfoTable} from "./components/CountryInfoTable";
import Home from "./pages/Home";
import IndicatorTable from "./components/IndicatorTable";
import TopicTable from "./components/TopicTable";

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Worldbank Data</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/country" className="nav-link">Country Info</Nav.Link>
                            <NavDropdown title="Definitions" id="indicators-dropdown">
                                <NavDropdown.Item as={Link} to="/definitions/indicators" className="nav-link">Indicator
                                    List</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/definitions/topics"
                                                  className="nav-link">Topics</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/country" element={<CountryInfoTable/>}/>
                    <Route path="/definitions/indicators" element={<IndicatorTable/>}/>
                    <Route path="/definitions/topics" element={<TopicTable/>}/>
                </Routes>
            </Container>
        </Router>
    );
}


export default App;

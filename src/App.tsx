import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { CountryInfoTable } from "./components/CountryInfoTable";
import Home from "./pages/Home";
import IndicatorTable from "./components/IndicatorTable";

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Worldbank Data</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/country" className="nav-link">Country Info</Nav.Link>
                            <Nav.Link as={Link} to="/indicators" className="nav-link">Indicators</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country" element={<CountryInfoTable />} />
                    <Route path="/indicators" element={<IndicatorTable />} />
                </Routes>
            </Container>
        </Router>
    );
}


export default App;

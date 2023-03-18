import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../Login/Auth';
import About from '../NavPages/About';
import Home from '../NavPages/Home'
import useToken from '../Login/useToken';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

  const { token, setToken } = useToken(); //simple token auth for now

  if(!token) {
    return <Auth setToken={setToken} />
  }

  return (
    <div className="wrapper">
      {/* <img src={require('./logo.png')} width={'30%'}/> */}
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="Home">Home</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                <Navbar.Collapse className="justify-content-end">
                 <button id="logout_button" onClick={logout_now}>
                Logout</button>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

function logout_now() {
  sessionStorage.clear();
  window.location.reload();
}

export default App;
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Auth from '../Login/Auth';
import Navbar from 'react-bootstrap/Navbar';
import AnimatedRoutes from './AnimatedRoutes';

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
      <Navbar className='nav-banner' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-text" href="Home">Home</Nav.Link>
              <Nav.Link  className="nav-text" href="About">About</Nav.Link>
              <Nav.Link  className="nav-text"  href="Reviews">Book Reviews</Nav.Link>
              <Nav.Link  className="nav-text"  href="Bookreviews">Recommendations</Nav.Link>
              <Navbar.Collapse className="justify-content-end">
                <button id="logout_button" onClick={logout_now}>
              Logout</button>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

function logout_now() {
  sessionStorage.clear();
  window.location.reload();
}

export default App;
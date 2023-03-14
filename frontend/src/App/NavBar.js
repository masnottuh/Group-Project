import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function RenderNav() {
  return (
    <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand href="#home">SWEtrainer.com</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="Home">Home</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                  {/* <Navbar.Text text-align={'right'}>
                    You are logged in
                  </Navbar.Text> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          );
        }
        
        export default RenderNav;
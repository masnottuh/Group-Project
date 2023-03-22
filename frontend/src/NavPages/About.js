import React from 'react';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const About = () =>{
  return (
    <div className="secondary">
      <div>
        <center>
        <img src={require("../images/bc_logo.png")} alt="Book Club Logo" width="500"/>
        <div>
        BookClub was founded by 4 graduates of Code Platoon's Full-Stack Engineering Program, {'\n'}
        BookClub aims to bring all of the charm and community of a local book club
        to readers around the world.
        <span> </span>
        </div>
        </center>
      </div>
<hr></hr>

<Row xs={1} md={2} className="g-4">
  <Col>
    <Card>
    <Card.Img variant="top" src={require("../images/3.jfif")}/>
      <Card.Body>
        <Card.Title>Lizuca</Card.Title>
        <Card.Text>
          <p>Favorite Book: Band of Brothers</p>
          <p>mike@example.com</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card>
    <Card.Img variant="top" src={require("../images/2.jfif")}/>
      <Card.Body>
        <Card.Title>Aaron</Card.Title>
        <Card.Text>
            <p>Favorite Book: The Catcher in the Rye</p>
            <p>aaron@example.com</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card>
    <Card.Img variant="top" src={require("../images/2.jfif")}/>
      <Card.Body>
        <Card.Title>Robert "Sam"</Card.Title>
        <Card.Text>
        <p>Favorite Book: The Dictionary</p>
          <p>john@example.com</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card>
    <Card.Img variant="top" src={require("../images/3.jfif")}/>
      <Card.Body>
        <Card.Title>Sam Zilli</Card.Title>
        <Card.Text>
        <p>Favorite Book: Thinking Fast and Slow</p>
          <p>sam@email.com</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
<hr></hr>
</div>
  );
}
export default About;






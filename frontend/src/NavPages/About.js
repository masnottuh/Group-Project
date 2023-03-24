import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";


const About = () =>{
  return (
    <motion.main
   className="main__container"
   initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{duration: 1.3,ease: [0.6, -0.05, 0.01, 0.99]}}>
    <div className="secondary">
      <div>
           <img className="rounded mx-auto d-block" src={require("../images/bc_logo.png")} alt="Book Club Logo" width="500"/>
        <div>
        BookClub was founded by 4 graduates of Code Platoon's Full-Stack Engineering Program, {'\n'}
        BookClub aims to bring all of the charm and community of a local book club
        to readers around the world.
        <span> </span>
        </div>
        <center/>
      </div>
<hr></hr>

<Row xs={1} md={2} className="g-4">
  <Col>
    <Card style={{backgroundColor:'beige'}}>
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
    <Card style={{backgroundColor:'beige'}}>
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
  <Card style={{backgroundColor:'beige'}}>
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
  <Card style={{backgroundColor:'beige'}}>
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
</motion.main>
  );
}
export default About;

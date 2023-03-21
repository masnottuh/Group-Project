import React from 'react';

const About = () =>{
  return (
    <div className="centered">
      <h3>About Book Club</h3>
      <div>
        <img src={require("../images/bc_logo.png")} alt="Book Club Logo" width="500"/>
        <div>
        BookClub was founded by 4 graduates of Code Platoon's Full-Stack Engineering Program, {'\n'}
        BookClub aims to bring all of the charm and community of a local book club
        to readers around the world.
        <span> </span>
        </div>

        <div class="about-section">

  </div>
  <h2>Our Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="/w3images/team1.jpg" alt="Jane" />
        <div class="container">
          <h2>Jane Doe</h2>
          <p>Favorite Book: The Catcher in the Rye</p>
          <p>jane@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="/w3images/team2.jpg" alt="Mike"/>
        <div class="container">
          <h2>Human Being</h2>
          <p>Favorite Book: Band of Brothers</p>
          <p>mike@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="/w3images/team3.jpg" alt="John"/>
        <div class="container">
          <h2>John Doe</h2>
          <p>Favorite Book: The Dictionary</p>
          <p>john@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="/w3images/team3.jpg" alt="John"/>
        <div class="container">
          <h2>Sam Zilli</h2>
          <p>Favorite Book: Thinking Fast and Slow</p>
          <p>sam@email.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>

      </div>
    </div>
  );
}
export default About;






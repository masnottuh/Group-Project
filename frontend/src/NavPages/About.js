import React from 'react';

const About = () =>{
  return (
    <div className="centered">
      <h3>About Book Club</h3>
      <div>
        Book Club
        <img src={require("../images/bc_logo.png")} alt="Book Club Logo" width='100%'/>
        <div>
        Founded by 4 graduates of Code Platoon's Full-Stack Engineering Program, {'\n'}
        BookClub aims to bring all of the charm and community of a local book club
        to readers around the world.
        </div>
      </div>
    </div>
  );
}
export default About;
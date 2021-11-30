import React from 'react';
import './About.css'
const About = () => {
    return (
      <>
        <div className="container">
          <div className="row">
             <div className="col-md-12 py-5">
               <h1>Educational Qualification</h1>
             </div>
          </div>
        </div>
        <div class="timeline">
        <div class="containerr left">
          <div class="content">
            <h2>About Me</h2>
            <img src="https://i.ibb.co/QMNfvXc/hakkanfgi-4.jpg" alt="" srcset="" className="img-fluid" width="30%" />
          </div>
        </div>
        <div class="containerr right">
          <div class="content">
            <h2>SSC</h2>
            <p>Jamira High School</p>
            <p>Group : Science</p>
            <p>Grade : 5.00</p>
          </div>
        </div>
        <div class="containerr left">
          <div class="content">
            <h2>HSC</h2>
            <p>Rajshshi University School and Collage</p>
            <p>Group : Science</p>
            <p>Grade : 5.00</p>
          </div>
        </div>
        <div class="containerr right">
          <div class="content">
            <h2>University </h2>
            <p>Pabna University of Science and Technology</p>
            <p>Computer Science And Technology</p>
            <p>Cgpa : 3.00</p>
          </div>
        </div>
        <div class="containerr left">
          <div class="content">
            <h2>Web Development Traning</h2>
            <p>Web Development with React: <b>Programming-Hero</b></p>
            <p>Web Development with wordpress:<b> Softech-it</b></p>
            <p>Search Engin Optimization: <b>It-bari</b></p>
          </div>
        </div>
    
      </div>
      </>
    );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-none">
  <div className="container">
    <Link to="/home" className="navbar-brand" href="#">MimHakkani</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav " style={{textAlign:'center' }}>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href=" ">Home</a> */}
          <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
          
        </li>
        <li className="nav-item">
          <Link to="/aboutme" className="nav-link active" aria-current="page">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link active" aria-current="page" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className="nav-link active" aria-current="page" >Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" aria-current="page">Contact Me</Link>
        </li>
        <li className="nav-item">
         <a 
         style={{
           color:'grey',
           textDecoration:'none',
           display:'block',
           marginTop:'8px'
          
          }}
         href="https://drive.google.com/file/d/1GrKG1DKOhJypHanzWB4ygh4J2TLUdQ4i/view?usp=sharing">My Resume</a>
        </li>
       
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
import React from "react"
import { Link } from "gatsby"
import "./header.scss"
import logo from '../imgs/favicon.png'

const Header = () => {
  // fill header content here
    return (
    <header> 
    <img
        src={logo}
        alt="logo of the Amrit Masonic School with the OM simple"
      />
      <h1>
      <Link to="/">
      Amrit Masonic School
      </Link>
      </h1>

      <nav>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          <a href="#"> Rehabilitation Services</a>
          <div className="dropdown-content">
            <Link to="/rehab-services/specialEducation">Special Education</Link>
            <Link to="/rehab-services/early">Early Intervention</Link>
            <Link to="/rehab-services/occupational">Occupational Therapy</Link>
            <Link to="/rehab-services/speech">Speech & Language Pathology</Link>
            <Link to="/rehab-services/prevocational">Pre-Vocational Training</Link>
            <Link to="/rehab-services/nios">NIOS</Link>
          </div>
        </div>

        <a href="#">Parental Assistance</a>
        <div className="dropdown">
          <a href="#">Collaborations</a>
          <div className="dropdown-content">
          <Link to="/collaborations/amar-jyoti">Amar Jyoti</Link>
          </div>
          
        </div>
        

        <a href="#">Admissions</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  )
}

export default Header

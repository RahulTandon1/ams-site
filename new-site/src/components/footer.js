import React from "react"
import './footer.scss'

const Footer = () => {
    return(<footer>
        <div className="info-column">
          <h2>Contact Us</h2>
          amritmasonicschool [at] gmail [dot] com <br />
          <a href="tel:+919811502685">9811502685</a>
          <a href="tel:+919811081208">9811081208</a>
          <div>
            <a to="https://www.facebook.com/AmritMasonicSchool/" target="_blank"
              ><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/919811502685" target="_blank"
              ><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="info-column">
          <h2>Timings</h2>
          Open today<br />
          09:00 am – 12:00 pm<br />
          School Timings <br />
          <hr />
          Open from 9 AM to 2 PM, Monday to Friday. <br />
          9 AM to 12 PM on Saturday <br />
          Day Boarding from 2 PM to 6 PM, Monday to Friday
        </div>
        <div className="info-column" id="map-div">
          <h2>Map</h2>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdGi2K4nMplDgSO4CI_FCupROV1LAyR-Q
      &q=Sai+Amrit+Masonic+School"
            allowfullscreen
          >
          </iframe>
        </div>
      </footer>)
}


export default Footer
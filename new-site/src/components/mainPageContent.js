import React from "react"
import './mainPageContent.scss'
import christmasPic from '../imgs/christmas.jpg'


const MainPageContent = () => {
    return (
        <React.Fragment>
        <section id="img-banner">
        <img
          src={christmasPic}
          alt="all the students and teachers of the Amrti Masonic School standing together on Christmas day."
        />
      </section>
      <section id="tagline">
        <h2>Welcome to AMS!</h2>
        <h2>
          A school for the specially abled <br />where we believe that every child
          can learn
        </h2>
      </section>
      <section id="mission">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin risus et condimentum tristique. Maecenas consectetur est
          sapien, et blandit ex lacinia sit amet. Mauris vel semper eros, id
          aliquet urna. Cras eget sem id felis rutrum euismod. Fusce eget urna et
          nibh vestibulum tincidunt. Vestibulum pretium finibus hendrerit.
          Phasellus ut malesuada lacus.
        </p>
        <button id="contribute">Contribute</button>
      </section>
      </React.Fragment>
    )
}

export default MainPageContent
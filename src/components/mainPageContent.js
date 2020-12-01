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
        <h2>Our Mission & Work</h2>
        <p>
        We work with the differently-abled students with a motto: “Every Child Can Learn.”
        A set up for 62 students, we provide various rehabilitation services to the students and coalesce with local government hospitals to
        provide the required medical interventions. We also promote inclusion among mainstream
        schools by conducting training sessions for their teachers and in-house remedial sessions.
        </p>
        <button id="contribute">Contribute</button>
      </section>
      </React.Fragment>
    )
}

export default MainPageContent
import React from "react"
import './specialEd.scss'

const nios = () => {
    return(
        <React.Fragment>
            <div id="page-title-div">
                <h1 className="page-title">National Institute of Open Schooling</h1>
                <hr id="title-underline" />
            </div>

            <div className="stuff">
                <div className="stuff-content">
                    <p>
                    <strong>Educable Students</strong> of age 7 and above are enrolled in the open school 
                    system under NIOS (National Institute of Open Schooling). This offers them a structured 
                    curriculum as well as a chance to finish schooling with certifications, which opens up many 
                    employment avenues for the students through several government departments like the Ministry 
                    of Skills Development
                    </p>
                </div>
            </div>

            <div className="stuff">
                <div className="stuff-content">
                    <p>
                    Our aim is complete NIOS curriculum coverage with adaptions like
                        <ol>
                            <li>Chapter Synopsis with simplified answers</li>
                            <li>Individualized, adapted and modified worksheets</li>
                            <li>Periodic tests</li>

                        </ol>
                    </p>
                </div>
            </div>
            <div className="stuff">
                <div className="stuff-content">
                        <p>
                        The students are offered various NIOS exam relaxations like extra time and use of scribe.<br/><br/>
                        In the last 7 years we have had several successful batches of OBE – III, V and VIII and 
                        NIOS X passing out in the first attempt.  <br/><br/>
                        We also run an <strong>online NIOS </strong>program for <strong>outside students</strong>, who may be school dropouts 
                        or students of mainstream schools following a parallel NIOS curriculum. <br />
                        </p>
                </div>
            </div>
                

        </React.Fragment>
    )
}


export default nios
import React from "react"
import './specialEd.scss'

const earlyContent = () => {
    return(
        <React.Fragment>
        <div id="page-title-div">
            <h1 className="page-title">Early Intervention</h1>
            <hr id="title-underline" />
        </div>
  
        <div className="stuff">
            <div className="stuff-content">
                <p>
                Early Intervention is based on the principle that remediation therapies should 
                be started as early as possible to minimize the effect of developmental delays 
                and disabilities, both in the motor and cognitive areas. 
                </p>
            </div>
        </div>
        <div className="stuff">
            <div className="stuff-content">
                
                <p>
                We offer Early Intervention services to all students between 0 to 6 years of age. 
                Early intervention focuses on skills in 5 areas. 
                </p>
            </div>
            <div className="stuff-content">
                <ol>
                <li>Physical skills – reaching, crawling, walking, drawing</li>
                <li>Cognitive skills – pre-reading, pre-writing, comprehending</li>
                <li>Communication skills – talking, listening, comprehending</li>
                <li>Self help and adaptive skills – eating, bathing, playing</li>
                <li>Social skills – greeting others, turn taking, following commands</li>
                </ol>
            </div>
            <div className="stuff-content">
                <p>
                Early intervention students are given intensive Occupational Therapy, 
                Physiotherapy, Speech Therapy and Special Education. <br/><br/>
                The parents are also given intensive and regular training for these exercises, 
                so that they can be replicated at home and the effect can be optimized. Our staff 
                regularly visits the homes of students to optimally modify the home environment and guide the family members. 
                </p>
            </div>
            <hr class="stuff-divider" />
        </div>
      </React.Fragment>
    )
}

export default earlyContent
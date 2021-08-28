import React from 'react';
import Page from '../newPage/newPage';
import './style.scss';


export default function() {
    return(
        <Page>
            <div id="page-title-div">
                <h1 className="page-title">Early Intervention</h1>
                <hr id="title-underline" />
            </div>
        
            <div className="stuff">
            <div className="stuff-content">
                <p>
                <strong>Early Intervention</strong> is based on the principle that remediation therapies should
                be started as early as possible to minimize the effect of developmental delays and
                disabilities, both in the motor and cognitive areas.
                </p>
            </div>
            <div className="stuff-content">
                <p>
                We offer Early Intervention services to all students between 0 to 6 years of age.
                Early intervention focuses on skills in 5 areas.
                </p>
            </div>
            <div className="stuff-content">
                <p>
                <ol>
                <li><strong>Physical skills</strong> – reaching, crawling, walking, drawing</li>
                <li><strong>Cognitive skills</strong> – pre-reading, pre-writing, comprehending</li>
                <li><strong>Communication skills</strong> – talking, listening, comprehending</li>
                <li><strong>Self help and adaptive skills</strong> – eating, bathing, playing</li>
                <li><strong>Social skills</strong> – greeting others, turn taking, following commands</li>
                </ol>
                </p>
        </div>
        <div className="stuff-content">
            <p>
            Early intervention students are given intensive <strong>Occupational Therapy,
            Physiotherapy, Speech Therapy and Special Education. </strong>
            </p>
        </div>
        <div className="stuff-content">    
            <p>
            The parents are also given intensive and regular training for these exercises, so
            that they can be replicated at home and the effect can be optimized. Our staff
            regularly visits the homes of students to optimally modify the home environment
            and guide the family members.
            </p>
        </div>
                    
        </div>
        </Page>
    )
}
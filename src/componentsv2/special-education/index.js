import React from 'react';
import Page from '../newPage/newPage';
import './style.scss';


export default function() {
    return(
        <Page>
            <div id="page-title-div">
                <h1 className="page-title">Special Education</h1>
                <hr id="title-underline" />
            </div>
        
            <div className="stuff">
            <div className="stuff-content">
                <p>
                <strong>Special education means educating every student with a customized curriculum that
addresses their individual differences and challenges.</strong> It involves individually planned
and systematically monitored arrangement of teaching procedures, exercise routines,
accessible settings and adapted materials.
                </p>
            </div>
            <div className="stuff-content">
                <p>
                These <strong>I</strong>ndividual <strong>E</strong>ducation <strong>E</strong>lans <strong>(IEP)</strong> are designed for students who have physical,
cognitive, language, learning, sensory and emotional challenges.
The objectives of the special education department are:-
                </p>
            </div>
            <div className="stuff-content">
                <p>
                <ol>
                <li>Optimizing the academic potential of all students</li>
                <li>Helping students adapt to their environment and become as self-dependent as
possible.</li>
                <li>Fostering self-advocacy in students</li>
                <li>Guiding parents about the various government schemes applicable to their
children</li>
                </ol>
                </p>
        </div>
        <div className="stuff-content">
            <p>
            <strong>Educable students of 0 – 6 years of age are admitted to the Early
Intervention.</strong> section. This section focusses on getting the students mentally and
physically ready for the remediations needed by them. This is achieved by fostering
imitation skills, pre-reading skills, pre-writing skills, pre-language skills, improving
receptive and expressive vocabulary and self- help skills. Regular parent interaction
sessions are held to update the parents on the teaching methodologies being followed,
so the same can be reinforced at home. The preferred outcome is to make the students
ready for the next step.
            </p>
        </div>
        <div className="stuff-content">    
            <p>
            <strong>Educable Students of ages 7 and above</strong>are enrolled in the open school system
under <strong>NIOS (National Institute of Open Schooling).</strong>
            </p>
        </div>
        <div className="stuff-content">    
            <p>
            <strong>For Trainable students</strong> also IEP’s are formulated, but with functional goals. These
goals are oriented towards empowering the students to identify and regulate their
challenges themselves, become as self-dependent as possible, and become productively
contributing members of society.    
            </p>
        </div>      


        


        </div>
        </Page>
    )
}
import React from 'react';
import Page from '../../newPage/newPage';
import './style.scss';


export default function() {
    return(
        <Page>
            <div id="page-title-div">
                <h1 className="page-title">Study Center</h1>
                <hr id="title-underline" />
            </div>
        
            <div className="stuff">
            <div className="stuff-content">
                <p><strong>AMSS is an NIOS Accredited Agency (Study Centre) for the OBE program. In addition to being
an NIOS examination centre, we also enroll students in our OBE section for online/offline
classes.</strong>
                </p>
            </div>
            <div class="stuff-content">
            As an Accredited Agency of NIOS, we are responsible for
                <ul>
                    <li>Choosing the study material</li>
                    <li>Conducting formative and summative assessments</li>
                    <li>Evaluating exams and declaring results</li>
                    <li>Disbursing the completion certificates</li>
                    <li>Liaising with NIOS Regional Centre</li>
                </ul>
            </div>
            <div className="stuff-content">
                <p><strong><u>Our view of the curriculum:</u></strong></p><br/><br/>
                <ul>
                <li>OBE level A curriculum is primarily selected to impart pre-academic skills.</li>
                <li>OBE level B curriculum helps build the students’ self-confidence.</li>
                <li>OBE level C curriculum prepares the students for NIOS Secondary and Senior Secondary
levels.
</li>
                </ul>
            </div>
           
        


        </div>
        </Page>
    )
}
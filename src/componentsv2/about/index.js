

import React from 'react';
import Page from '../newPage/newPage';
import './style.scss';


const AboutPage = () => {
    return(
        <Page>
        <div id="page-title-div">
        <h1 className="page-title">About Us</h1>
        <hr id="title-underline" />
        </div>
        
        <div className="stuff">
        <div className="stuff-content">
            <p>
            Amrit Masonic School is a school cum rehabilitation center for children with 
            additional needs. It is run by the Amrit Masonic Spastic Society, which is a 
            part of the Freemasons Society. The school was incorporated in the year 2000 
            and is registered under the Societies Act. We currently have 62 students on our rolls.  
            </p>
        </div>
        <div className="stuff-content">
        
            <p>
            The school was conceptualized by a parent, Mr. Chhabra, as a comprehensive rehabilitation 
            center for his son. We have thence been staffed mostly by parent professionals.
            </p>
        </div>
        <div className="stuff-content">
            <p>
            The school is centrally located in Sector 29, Noida, behind the famous Brahmaputra Market 
            and walking distance from the Botanical Garden metro station. We offer transport services 
            in and around Noida. 
            </p>
        </div>
        <div className="stuff-content">
            <p>
            The school collaborates with government and private hospitals and other nodal 
            rehabilitation agencies in and around Noida. We have aided several mainstream schools 
            on the path to inclusion by conducting training sessions for their teachers and special 
            education sessions for their students within school timings and on the school campus itself
            </p>
        </div>
        <div className="stuff-content">    
            <p>
            In addition to Special Education, the other services offered at the school are:
            </p>
        </div>
        <div className="stuff-content">
            <ul>
                <li>Early Intervention services</li>
                <li>Family Counselling </li>
                <li>Medical Counselling and facilitation</li>
                <li>Occupational Therapy </li>
                <li>Physiotherapy</li>
                <li>Speech and Communication Therapy</li>
                <li>Behavior Modification and ABA</li>
                <li>Pre-vocational and vocational training </li>
                <li>Certifications through Open Schooling </li>
                <li>Sheltered Workshops</li>
                <li>Parent Workshops</li>
            </ul>
        <div/>
            
        </div>
        </div>
        </Page>        
        
        )
}

export default AboutPage;

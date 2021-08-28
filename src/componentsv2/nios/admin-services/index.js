import React from 'react';
import Page from '../../newPage/newPage';
import './style.scss';


export default function() {
    return(
        <Page>
            <div id="page-title-div">
                <h1 className="page-title">Administrative Services</h1>
                <hr id="title-underline" />
            </div>
        
            <div className="stuff">
            <div className="stuff-content">
                <p>
                <ul>
                    <li>Fill in the online NIOS admission forms for new students of all NIOS programs</li>
                    <li>Handholding in
                        <ul className="nested-list">
                            <li>Subject selection</li>
                            <li>Exam spacing</li>
                        </ul>
                    </li>
                    <li>Liaising with NIOS Regional Centre for Exam relaxations</li>
                    <li>Coordinating with other study centres for
                        <ul className="nested-list">
                            <li>Contact classes</li>
                            <li>Practical Exam Dates</li>
                            <li>Theory and Practical exams</li>
                        </ul>
                    </li>
                    <li>Reminders for
                    <ul className="nested-list">
                            <li>TMA and project submission</li>
                            <li>Exam fees</li>
                            <li>Hall ticket</li>
                        </ul>
                    </li>
                </ul>
                </p>
            </div>
           
        


        </div>
        </Page>
    )
}
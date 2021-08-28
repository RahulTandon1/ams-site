import React from 'react';
import Page from '../../newPage/newPage';
import './style.scss';


export default function() {
    return(
        <Page>
            <div id="page-title-div">
                <h1 className="page-title">Academic Services</h1>
                <hr id="title-underline" />
            </div>
        
            <div className="stuff">
            <div className="stuff-content">
                <p>
                <ul>
                    <li>Group and/or individual online classes</li>
                    <li>Complete curriculum coverage</li>
                    <li>Chapter Synopsis and simplified answers</li>
                    <li>Strategies for exam preparation</li>
                    <li>Individualized, adapted and modified worksheets</li>
                    <li>Question Bank</li>
                    <li>Training scribes</li>
                    <li>Periodic Mock Tests</li>
                    
                </ul>
                </p>
            </div>
           
        


        </div>
        </Page>
    )
}
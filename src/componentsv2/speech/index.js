import React from 'react';
import Page from '../newPage/newPage';
import './style.scss';


export default function() {
    return(
        <Page>
            <div id="page-title-div">
                <h1 className="page-title">Speech  & Language Pathology</h1>
                <hr id="title-underline" />
            </div>
        
            <div className="stuff">
            <div className="stuff-content">
                <p>
                Development delays can be associated with speech-sound delay,
misarticulations, language delay or dysarthria.
Our speech and language pathologist helps students overcome their speech,
language and communication challenges. We use several methodologies to
help the students plan, coordinate and produce sound.
In the early intervention section, the emphasis is on creating the right
environment for speech stimulation, increasing the receptive language
vocabulary and encouraging the correct sound productions.
                </p>
            </div>
            <div className="stuff-content">
                <p>
                For older students with motor-speech and motor-planning difficulties, a
holistic approach is followed. Along with the physical aspects of speech
production, factors like cognitive levels and social environment are kept in
mind. A multisensory approach using tactile, kinaesthetic, visual and verbal
cues are used to work on their misarticulations, syntactic, semantic and
pragmatic language.
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
            Some of the modalities used are oromotor exercises, PROMPT therapy, Audio
Verbal Therapy, Voice Therapy, Language Therapy, Articulation Therapy,
Swallowing and Feeding therapy.
            </p>
        </div>
        


        </div>
        </Page>
    )
}
import React from "react"
import './specialEd.scss'

const prevocational = () => {
    return(
        <React.Fragment>
            <div id="page-title-div">
                <h1 className="page-title">Pre Vocational Training</h1>
                <hr id="title-underline" />
            </div>

            <div className="stuff">
                <div className="stuff-content">
                <p>
                The personal and interpersonal skills needed by special needs adults before 
                starting any vocation are called prevocational skills. Personal skills include 
                self-discipline, time management, personal hygiene, problem solving abilities, 
                self advocacy and personal safety
                </p>
                </div>

                <div className="stuff-content">
                    <p>
                    Self discipline skills such as integrity, honesty and responsibility <br/>
                    Time management skills teach the importance of being punctual, making schedules and not wasting time. <br />
                    Interpersonal skills include social skills and employment etiquette. <br />
                    </p>
                </div>
                <div className="stuff-content">
                <p>
                    Adults who have socially focused disorders such as autism need pre-vocational 
                    training in navigating through anxiety, anger, interacting with coworkers, being 
                    courteous to supervisors and polite to customers.
                </p>
                </div>
                
            </div>
        </React.Fragment>
    )
}


export default prevocational
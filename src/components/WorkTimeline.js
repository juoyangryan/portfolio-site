import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function WorkTimeline(props) {
    return(
        <Timeline lineColor={'#ddd'}>
        <TimelineItem
            key="001"
            dateText="05/2021 – 08/2021"
            style={{ color: '#61b8ff' }}
            dateInnerStyle={{ background: '#61b8ff', color: '#FFF' }}
        >
            <div className='curr-education'>
                <h3>Viasat Inc.</h3>
                <h4 className="timeline-subtitle">Software and Data Engineer Intern</h4>
                <p></p>
                <p>
                    <strong>Location: </strong>Carlsbad, California
                </p>
                <ul>
                    <li>Implemented a JupyterLab Extension with <strong>React</strong> and <strong>Typescript</strong> that aggregates company datasets, models, and features, makes the data filterable based on a multitude of metrics, and integrates into the Machine Learning workflow.</li>
                    <li>Completed backend integration with <strong>RESTful APIs</strong> and <strong>PostgreSQL</strong> in the model-view-adapter pattern by creating loosely coupled components capable of accommodating other forms of backend.</li>
                    <li>Benchedmarked the <strong>Elyra</strong> ML pipeline-interface by leveraging <strong>docker containers</strong>, setting up <strong>Kubernetes clusters</strong>, and presenting the pros and cons to potential users within the company (data scientists).</li>
                </ul>
            </div>
        </TimelineItem>
        <TimelineItem
            key="002"
            dateText="05/2020 – 08/2022"
            style={{ color: '#6b889d' }}
            dateInnerStyle={{ background: '#6b889d', color: '#FFF' }}
        >
            <h3>WeGrains Co.</h3>
                <h4 className="timeline-subtitle">Full Stack Software Engineer Intern</h4>
                <p></p>
                <p>
                    <strong>Location: </strong>Taipei, Taiwan
                </p>
                <ul>
                    <li>Developed a progressive web app for car parking systems that allows users to operate gates via their mobile device, saving approximately two hours a week in commuting time.</li>
                    <li>Created front-end with <strong>React</strong> by utilizing <strong>Redux</strong>, the <strong>Google Maps API</strong>, and <strong>Axios</strong> to allow users to navigate easily by searching with an address or adding filters to show the desired information.</li>
                    <li>Implemented back-end with Node.js to process user, parking lot, and manager data with processes such as authentication, filtering, and checking for validity of actions.</li>
                    <li>Designed and set up a <strong>MySQL</strong> database to store user and parking lot data by structuring through an extensive <strong>ER diagram</strong> and deployed on <strong>Heroku ClearDB</strong>.</li>
                </ul>
        </TimelineItem>
        </Timeline>
    )
}

export default WorkTimeline;
import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function TimelineComponent(props) {
    return(
        <Timeline lineColor={'#ddd'}>
        <TimelineItem
            key="001"
            dateText="08/2020 – Present"
            style={{ color: '#61b8ff' }}
            dateInnerStyle={{ background: '#61b8ff', color: '#FFF' }}
        >
            <div className='curr-education'>
                <h3>Georgia Institute of Technology</h3>
                <h4 className="timeline-subtitle">BS, Computer Science</h4>
                <p></p>
                <p>
                    <strong>Threads:</strong> Intelligence, Info Internetworks
                </p>
                <p>
                    <strong>Expected Graduation:</strong> December 2021
                </p>
                <p><strong>Awards:</strong></p>
                <ul>
                    <li>Faculty Honors: Fall '19, Spring '20</li>
                    <li>Dean's List: Fall '18, Spring '19</li>
                </ul>
                <p><strong>Invovlements:</strong></p>
                <ul>
                    <li>GT Programming Team</li>
                    <li>GT Tekstyles Officer</li>
                    <li>GT Seoulstice member</li>
                </ul>
            </div>
        </TimelineItem>
        <TimelineItem
            key="002"
            dateText="04/2009 – 11/2010"
            style={{ color: '#6b889d' }}
            dateInnerStyle={{ background: '#6b889d', color: '#FFF' }}>
            <h3>Ivy Collegiate Academy</h3>
            <h4 className="timeline-subtitle">High School</h4>
            <p></p>
            <p>
                <strong>Duration:</strong> 2012 - 2018
            </p>
            <p><strong>Awards:</strong></p>
            <ul>
                <li>Valedictorian</li>
                <li>Graduated with High Honors</li>
            </ul>
            <p><strong>Invovlements:</strong></p>
            <ul>
                <li>National Honor Society</li>
                <li>Breakdancing club leader</li>
                <li>Speech & Debate Competitor</li>
            </ul>
        </TimelineItem>
        </Timeline>
    )
}

export default TimelineComponent;
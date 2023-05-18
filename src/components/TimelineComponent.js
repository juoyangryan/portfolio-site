import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function TimelineComponent(props) {
    return(
        <Timeline lineColor={'#ddd'}>
        <TimelineItem
            key="002"
            dateText="08/2022 – Present"
            style={{ color: '#61b8ff' }}
            dateInnerStyle={{ background: '#61b8ff', color: '#FFF' }}
        >
            <div className='curr-education'>
                <h3>Georgia Institute of Technology</h3>
                <h4 className="timeline-subtitle">MS, Computer Science</h4>
                <p></p>
                <p>
                    <strong>Concentration:</strong> Computer Graphics
                </p>
                <p>
                    <strong>Expected Graduation:</strong> December 2023
                </p>
                <p><strong>Awards:</strong></p>
                <ul>
                    <li>Faculty Honors: Fall '22</li>
                </ul>
                <p><strong>Invovlements:</strong></p>
                <ul>
                    <li>GT Programming Team</li>
                    <li>GT Tekstyles Officer</li>
                    <li>GT Seoulstice President</li>
                </ul>
            </div>
        </TimelineItem>
        <TimelineItem
            key="003"
            dateText="08/2020 – 05/2022"
            style={{ color: '#6b889d' }}
            dateInnerStyle={{ background: '#6b889d', color: '#FFF' }}
        >
            <h3>Georgia Institute of Technology</h3>
            <h4 className="timeline-subtitle">BS, Computer Science</h4>
            <p></p>
            <p>
                <strong>Threads:</strong> Intelligence, Info Internetworks
            </p>
            <p><strong>Awards:</strong></p>
            <ul>
                <li>Faculty Honors: Fall '19, Spring '20, Fall '20, Spring '21, Fall '21, Spring '22</li>
                <li>Dean's List: Fall '18, Spring '19</li>
            </ul>
            <p><strong>Invovlements:</strong></p>
            <ul>
                <li>GT Programming Team</li>
                <li>GT Tekstyles Officer</li>
                <li>GT Seoulstice President</li>
            </ul>
        </TimelineItem>
        <TimelineItem
            key="002"
            dateText="04/2009 – 11/2010"
            style={{ color: '#6b889d' }}
            dateInnerStyle={{ background: '#6b889d', color: '#FFF' }}>
            <h3>Ivy Collegiate Academy</h3>
            <h4 className="timeline-subtitle">High School</h4>
            <p></p>
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
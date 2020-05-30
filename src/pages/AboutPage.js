import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Timeline from '../components/TimelineComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import resume from '../assets/documents/resume.pdf';
import profile from '../assets/images/profile.jpg';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>
            
            <Content className="about-content">
                <Row>
                    <Col>
                        <img src={profile} alt={profile} className='profile' />
                    </Col>
                    <Col>
                        <p className="about-text">
                            Current technical experiences lie within front-end development, data analysis and processing, Arduino, and Raspberry Pi. Seeking opportunities to continue developing interests in Human-Computer Interaction, VR/AR, and learn more about Computer Science in general through an industry environment.
                        </p>
                    </Col>
                </Row>
            </Content>

            <p></p>
            <a href={resume} className='resume' target="_blank" rel="noopener noreferrer">Resume</a>

            <Content>
            <h1 className='display-4'>Education</h1>
            </Content>

            <Timeline />
        </div>
    );
}
export default AboutPage;
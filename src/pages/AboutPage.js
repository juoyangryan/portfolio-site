import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Timeline from '../components/TimelineComponent';
import WorkTimeline from '../components/WorkTimeline';

import resume from '../assets/documents/resume.pdf';
import profile from '../assets/images/profile.jpg';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>
            
            <Content className="about-content">
                <div className="about-intro">
                    <img src={profile} alt={profile} className='profile' />
                    <p className="about-text">
                    Hello there! Welcome to my portfolio website. I'm a software developer with a Masters degree in CS from Georgia Tech. My main experiences lie in frontend, backend, web development, and databases. I'm passionate about creating interactive, engaging solutions to problems. Let's connect and discuss how I can bring value to your team!
                    </p>
                </div>
            </Content>

            <p></p>
            <a href={resume} className='resume' target="_blank" rel="noopener noreferrer">View Resume</a>

            <Content>
            <h1 className='display-4'>Experience</h1>
            </Content>

            <WorkTimeline />

            <Content>
            <h1 className='display-4'>Education</h1>
            </Content>

            <Timeline />
        </div>
    );
}
export default AboutPage;
import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <p>
                    Current technical experiences lie within front-end development, data analysis and processing, Arduino, and Raspberry Pi. Seeking opportunities to continue developing interests in Human-Computer Interaction, VR/AR, and learn more about Computer Science in general through an industry environment.
                </p>
            </Content>
        </div>
    );
}
export default AboutPage;
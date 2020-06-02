import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Col>
                    <Divider light={false} variant='full width'/>
                    <Row>
                        <div className='footer-icons'>
                            <IconButton href='https://github.com/juoyangryan' target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </IconButton>
                            <p className="d-inline-block divider"> | </p>
                            <IconButton href='https://www.linkedin.com/in/juo-yang-chen-751398192/' target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </IconButton>
                            <p className="d-inline-block divider"> | </p>
                            <IconButton href='https://www.facebook.com/ryan.chen.9440234' target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </IconButton>
                        </div>
                    </Row>
                    <Row>
                        <div className="footer-content">
                            <EmailIcon />: juoyangryan@gmail.com
                            <p className="d-inline-block divider"> | </p>
                            <PhoneIcon />: +1 (848) 218-8433
                            <p className="d-inline-block divider"> | </p>
                            Made with React
                        </div>
                    </Row>
                </Col>
            </Container>
        </footer>
    );
}
export default Footer;
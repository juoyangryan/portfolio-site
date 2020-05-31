import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Col>
                    <Row>
                        <div className='footer-icons'>
                            <IconButton href='https://github.com/juoyangryan' target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton href='https://www.linkedin.com/in/juo-yang-chen-751398192/' target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                        </div>
                    </Row>
                    <Row>
                        <div className="footer-content">
                            Made With React
                        </div>
                    </Row>
                </Col>
            </Container>
        </footer>
    );
}
export default Footer;
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return(
        <Jumbotron className='bg-transparent p-0' fluid={true}>
            <Container className='jumbo' fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12} lg={8}>
                        { props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                        { props.subtitle && <div>
                            <h3 className='display-4 font-weight-light'>
                                <span>{props.subtitle}</span>
                                <div className="r-words">
                                    <span>Software Developer.</span>
                                    <span>Web Developer.</span>
                                    <span>Dancer.</span>
                                    <span>Beatboxer.</span>
                                </div>
                            </h3>
                        </div>}
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
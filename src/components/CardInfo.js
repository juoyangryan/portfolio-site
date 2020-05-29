import React from 'react'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSpring, animated } from 'react-spring';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="j-card-info" style={style}>
            <ExpansionPanel className="expand">
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Col>
                        <Row>
                            <p className="j-card-title">{props.title}</p>
                        </Row>
                        <Row>
                            <p className="j-card-subtitle">{props.subtitle}</p>
                        </Row>
                    </Col>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Col>
                        <Row>
                            <p> {props.details} </p>
                        </Row>
                        <Row>
                            { props.link && <a href={props.link} target="_blank" rel="noopener noreferrer">View</a> }
                        </Row>
                    </Col>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </animated.div>
    );
}

export default CardInfo;
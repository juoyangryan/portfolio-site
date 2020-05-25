import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import yamato from '../assets/images/yamato.jpg';
import hackgt from '../assets/images/hackgt.png';
import neuma from '../assets/images/neuma.jpg';
import Card from '../components/Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Otamahero Game',
                    subtitle: 'HackGT project 2019',
                    imgSrc: hackgt,
                    link: 'https://github.com/HackGT2019',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project Yamato',
                    subtitle: 'E-commerce Analysis Webapp',
                    imgSrc: yamato,
                    link: null,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Neuro-markers of Expertise',
                    subtitle: 'Psychology Research CS Team Leader',
                    imgSrc: neuma,
                    link: 'https://github.com/juoyangryan/neuma-script',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        })
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={e => this.handleCardClick(item.id, e)} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;

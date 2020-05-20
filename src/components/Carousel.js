import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import profile from '../assets/images/profile.jpg';
import Card from '../components/Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Title 1',
                    subtitle: 'subtitle 1',
                    imgSrc: profile,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Title 2',
                    subtitle: 'subtitle 2',
                    imgSrc: profile,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title 3',
                    subtitle: 'subtitle 3',
                    imgSrc: profile,
                    link: 'https://devgrub.com',
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

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';


class ContactsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        })

        Axios.post('https://elegant-pig-lab-coat.cyclic.app/send_email', this.state)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    })
                } else {
                    this.setState({
                        disabled: false, 
                        emailSent: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false, 
                    emailSent: false
                })
            })
        }

    render() {
        return(
            <div>
                <Hero title={this.props.title}/>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows={3} value={this.state.textarea} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Failed to Send</p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default ContactsPage;
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Juo-Yang Chen",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contacts", path: "/contact"}
      ],
      home: {
        title: "Hi, I'm Juo-Yang.",
        subtitle: "I am a",
        text: "Check out some of my projects."
      },
      about: {
        title: "About Me"
      },
      contacts: {
        title: "Contact Me"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Juo-Yang Chen</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={
            () => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>
          }/>

          <Route path="/about" render={
            () => <AboutPage title={this.state.about.title}/>
          }/>

          <Route path="/contact" render={
            () => <ContactsPage title={this.state.contacts.title}/>
          }/>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

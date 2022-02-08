import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ismael Torres',
      links: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Ismael Torres',
        subtitle: 'Web Developer',
        text: 'Checkout my projects',
      },
      about: {
        title: 'About me',
      },
      projects: {
        title: 'My projects',
      },
      contact: {
        title: 'Lets talk',
      },
    };
  }

  render() {
    return (
      <Router>
        <Container>
          <p>Hello</p>
          {/* <BrowserRouter>
            <Routes>
              <Route path='/'>Home</Route>
              <Route path='/about' element={Bio}>About</Route>
              <Route path='/projects'>Projetos</Route>
              <Route path='/contact' element={Contact}>Contato</Route>
            </Routes>
          </BrowserRouter> */}
        </Container>
      </Router>
    );
  }
}

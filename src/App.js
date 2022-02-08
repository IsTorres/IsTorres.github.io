import './styles/App.css';
// import Bio from './components/Bio';
// import Contact from './components/Contact';
// import Navigation from './components/Navigation';
// import Background from './components/Background';

// function App() {
//   return (
//     <div className="App">
//       <div className='content'>
//         <section className='App-header'>
//           <Bio />
//           <Contact />
//         </section>
//         <section className='App-header'>
//           <Navigation />
//         </section>
//       </div>
//       <Background />
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)
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
    }
  }
  render() {
    return <div></div>;
  }
}


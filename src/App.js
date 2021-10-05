import './styles/App.css';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <section className='App-header'>
          <Bio />
          <Contact />
        </section>
        <section className='App-header'>
          <Navigation />
        </section>
      </div>
      <Background />
    </div>
  );
}

export default App;

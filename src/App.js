import './App.css';
import Navbar from './Navbar';
import Intro from './components/Intro';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>My Portfolio</h1>
        <Navbar />
      </header>
      <main>
        <Intro />
      </main>
    </div>
  );
}

export default App;
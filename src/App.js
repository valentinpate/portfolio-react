import logo from './logo.svg';
import ned from './ned.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload hola hola.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <img src={ned} className="Ned" alt="Ned" />
      <img src={ned} className="Ned" alt="Ned" />
      <p>
          Soooo voooo locoooo
        </p>
    </div>
  );
}

export default App;

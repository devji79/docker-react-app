import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Travis CI
        </a>
        <p>Live updates work on Windows when updating scripts within <strong>package.json</strong> to contain <blockquote>"start": "WATCHPACK_POLLING=true react-scripts start"</blockquote></p>
      </header>
    </div>
  );
}

export default App;

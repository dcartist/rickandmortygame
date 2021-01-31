import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home"
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Gladiators from "./Component/Gladiator/Gladiator"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header>
       */}
    <Route path="/" exact component={Home} />
    <Route path="/gladiator" exact component={Gladiators} />
    </div>
  );
}

export default App;

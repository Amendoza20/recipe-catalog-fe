import Home from './components/Home';
import Recipe from './components/Recipe';
import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" type="button">Home</Link>
            </li>
            <li>
              <Link to="/recipe" type="button">Recipe</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/recipe"><Recipe /></Route>
      </Switch>
    </Router>
  );
}

export default App;

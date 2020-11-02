import { Switch, Link, Route } from "react-router-dom";
import CharacterList from './components/CharacterList';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
      <Route exact path="/" component={CharacterList} />
      <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;

import { Switch, Route, Redirect } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/about" component={About} />
        <Redirect to="/characters" />
      </Switch>
    </div>
  );
}

export default App;

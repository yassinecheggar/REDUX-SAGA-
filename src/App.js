import logo from "./logo.svg";
import "./App.css";
import Fisrt from "./Pages/First_page";
import Second from "./Pages/Second_page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Fisrt />
        </Route>

        <Route path="/page2">
          <Second />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


import logo from './imgs/SunWestLogo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
function App() {
  return (
<Router>
      <div>

        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
       
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

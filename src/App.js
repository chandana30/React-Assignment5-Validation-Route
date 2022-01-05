import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch >
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <SignUp />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

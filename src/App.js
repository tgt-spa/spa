import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about/About";
import Users from "./pages/users/Users";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pages/target-spa/tgt-spa/">Home</Link>
            </li>
            <li>
              <Link to="/pages/target-spa/tgt-spa/about">About</Link>
            </li>
            <li>
              <Link to="/pages/target-spa/tgt-spa/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pages/target-spa/tgt-spa/about">
            <About />
          </Route>
          <Route path="/pages/target-spa/tgt-spa/users">
            <Users />
          </Route>
          <Route path="/pages/target-spa/tgt-spa/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

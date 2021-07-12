import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/pages/Home'
import GuestList from "./components/pages/GuestList";
import "bootstrap/dist/css/bootstrap.min.css";

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/guest/list" component={GuestList} />
					<Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
    </Router>
  );
};

export default Routes;

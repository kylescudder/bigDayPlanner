import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import GuestList from "./components/pages/GuestList";
import GuestUpdate from "./components/pages/GuestUpdate";
import GuestInsert from "./components/pages/GuestInsert";
import GuestLanding from "./components/pages/GuestLanding";
import OtherInfo from "./components/pages/OtherInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";

function Routes() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/guest/list" component={GuestList} />
          <Route exact path="/guest/add" component={GuestInsert} />
          <Route exact path="/guest/update/:id" component={GuestUpdate} />
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/guest/guestLanding/:id" component={GuestLanding} />
          <Route path="/OtherInfo" component={OtherInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;

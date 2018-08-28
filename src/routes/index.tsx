import * as React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Signin from "./users/Signin";
import Signup from "./users/Signup";
import Dashboard from "./dashboard";

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact={true} from="/" to="/dashboard" />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);

export default Routes;
